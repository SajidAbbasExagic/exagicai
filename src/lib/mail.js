import nodemailer from "nodemailer";

function getSmtpConfig() {
  const host = process.env.SMTP_HOST?.trim();
  const user = process.env.SMTP_USER?.trim();
  const pass = process.env.SMTP_PASSWORD?.trim();
  const port = parseInt(process.env.SMTP_PORT || "465", 10);

  if (!host || !user || !pass) {
    return null;
  }

  return {
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 15_000,
    tls: {
      rejectUnauthorized: false,
    },
  };
}

function createTransporter() {
  const config = getSmtpConfig();
  if (!config) return null;
  return nodemailer.createTransport(config);
}

export const sendEmail = async ({ to, subject, html, replyTo }) => {
  if (!to) {
    return { success: false, error: "No recipient configured." };
  }

  const transporter = createTransporter();
  if (!transporter) {
    console.error(
      "SMTP is not configured. Set SMTP_HOST, SMTP_USER, and SMTP_PASSWORD.",
    );
    return { success: false, error: "Email service is not configured." };
  }

  const mailOptions = {
    from: `"${process.env.MAIL_FROM_NAME || "Exagic AI"}" <${process.env.SMTP_USER}>`,
    to,
    subject,
    html,
    replyTo: replyTo || process.env.SMTP_USER,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      success: false,
      error: error?.message || "Failed to send email.",
    };
  } finally {
    transporter.close();
  }
};
