export async function verifyCaptchaAction(token) {
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
        return { success: false, message: "reCAPTCHA validation failed: potential bot detected" };
      }
      return { success: true };
    } else {
      return { success: false, message: "reCAPTCHA validation failed", errors: data["error-codes"] };
    }
  } catch (error) {
    return { success: false, message: "Error validating reCAPTCHA" };
  }
}
