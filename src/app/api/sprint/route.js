import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/mail";
import { verifyCaptchaAction } from "@/lib/recaptcha";

export async function POST(request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, projectDetails, path, recaptchaToken } = body;

    if (!recaptchaToken) {
      return NextResponse.json(
        { success: false, error: "Please complete the CAPTCHA." },
        { status: 400 }
      );
    }

    // Verify reCAPTCHA token
    const captchaValidation = await verifyCaptchaAction(recaptchaToken);
    if (!captchaValidation.success) {
      return NextResponse.json(
        { success: false, error: captchaValidation.message || "CAPTCHA verification failed. Please try again." },
        { status: 400 }
      );
    }

    const recipient = process.env.CONTACT_RECIPIENT_EMAIL || process.env.SMTP_USER;
    const sourceUrl = `https://exagic.ai${path || "/"}`;

    const html = `
    <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
      <h2 style="color: #000;">New 48hr Website Sprint Lead</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
      <p><strong>Project Details:</strong> ${projectDetails}</p>
      <p><strong>Source Page:</strong> <a href="${sourceUrl}">${sourceUrl}</a></p>
      <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
      <p style="font-size: 12px; color: #999;">Sent from Exagic.ai AI Website Sprint form.</p>
    </div>
  `;

    const result = await sendEmail({
      to: recipient,
      subject: `[Website Sprint Lead] ${firstName} ${lastName}`,
      html,
      replyTo: email,
    });

    if (!result.success) {
      return NextResponse.json(
        { success: false, error: result.error || "Failed to send." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("API /api/sprint error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send. Please try again." },
      { status: 500 }
    );
  }
}
