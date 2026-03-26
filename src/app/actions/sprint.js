"use server";

import { sendEmail } from "@/lib/mail";

export async function sendSprintEmail(formData) {
  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const expertise = formData.get("expertise");
  const recaptchaToken = formData.get("recaptchaToken");

  if (!recaptchaToken) {
    return { success: false, error: "Please complete the CAPTCHA." };
  }

  // Verify reCAPTCHA token
  try {
    const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
    });

    const data = await response.json();
    if (!data.success) {
      return { success: false, error: "CAPTCHA verification failed. Please try again." };
    }
  } catch (error) {
    console.error("reCAPTCHA Error:", error);
    return { success: false, error: "Authentication service error. Please try later." };
  }

  const recipient = process.env.CONTACT_RECIPIENT_EMAIL || process.env.SMTP_USER;

  const html = `
    <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
      <h2 style="color: #000;">New 48hr Website Sprint Lead</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
      <p><strong>Expertise:</strong> ${expertise}</p>
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
