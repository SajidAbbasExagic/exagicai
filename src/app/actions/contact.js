"use server";

import { sendEmail } from "@/lib/mail";
import { verifyCaptchaAction } from "@/lib/recaptcha";

export async function sendContactEmail(formData) {
  try {
    const token = formData.get("recaptchaToken");
    const captchaValidation = await verifyCaptchaAction(token);
    if (!captchaValidation.success) {
      return { success: false, message: captchaValidation.message };
    }

    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");
    const path = formData.get("path") || "/";
    const sourceUrl = `https://exagic.ai${path}`;

    const recipient =
      process.env.CONTACT_RECIPIENT_EMAIL || process.env.SMTP_USER;

    if (!recipient) {
      return {
        success: false,
        message: "Contact email is not configured on the server.",
      };
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
      return {
        success: false,
        message: result.error || "Failed to send your message.",
      };
    }

    return { success: true };
  } catch (error) {
    console.error("sendContactEmail error:", error);
    return {
      success: false,
      message: "Failed to send your message. Please try again.",
    };
  }
}

export async function sendMeetingRequest({
  name,
  email,
  dateLabel,
  timeLabel,
  timezone,
  path,
  recaptchaToken,
}) {
  try {
    const captchaValidation = await verifyCaptchaAction(recaptchaToken);
    if (!captchaValidation.success) {
      return { success: false, message: captchaValidation.message || "CAPTCHA verification failed." };
    }

    if (!name?.trim() || !email?.trim() || !dateLabel || !timeLabel) {
      return { success: false, message: "Missing required fields." };
    }

    const recipient =
      process.env.CONTACT_RECIPIENT_EMAIL || process.env.SMTP_USER;

    if (!recipient) {
      return {
        success: false,
        message: "Meeting requests are not configured on the server.",
      };
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
      return {
        success: false,
        message: result.error || "Failed to send meeting request.",
      };
    }

    return { success: true };
  } catch (error) {
    console.error("sendMeetingRequest error:", error);
    return {
      success: false,
      message: "Failed to send meeting request. Please try again.",
    };
  }
}
