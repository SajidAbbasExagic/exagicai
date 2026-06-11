"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";
import { sendCommentEmail } from "@/app/actions/comment";

export default function ArticleComments({ articleTitle }) {
  const pathname = usePathname();
  const [formData, setFormData] = useState({
    comment: "",
    name: "",
    email: "",
    website: "",
    saveInfo: false,
  });
  const [status, setStatus] = useState("idle"); // 'idle', 'submitting', 'success', 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    const form = e.target;

    if (!window.grecaptcha) {
      setStatus("error");
      return;
    }

    window.grecaptcha.ready(async () => {
      try {
        const token = await window.grecaptcha.execute(
          process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
          { action: "comment_submit" }
        );

        const data = new FormData(form);
        data.append("recaptchaToken", token);
        data.append("postUrl", `https://exagic.ai${pathname}`);
        data.append("articleTitle", articleTitle);

        const result = await sendCommentEmail(data);

        if (result.success) {
          setStatus("success");
          form.reset();
        } else {
          setStatus("error");
        }
      } catch (error) {
        console.error("CAPTCHA error:", error);
        setStatus("error");
      }
    });
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  if (status === "success") {
    return (
      <div className="mt-16 pt-16 border-t border-zinc-100">
        <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-emerald-900 mb-2">
            Thank you!
          </h3>
          <p className="text-emerald-700">
            Your comment has been submitted and is awaiting moderation.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-16 pt-16 border-t border-zinc-100">
      <h2 className="text-3xl font-bold text-zinc-900 mb-8">Comments</h2>

      {status === "error" && (
        <div className="bg-rose-50 border border-rose-100 rounded-xl p-4 text-rose-700 mb-6 text-sm font-medium">
          There was an error sending your comment. Please try again later.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="comment"
            className="block text-sm font-bold text-zinc-700 mb-2"
          >
            Comment *
          </label>
          <textarea
            id="comment"
            name="comment"
            required
            rows={5}
            value={formData.comment}
            onChange={handleChange}
            className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-zinc-900 focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-all"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-bold text-zinc-700 mb-2"
            >
              Name *
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-zinc-900 focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-all"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-bold text-zinc-700 mb-2"
            >
              Email * (Not published)
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-zinc-900 focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-all"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="website"
            className="block text-sm font-bold text-zinc-700 mb-2"
          >
            Website (Optional)
          </label>
          <input
            id="website"
            name="website"
            type="url"
            value={formData.website}
            onChange={handleChange}
            className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-zinc-900 focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-all"
          />
        </div>

        <div className="flex items-start gap-3">
          <input
            id="saveInfo"
            name="saveInfo"
            type="checkbox"
            checked={formData.saveInfo}
            onChange={handleChange}
            className="mt-1 h-4 w-4 rounded border-zinc-300 text-brand focus:ring-brand"
          />
          <label htmlFor="saveInfo" className="text-sm text-zinc-500">
            Save my name, email, and website in this browser for the next time I
            comment.
          </label>
        </div>

        {/* Google reCAPTCHA v3 Script */}
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
          strategy="lazyOnload"
        />

        <div className="pt-6">
          <button
            type="submit"
            disabled={status === "submitting"}
            className={`w-full rounded-full py-4 text-center font-bold transition-all ${
              status !== "submitting"
                ? "bg-brand text-white shadow-xl hover:scale-[1.02] active:scale-[0.98]"
                : "bg-zinc-100 text-zinc-400 cursor-not-allowed"
            }`}
          >
            {status === "submitting" ? "Posting..." : "Post Comment"}
          </button>
        </div>
      </form>
    </div>
  );
}
