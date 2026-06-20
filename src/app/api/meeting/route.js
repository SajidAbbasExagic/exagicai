import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/mail";
import { verifyCaptchaAction } from "@/lib/recaptcha";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, dateLabel, timeLabel, timezone, path, recaptchaToken } = body;

    // Verify reCAPTCHA
    const captchaValidation = await verifyCaptchaAction(recaptchaToken);
    if (!captchaValidation.success) {
      return NextResponse.json(
        { success: false, message: captchaValidation.message || "CAPTCHA verification failed." },
        { status: 400 }
      );
    }

    if (!name?.trim() || !email?.trim() || !dateLabel || !timeLabel) {
      return NextResponse.json(
        { success: false, message: "Missing required fields." },
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
      <p style="font-size: 12px; color: #999;">Sent from Exagic.ai meeting scheduler.</p>
    </div>
  `;

    const result = await sendEmail({
      to: recipient,
      subject: `[Meeting Request] ${name} — ${dateLabel} at ${timeLabel}`,
      html,
      replyTo: email,
    });

    if (!result.success) {
      return NextResponse.json(
        { success: false, message: result.error || "Failed to send meeting request." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("API /api/meeting error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send meeting request. Please try again." },
      { status: 500 }
    );
  }
}
