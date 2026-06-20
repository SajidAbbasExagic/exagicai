import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/mail";
import { verifyCaptchaAction } from "@/lib/recaptcha";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, comment, website, postUrl, articleTitle, recaptchaToken } = body;

    // Verify reCAPTCHA
    const captchaValidation = await verifyCaptchaAction(recaptchaToken);
    if (!captchaValidation.success) {
      return NextResponse.json(
        { success: false, message: captchaValidation.message },
        { status: 400 }
      );
    }

    const recipient = process.env.CONTACT_RECIPIENT_EMAIL || process.env.SMTP_USER;

    if (!recipient) {
      return NextResponse.json(
        { success: false, message: "Contact email is not configured." },
        { status: 500 }
      );
    }

    const html = `
    <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
      <h2 style="color: #000;">New Comment on: ${articleTitle || "N/A"}</h2>
      <p><strong>Article:</strong> ${articleTitle || "N/A"}</p>
      <p><strong>Source Page:</strong> <a href="${postUrl || "#"}">${postUrl || "N/A"}</a></p>
      <p><strong>From:</strong> ${name} &lt;${email}&gt;</p>
      <p><strong>Website:</strong> ${website || "N/A"}</p>
      <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
      <p><strong>Comment:</strong></p>
      <p style="white-space: pre-wrap; background: #f9f9f9; padding: 15px; border-radius: 8px;">${comment}</p>
      <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
      <p style="font-size: 12px; color: #999;">Sent from Exagic.ai Lab comments section.</p>
    </div>
  `;

    const result = await sendEmail({
      to: recipient,
      subject: `[New Comment] on "${articleTitle || "N/A"}" from ${name}`,
      html,
      replyTo: email,
    });

    if (!result.success) {
      return NextResponse.json(
        { success: false, message: result.error || "Failed to send comment." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("API /api/comment error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send comment. Please try again." },
      { status: 500 }
    );
  }
}
