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
  let reservedSlot = null;

  try {
    const body = await request.json();
    const { name, email, subject, message, path, recaptchaToken, meetingSlot } = body;

    // Verify reCAPTCHA
    const captchaValidation = await verifyCaptchaAction(recaptchaToken);
    if (!captchaValidation.success) {
      return NextResponse.json(
        { success: false, message: captchaValidation.message },
        { status: 400 }
      );
    }

    const sourceUrl = `https://exagic.ai${path || "/"}`;
    const recipient =
      process.env.CONTACT_RECIPIENT_EMAIL || process.env.SMTP_USER;

    if (!recipient) {
      return NextResponse.json(
        { success: false, message: "Contact email is not configured on the server." },
        { status: 500 }
      );
    }

    // A meeting slot is optional on this form. When one is attached it goes
    // through exactly the same validate-then-reserve path as the modal, so both
    // entry points block the slot consistently.
    let meetingHtml = "";

    if (meetingSlot) {
      if (!isValidSlotIso(meetingSlot)) {
        return NextResponse.json(
          {
            success: false,
            message: "That meeting time is no longer available. Please pick another slot.",
          },
          { status: 400 }
        );
      }

      const reservation = await reserve({
        slot: meetingSlot,
        name: name?.trim() || null,
        email: email?.trim() || null,
        source: "contact-form",
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

      reservedSlot = meetingSlot;

      meetingHtml = `
        <p><strong>Scheduled Meeting:</strong> ${formatLongDateLabel(meetingSlot)} at ${formatTimeLabel(meetingSlot)} (${getTimezoneLabel()})</p>
        <p style="font-size: 12px; color: #999;">
          This slot is now blocked on exagic.ai. To reopen it, release the slot
          <code>${meetingSlot}</code> via the meeting admin endpoint.
        </p>
      `;
    }

    const html = `
    <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
      <h2 style="color: #000;">New Strategy Inquiry Received</h2>
      <p><strong>From:</strong> ${name} &lt;${email}&gt;</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Source Page:</strong> <a href="${sourceUrl}">${sourceUrl}</a></p>
      ${meetingHtml}
      <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
      <p><strong>Message:</strong></p>
      <p style="white-space: pre-wrap; background: #f9f9f9; padding: 15px; border-radius: 8px;">${message}</p>
      <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
      <p style="font-size: 12px; color: #999;">Sent from Exagic.ai contact form.</p>
    </div>
  `;

    const result = await sendEmail({
      to: recipient,
      subject: `[Inquiry] ${subject} from ${name}`,
      html,
      replyTo: email,
    });

    if (!result.success) {
      if (reservedSlot) await release(reservedSlot);
      return NextResponse.json(
        { success: false, message: result.error || "Failed to send your message." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("API /api/contact error:", error);
    // Never leave a slot blocked because of a failure after reserving it.
    if (reservedSlot) {
      await release(reservedSlot).catch(() => {});
    }
    return NextResponse.json(
      { success: false, message: "Failed to send your message. Please try again." },
      { status: 500 }
    );
  }
}
