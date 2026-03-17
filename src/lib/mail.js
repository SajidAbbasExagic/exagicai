import nodemailer from "nodemailer";

const smtpConfig = {
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || "465"),
  secure: (process.env.SMTP_PORT || "465") == "465", 
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false 
  }
};

export const transporter = nodemailer.createTransport(smtpConfig);

export const sendEmail = async ({ to, subject, html, replyTo }) => {
  const mailOptions = {
    from: `"${process.env.MAIL_FROM_NAME}" <${process.env.SMTP_USER}>`,
    to,
    subject,
    html,
    replyTo: replyTo || process.env.SMTP_USER,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error: error.message };
  }
};
