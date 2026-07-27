/**
 * Single source of truth for meeting slot rules.
 *
 * Imported by BOTH the client modal and the API routes, so the schedule can
 * never drift between what we offer and what we accept. Pure functions only —
 * no React, no fs, no env.
 *
 * Slots are identified everywhere by their canonical UTC ISO instant
 * (e.g. "2026-07-28T19:00:00.000Z"). Human labels are derived for display only,
 * never used as keys — formatted labels break across DST and timezones.
 */

export const TIMEZONE = "America/Los_Angeles";
export const SLOT_MINUTES = 60;

const BUSINESS_START = 9;
const BUSINESS_END = 21;

/** How far ahead a booking may be made. Bounds abuse from hand-crafted requests. */
export const MAX_BOOKING_DAYS_AHEAD = 180;

/**
 * Offset (ms) of TIMEZONE from UTC at a given instant.
 * Positive when the zone is ahead of UTC.
 */
function getZoneOffsetMs(utcMs, timeZone = TIMEZONE) {
  const dtf = new Intl.DateTimeFormat("en-US", {
    timeZone,
    hour12: false,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const parts = {};
  for (const part of dtf.formatToParts(new Date(utcMs))) {
    parts[part.type] = part.value;
  }

  const asUtc = Date.UTC(
    Number(parts.year),
    Number(parts.month) - 1,
    Number(parts.day),
    Number(parts.hour) % 24,
    Number(parts.minute),
    Number(parts.second),
  );

  return asUtc - utcMs;
}

/**
 * Convert a wall-clock time in TIMEZONE to a UTC instant (ms).
 * Two passes settle the DST boundary case.
 */
export function zonedWallTimeToInstant(dateKey, hour, minute, timeZone = TIMEZONE) {
  const [year, month, day] = dateKey.split("-").map(Number);
  const naive = Date.UTC(year, month - 1, day, hour, minute);

  let instant = naive - getZoneOffsetMs(naive, timeZone);
  instant = naive - getZoneOffsetMs(instant, timeZone);

  return instant;
}

/** "YYYY-MM-DD" as seen in TIMEZONE. */
export function getDateKey(date, timeZone = TIMEZONE) {
  return new Date(date).toLocaleDateString("en-CA", { timeZone });
}

/** "Mon" | "Tue" | ... as seen in TIMEZONE. */
export function getWeekdayShort(date, timeZone = TIMEZONE) {
  return new Date(date).toLocaleDateString("en-US", {
    weekday: "short",
    timeZone,
  });
}

export function formatTimeLabel(date, timeZone = TIMEZONE) {
  return new Date(date).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    timeZone,
  });
}

export function formatDayLabel(date, timeZone = TIMEZONE) {
  return new Date(date).toLocaleDateString("en-US", {
    weekday: "short",
    timeZone,
  });
}

export function formatDateLabel(date, timeZone = TIMEZONE) {
  return new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    timeZone,
  });
}

/** "Friday, July 24, 2026" — the long form used in notification emails. */
export function formatLongDateLabel(date, timeZone = TIMEZONE) {
  return new Date(date).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone,
  });
}

export function getTimezoneLabel(timeZone = TIMEZONE) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone,
    timeZoneName: "longGeneric",
  }).formatToParts(new Date());
  return parts.find((part) => part.type === "timeZoneName")?.value || "Pacific Time";
}

/**
 * The wall-clock times offered on a given day, by weekday in TIMEZONE.
 * This is the schedule — change business hours here and both the UI and the
 * server-side validation follow automatically.
 */
export function getSlotTimesForDateKey(dateKey) {
  // Noon avoids any DST edge when asking "what weekday is this dateKey?"
  const weekday = getWeekdayShort(zonedWallTimeToInstant(dateKey, 12, 0));

  if (weekday === "Fri") {
    return ["18:30", "19:00", "19:30"];
  }

  if (weekday === "Sat") {
    return ["09:00", "10:00", "11:00", "12:00", "13:00", "16:00", "17:00"];
  }

  if (weekday === "Sun") {
    const times = [];
    for (let hour = BUSINESS_START; hour < BUSINESS_END; hour++) {
      for (let minute = 0; minute < 60; minute += SLOT_MINUTES) {
        times.push(
          `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`,
        );
      }
    }
    return times;
  }

  // Monday - Thursday
  return ["12:00", "12:30", "13:00", "13:30", "18:30", "19:00"];
}

/**
 * All bookable slots for a day, as { iso, timeLabel }.
 * Past slots are excluded. Does NOT know about existing bookings — callers
 * layer availability on top.
 */
export function buildSlotsForDateKey(dateKey, now = Date.now()) {
  const slots = [];

  for (const timeStr of getSlotTimesForDateKey(dateKey)) {
    const [hour, minute] = timeStr.split(":").map(Number);
    const instant = zonedWallTimeToInstant(dateKey, hour, minute);

    if (instant <= now) continue;

    slots.push({
      iso: new Date(instant).toISOString(),
      timeLabel: formatTimeLabel(instant),
    });
  }

  return slots;
}

/**
 * Is this ISO string a real, still-bookable slot?
 *
 * Guards the API against hand-crafted requests for times we never offered —
 * without this, blocking is meaningless because anyone could reserve 3am.
 */
export function isValidSlotIso(iso, now = Date.now()) {
  if (typeof iso !== "string" || !iso) return false;

  const instant = Date.parse(iso);
  if (Number.isNaN(instant)) return false;

  if (instant <= now) return false;
  if (instant > now + MAX_BOOKING_DAYS_AHEAD * 24 * 60 * 60 * 1000) return false;

  // Regenerate the day's legitimate slots and require an exact instant match.
  const dateKey = getDateKey(instant);
  return buildSlotsForDateKey(dateKey, now).some(
    (slot) => Date.parse(slot.iso) === instant,
  );
}
