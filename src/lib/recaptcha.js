export async function verifyCaptchaAction(token) {
  if (process.env.NODE_ENV === "development") {
    console.warn("reCAPTCHA validation bypassed in development mode.");
    return { success: true };
  }

  if (!token) return { success: false, message: "No reCAPTCHA token provided" };
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  if (!secretKey) {
    console.warn("RECAPTCHA_SECRET_KEY is not set.");
    return { success: false, message: "Server misconfiguration" };
  }
  
  const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`;
  
  try {
    const res = await fetch(url, { method: "POST" });
    const data = await res.json();
    if (data.success) {
      // For reCAPTCHA v3, verify the score (threshold: 0.5)
      if (data.score !== undefined && data.score < 0.5) {
        return { success: false, message: `reCAPTCHA validation failed: potential bot detected (score: ${data.score})` };
      }
      return { success: true };
    } else {
      const errorCodes = data["error-codes"]?.join(", ") || "unknown";
      return { success: false, message: `reCAPTCHA validation failed: ${errorCodes}` };
    }
  } catch (error) {
    return { success: false, message: `Error validating reCAPTCHA: ${error.message}` };
  }
}
