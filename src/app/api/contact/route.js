import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/mail";
import { verifyCaptchaAction } from "@/lib/recaptcha";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, subject, message, path, recaptchaToken } = body;

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

    const html = `
    <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
      <h2 style="color: #000;">New Strategy Inquiry Received</h2>
      <p><strong>From:</strong> ${name} &lt;${email}&gt;</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Source Page:</strong> <a href="${sourceUrl}">${sourceUrl}</a></p>
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
      return NextResponse.json(
        { success: false, message: result.error || "Failed to send your message." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("API /api/contact error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send your message. Please try again." },
      { status: 500 }
    );
  }
}
