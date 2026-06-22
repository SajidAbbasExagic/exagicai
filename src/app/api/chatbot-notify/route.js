import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/mail";

export async function POST(request) {
  try {
    const body = await request.json();
    const { email, path } = body;

    if (!email) {
      return NextResponse.json(
        { success: false, message: "Email is required." },
        { status: 400 }
      );
    }

    const sourceUrl = `https://exagic.ai${path || "/"}`;
    const recipient = process.env.CONTACT_RECIPIENT_EMAIL || process.env.SMTP_USER;

    if (!recipient) {
      return NextResponse.json(
        { success: false, message: "Contact email is not configured on the server." },
        { status: 500 }
      );
    }

    const html = `
    <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
      <h2 style="color: #000;">New Chatbot Conversation Started</h2>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Source Page:</strong> <a href="${sourceUrl}">${sourceUrl}</a></p>
      <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
      <p style="white-space: pre-wrap; background: #f9f9f9; padding: 15px; border-radius: 8px;">
        ${email} just started a chat with you from the chatbot.
      </p>
      <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
      <p style="font-size: 12px; color: #999;">Sent from Exagic.ai Floating Chatbot.</p>
    </div>
  `;

    const result = await sendEmail({
      to: recipient,
      subject: `[Chatbot] New Chat Started by ${email}`,
      html,
      replyTo: email,
    });

    if (!result.success) {
      return NextResponse.json(
        { success: false, message: result.error || "Failed to send notification." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("API /api/chatbot-notify error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send notification." },
      { status: 500 }
    );
  }
}
