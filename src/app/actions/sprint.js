"use server";

import { sendEmail } from "@/lib/mail";
import { verifyCaptchaAction } from "@/lib/recaptcha";

export async function sendSprintEmail(formData) {
  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const projectDetails = formData.get("projectDetails");
  const recaptchaToken = formData.get("recaptchaToken");
  const path = formData.get("path") || "/";
  const sourceUrl = `https://exagic.ai${path}`;

  if (!recaptchaToken) {
    return { success: false, error: "Please complete the CAPTCHA." };
  }

  // Verify reCAPTCHA token
  const captchaValidation = await verifyCaptchaAction(recaptchaToken);
  if (!captchaValidation.success) {
    return { success: false, error: captchaValidation.message || "CAPTCHA verification failed. Please try again." };
  }

  const recipient = process.env.CONTACT_RECIPIENT_EMAIL || process.env.SMTP_USER;

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

  return await sendEmail({
    to: recipient,
    subject: `[Website Sprint Lead] ${firstName} ${lastName}`,
    html,
    replyTo: email,
  });
}
