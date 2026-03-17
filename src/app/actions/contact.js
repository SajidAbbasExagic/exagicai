"use server";

import { sendEmail } from "@/lib/mail";

export async function sendContactEmail(formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const subject = formData.get("subject");
  const message = formData.get("message");

  const recipient = process.env.CONTACT_RECIPIENT_EMAIL || process.env.SMTP_USER;

  const html = `
    <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
      <h2 style="color: #000;">New Strategy Inquiry Received</h2>
      <p><strong>From:</strong> ${name} &lt;${email}&gt;</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
      <p><strong>Message:</strong></p>
      <p style="white-space: pre-wrap; background: #f9f9f9; padding: 15px; border-radius: 8px;">${message}</p>
      <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
      <p style="font-size: 12px; color: #999;">Sent from Exagic.ai contact form.</p>
    </div>
  `;

  return await sendEmail({
    to: recipient,
    subject: `[Inquiry] ${subject} from ${name}`,
    html,
    replyTo: email,
  });
}
