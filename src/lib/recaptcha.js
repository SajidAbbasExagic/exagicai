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
  
  // Send credentials in the POST body, not the query string: a secret in a URL
  // is recorded by access logs, proxies and any intermediary along the way.
  try {
    const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret: secretKey, response: token }),
    });
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
