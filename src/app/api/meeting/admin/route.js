import { NextResponse } from "next/server";
import crypto from "crypto";
import { listBookings, release } from "@/lib/bookings";
import { formatLongDateLabel, formatTimeLabel, getTimezoneLabel } from "@/lib/slots";

/**
 * Manual control over booked slots — the "until we ourselves enable it" half.
 *
 *   GET    → list upcoming bookings
 *   DELETE → free a slot again, body: { "slot": "<iso>" }
 *
 * Auth is a bearer token in the Authorization header, NOT a query string:
 * a token in a URL ends up in OpenLiteSpeed access logs and browser history.
 *
 * Until MEETING_ADMIN_TOKEN is set this route refuses everything (503). It
 * fails CLOSED on purpose — an unset secret must never mean "no auth required".
 */

export const dynamic = "force-dynamic";
export const revalidate = 0;

const NO_STORE = {
  "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0",
};

function timingSafeEqual(a, b) {
  const bufA = Buffer.from(a, "utf8");
  const bufB = Buffer.from(b, "utf8");
  // timingSafeEqual throws on length mismatch, so compare lengths first. The
  // length of a secret is not itself sensitive.
  if (bufA.length !== bufB.length) return false;
  return crypto.timingSafeEqual(bufA, bufB);
}

/** null when authorised, otherwise the response to return. */
function authorize(request) {
  const expected = process.env.MEETING_ADMIN_TOKEN;

  if (!expected) {
    return NextResponse.json(
      {
        success: false,
        message:
          "Slot administration is not configured. Set MEETING_ADMIN_TOKEN on the server.",
      },
      { status: 503, headers: NO_STORE },
    );
  }

  const header = request.headers.get("authorization") || "";
  const token = header.startsWith("Bearer ") ? header.slice(7).trim() : "";

  if (!token || !timingSafeEqual(token, expected)) {
    return NextResponse.json(
      { success: false, message: "Unauthorized." },
      { status: 401, headers: NO_STORE },
    );
  }

  return null;
}

export async function GET(request) {
  const denied = authorize(request);
  if (denied) return denied;

  try {
    const bookings = await listBookings();

    return NextResponse.json(
      {
        success: true,
        timezone: getTimezoneLabel(),
        count: bookings.length,
        bookings: bookings.map((booking) => ({
          ...booking,
          dateLabel: formatLongDateLabel(booking.slot),
          timeLabel: formatTimeLabel(booking.slot),
        })),
      },
      { headers: NO_STORE },
    );
  } catch (error) {
    console.error("API /api/meeting/admin GET error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to read bookings." },
      { status: 500, headers: NO_STORE },
    );
  }
}

export async function DELETE(request) {
  const denied = authorize(request);
  if (denied) return denied;

  try {
    const body = await request.json().catch(() => ({}));
    const slot = typeof body?.slot === "string" ? body.slot.trim() : "";

    if (!slot) {
      return NextResponse.json(
        { success: false, message: "Provide the slot ISO string to release." },
        { status: 400, headers: NO_STORE },
      );
    }

    const result = await release(slot);

    return NextResponse.json(
      {
        success: true,
        released: result.removed,
        message: result.removed
          ? "Slot released and is bookable again."
          : "No booking found for that slot.",
      },
      { headers: NO_STORE },
    );
  } catch (error) {
    console.error("API /api/meeting/admin DELETE error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to release slot." },
      { status: 500, headers: NO_STORE },
    );
  }
}
