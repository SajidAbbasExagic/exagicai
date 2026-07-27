/**
 * Booked-slot storage. Server-only.
 *
 * Deliberately narrow: getBookedSlots / reserve / release / listBookings.
 * Every other file talks to bookings through these four functions, so moving to
 * a real database or Google Calendar later means rewriting only this module.
 *
 * Storage is a JSON file. That is sufficient here because the app runs as a
 * single long-lived PM2 process (`pm2 start npm -- start`) with a writable
 * disk — not a serverless function.
 *
 * IMPORTANT (deploy safety): the default path lives in `.data/`, which is
 * gitignored. The deploy runs `git reset --hard origin/main`, which does not
 * touch untracked files, so bookings survive deploys. Set BOOKINGS_FILE to an
 * absolute path outside the repo for extra safety. A `git clean -fdx` would
 * still wipe it — don't add that to the deploy script.
 */

import { promises as fs } from "fs";
import path from "path";

/**
 * Path to the store.
 *
 * The default is deliberately RELATIVE: `fs` resolves it against process.cwd()
 * at runtime, which under `pm2 start npm -- start` is the app root. Using
 * path.join(process.cwd(), ...) here instead would make Turbopack's file tracer
 * pull the entire project into the build output.
 *
 * In production set BOOKINGS_FILE to an absolute path outside the repo.
 */
function getBookingsFile() {
  return process.env.BOOKINGS_FILE || ".data/bookings.json";
}

/**
 * Serializes all read-modify-write cycles.
 *
 * Without this, two people confirming the same slot in the same tick would both
 * read "free" and both write — a double booking. Node is single-threaded but
 * `await` yields, so the interleaving is real.
 *
 * Valid only while the app runs as ONE process. If this ever moves to PM2
 * cluster mode, this guarantee breaks and needs a file lock or a real database.
 */
let tail = Promise.resolve();

function withLock(fn) {
  const result = tail.then(fn, fn);
  tail = result.then(
    () => undefined,
    () => undefined,
  );
  return result;
}

async function readFile() {
  try {
    const raw = await fs.readFile(getBookingsFile(), "utf8");
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed?.bookings) ? parsed.bookings : [];
  } catch (error) {
    if (error.code === "ENOENT") return [];
    // A corrupt file must not take the whole scheduler down: log loudly and
    // treat as empty rather than throwing on every request.
    console.error("bookings: failed to read store, treating as empty:", error);
    return [];
  }
}

async function writeFile(bookings) {
  const file = getBookingsFile();
  await fs.mkdir(path.dirname(file), { recursive: true });

  // Write-then-rename so a crash mid-write can never leave a truncated file.
  const tmp = `${file}.${process.pid}.tmp`;
  await fs.writeFile(tmp, JSON.stringify({ bookings }, null, 2), "utf8");
  await fs.rename(tmp, file);
}

/** Drop slots already in the past so the file cannot grow without bound. */
function prune(bookings, now) {
  return bookings.filter((booking) => {
    const instant = Date.parse(booking.slot);
    return !Number.isNaN(instant) && instant > now;
  });
}

/** Every upcoming booking. Used by the admin route. */
export async function listBookings() {
  return withLock(async () => {
    const now = Date.now();
    const bookings = await readFile();
    const pruned = prune(bookings, now);

    if (pruned.length !== bookings.length) {
      await writeFile(pruned);
    }

    return pruned.sort((a, b) => Date.parse(a.slot) - Date.parse(b.slot));
  });
}

/** ISO instants that are taken. This is what the availability endpoint returns. */
export async function getBookedSlots() {
  const bookings = await listBookings();
  return bookings.map((booking) => booking.slot);
}

/**
 * Atomically claim a slot.
 *
 * Returns { ok: false, reason: "taken" } if someone got there first — callers
 * should surface that as a 409 so the user can pick another time.
 *
 * Call this BEFORE sending the notification email, and release() if the mail
 * fails. Reserving first is what closes the race during the SMTP round-trip.
 */
export async function reserve({ slot, name, email, source }) {
  return withLock(async () => {
    const now = Date.now();
    const bookings = prune(await readFile(), now);

    if (bookings.some((booking) => booking.slot === slot)) {
      return { ok: false, reason: "taken" };
    }

    bookings.push({
      slot,
      name: name || null,
      email: email || null,
      source: source || null,
      createdAt: new Date().toISOString(),
    });

    await writeFile(bookings);
    return { ok: true };
  });
}

/**
 * Free a slot again — the "until we ourselves enable it" half of the feature.
 * Used by the admin route, and to roll back a reservation when email fails.
 */
export async function release(slot) {
  return withLock(async () => {
    const now = Date.now();
    const bookings = prune(await readFile(), now);
    const remaining = bookings.filter((booking) => booking.slot !== slot);

    const removed = remaining.length !== bookings.length;
    if (removed) {
      await writeFile(remaining);
    }

    return { ok: true, removed };
  });
}
