import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/mail";
import { verifyCaptchaAction } from "@/lib/recaptcha";
import { reserve, release } from "@/lib/bookings";
import {
  isValidSlotIso,
  formatLongDateLabel,
  formatTimeLabel,
  getTimezoneLabel,
} from "@/lib/slots";

export const dynamic = "force-dynamic";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, slot, path, recaptchaToken } = body;

    // Verify reCAPTCHA
    const captchaValidation = await verifyCaptchaAction(recaptchaToken);
    if (!captchaValidation.success) {
      return NextResponse.json(
        { success: false, message: captchaValidation.message || "CAPTCHA verification failed." },
        { status: 400 }
      );
    }

    if (!name?.trim() || !email?.trim() || !slot) {
      return NextResponse.json(
        { success: false, message: "Missing required fields." },
        { status: 400 }
      );
    }

    // Validate against the shared schedule rather than trusting the client.
    // Without this, a hand-crafted request could book (and therefore block) any
    // arbitrary time.
    if (!isValidSlotIso(slot)) {
      return NextResponse.json(
        { success: false, message: "That time is no longer available. Please pick another slot." },
        { status: 400 }
      );
    }

    const recipient =
      process.env.CONTACT_RECIPIENT_EMAIL || process.env.SMTP_USER;

    if (!recipient) {
      return NextResponse.json(
        { success: false, message: "Meeting requests are not configured on the server." },
        { status: 500 }
      );
    }

    // Claim the slot before sending mail — this is what closes the window where
    // two people could both book during the SMTP round-trip.
    const reservation = await reserve({
      slot,
      name: name.trim(),
      email: email.trim(),
      source: "meeting-modal",
    });

    if (!reservation.ok) {
      return NextResponse.json(
        {
          success: false,
          code: "SLOT_TAKEN",
          message: "Sorry, that time was just booked. Please choose another slot.",
        },
        { status: 409 }
      );
    }

    // Labels are derived server-side from the canonical instant, so the email
    // always reflects the slot actually reserved.
    const dateLabel = formatLongDateLabel(slot);
    const timeLabel = formatTimeLabel(slot);
    const timezone = getTimezoneLabel();
    const sourceUrl = `https://exagic.ai${path || "/"}`;

    const html = `
    <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
      <h2 style="color: #000;">New Meeting Request</h2>
      <p><strong>From:</strong> ${name} &lt;${email}&gt;</p>
      <p><strong>Requested Date:</strong> ${dateLabel}</p>
      <p><strong>Requested Time:</strong> ${timeLabel}</p>
      <p><strong>Timezone:</strong> ${timezone}</p>
      <p><strong>Source Page:</strong> <a href="${sourceUrl}">${sourceUrl}</a></p>
      <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
      <p style="font-size: 12px; color: #999;">
        This slot is now blocked on exagic.ai. To reopen it, release the slot
        <code>${slot}</code> via the meeting admin endpoint.
      </p>
    </div>
  `;

    const result = await sendEmail({
      to: recipient,
      subject: `[Meeting Request] ${name} — ${dateLabel} at ${timeLabel}`,
      html,
      replyTo: email,
    });

    if (!result.success) {
      // Roll back so a mail failure doesn't silently block the slot forever.
      await release(slot);
      return NextResponse.json(
        { success: false, message: result.error || "Failed to send meeting request." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, slot });
  } catch (error) {
    console.error("API /api/meeting error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send meeting request. Please try again." },
      { status: 500 }
    );
  }
}
