export async function verifyCaptchaAction(token) {
  if (!token) return { success: false, message: "No reCAPTCHA token provided" };
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  if (!secretKey) {
    console.warn("RECAPTCHA_SECRET_KEY is not set.");
    // If not set, you might want to fail or pass depending on environment.
    // Assuming we want to fail:
    return { success: false, message: "Server misconfiguration" };
  }
  
  const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`;
  
  try {
    const res = await fetch(url, { method: "POST" });
    const data = await res.json();
    if (data.success) {
      return { success: true };
    } else {
      return { success: false, message: "reCAPTCHA validation failed", errors: data["error-codes"] };
    }
  } catch (error) {
    return { success: false, message: "Error validating reCAPTCHA" };
  }
}
