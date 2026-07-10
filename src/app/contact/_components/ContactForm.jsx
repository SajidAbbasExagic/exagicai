"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";
import ScheduleMeetingModal from "@/components/ScheduleMeetingModal";

export default function ContactForm() {
  const pathname = usePathname();
  const [status, setStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedMeeting, setSelectedMeeting] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);
    setErrorMessage("");
 
    const form = e.target;
 
    if (!window.grecaptcha) {
      setErrorMessage("reCAPTCHA script failed to load. Check ad-blockers or connection.");
      setStatus("error");
      setIsSubmitting(false);
      return;
    }
 
    window.grecaptcha.ready(async () => {
      try {
        const token = await window.grecaptcha.execute(
          process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
          { action: "contact_submit" }
        );
 
        const formData = new FormData(form);
 
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: formData.get("name"),
            email: formData.get("email"),
            subject: formData.get("subject"),
            message: formData.get("message"),
            path: formData.get("path"),
            recaptchaToken: token,
            meetingDate: selectedMeeting ? selectedMeeting.dateLabel : null,
            meetingTime: selectedMeeting ? selectedMeeting.timeLabel : null,
            meetingTimezone: selectedMeeting ? selectedMeeting.timezone : null,
          }),
        });
 
        const result = await res.json();
        console.log("sendContactEmail result:", result);
 
        if (result?.success) {
          setStatus("success");
          setSelectedMeeting(null);
          form.reset();
        } else {
          console.error("Form submission failed:", result);
          setErrorMessage(result?.message || "Something went wrong. Please try again.");
          setStatus("error");
        }
      } catch (error) {
        console.error("CAPTCHA error:", error);
        setErrorMessage(error?.message || "CAPTCHA verification error.");
        setStatus("error");
      } finally {
        setIsSubmitting(false);
      }
    });
  };

  return (
    <div className="bg-white p-6 md:p-8 rounded-2xl border border-zinc-200 shadow-lg shadow-zinc-100/50">
      <h2 className="text-xl font-bold text-zinc-900 mb-6">
        Discuss Your AI Visibility
      </h2>
      {status === "success" && (
        <div className="bg-emerald-50 text-emerald-700 p-4 rounded-xl border border-emerald-100 font-medium text-sm">
          Thank you! Our strategy team will reach out to you within 24 hours.
        </div>
      )}
      {status === "error" && (
        <div className="bg-rose-50 text-rose-700 p-4 rounded-xl border border-rose-100 font-medium text-sm mb-6">
          {errorMessage || "Something went wrong. Please try again or contact us directly."}
        </div>
      )}

      {status !== "success" && (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="hidden" name="path" value={pathname} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                Full Name <span className="text-brand ml-0.5">*</span>
              </label>
              <input
                required
                name="name"
                type="text"
                className="w-full bg-zinc-50 border border-zinc-100 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-all"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                Company Email <span className="text-brand ml-0.5">*</span>
              </label>
              <input
                required
                name="email"
                type="email"
                className="w-full bg-zinc-50 border border-zinc-100 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-all"
                placeholder="john@company.com"
              />
            </div>
          </div>
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
              Subject
            </label>
            <select
              name="subject"
              className="w-full bg-zinc-50 border border-zinc-100 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-all appearance-none cursor-pointer"
            >
              <option>AI SEO Visibility Analysis</option>
              <option>AEO/SRO Implementation</option>
              <option>Technical Data Structuring</option>
              <option>Other / General Inquiry</option>
            </select>
          </div>
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
              How can we help? <span className="text-brand ml-0.5">*</span>
            </label>
            <textarea
              required
              name="message"
              rows={4}
              className="w-full bg-zinc-50 border border-zinc-100 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-all resize-none"
              placeholder="Tell us about your project..."
            ></textarea>
          </div>
          
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
              Schedule a Meeting <span className="text-zinc-400 font-normal ml-0.5">(Optional)</span>
            </label>
            <div className="w-full bg-zinc-50 border border-zinc-100 rounded-lg px-3 py-3 text-sm transition-all">
              {selectedMeeting ? (
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-zinc-800 font-medium">
                  <span>
                    📅 {selectedMeeting.dateLabel} at {selectedMeeting.timeLabel} ({selectedMeeting.timezone})
                  </span>
                  <div className="flex gap-3 text-xs font-bold">
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(true)}
                      className="text-brand hover:underline"
                    >
                      Change
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedMeeting(null)}
                      className="text-rose-500 hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="text-sm font-semibold text-brand hover:text-brand/80 transition-colors underline flex items-center gap-1.5"
                >
                  <span>Choose Time & Date</span>
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>

          {/* Google reCAPTCHA v3 Script */}
          <Script
            src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
            strategy="lazyOnload"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-zinc-900 text-white font-bold py-3 px-6 rounded-lg hover:bg-brand transition-all shadow-md active:scale-[0.98] text-sm ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? "Sending..." : "Submit Strategy Inquiry"}
          </button>
        </form>
      )}
      <ScheduleMeetingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSelectSlot={(slot) => setSelectedMeeting(slot)}
      />
    </div>
  );
}
