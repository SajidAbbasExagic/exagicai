import { NextResponse } from "next/server";
import { getBookedSlots } from "@/lib/bookings";

/**
 * Booked slots, so the scheduler can grey out taken times.
 *
 * Returns every upcoming booking (the store prunes past ones), which keeps the
 * payload small and lets the modal shade slots across weeks without refetching
 * per day.
 */

// The global Cache-Control rule in next.config.mjs matches any path without a
// file extension — which includes /api/*. Without both of these, OpenLiteSpeed
// (LSCache) can serve availability up to 60s stale and users are offered slots
// that are already gone.
export const dynamic = "force-dynamic";
export const revalidate = 0;

const NO_STORE = {
  "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0",
};

export async function GET() {
  try {
    const booked = await getBookedSlots();
    return NextResponse.json({ success: true, booked }, { headers: NO_STORE });
  } catch (error) {
    console.error("API /api/meeting/availability error:", error);
    // Fail open with an empty list: a booking attempt is still validated and
    // reserved server-side, so the worst case is a 409 at confirm time rather
    // than a scheduler that renders no slots at all.
    return NextResponse.json(
      { success: false, booked: [] },
      { status: 200, headers: NO_STORE },
    );
  }
}
