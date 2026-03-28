"use server";

import { sendEmail } from "@/lib/mail";
import { verifyCaptchaAction } from "@/lib/recaptcha";

export async function sendCommentEmail(formData) {
  const token = formData.get("recaptchaToken");
  const captchaValidation = await verifyCaptchaAction(token);
  if (!captchaValidation.success) {
    return { success: false, message: captchaValidation.message };
  }

  const name = formData.get("name");
  const email = formData.get("email");
  const comment = formData.get("comment");
  const website = formData.get("website") || "N/A";
  const postUrl = formData.get("postUrl") || "N/A";
  const articleTitle = formData.get("articleTitle") || "N/A";

  const recipient = process.env.CONTACT_RECIPIENT_EMAIL || process.env.SMTP_USER;

  const html = `
    <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
      <h2 style="color: #000;">New Comment on: ${articleTitle}</h2>
      <p><strong>Article:</strong> ${articleTitle}</p>
      <p><strong>Source Page:</strong> <a href="${postUrl}">${postUrl}</a></p>
      <p><strong>From:</strong> ${name} &lt;${email}&gt;</p>
      <p><strong>Website:</strong> ${website}</p>
      <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
      <p><strong>Comment:</strong></p>
      <p style="white-space: pre-wrap; background: #f9f9f9; padding: 15px; border-radius: 8px;">${comment}</p>
      <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
      <p style="font-size: 12px; color: #999;">Sent from Exagic.ai Lab comments section.</p>
    </div>
  `;

  return await sendEmail({
    to: recipient,
    subject: `[New Comment] on "${articleTitle}" from ${name}`,
    html,
    replyTo: email,
  });
}
