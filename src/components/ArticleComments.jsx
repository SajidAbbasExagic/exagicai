"use client";

import { useState } from "react";

export default function ArticleComments() {
  const [formData, setFormData] = useState({
    comment: "",
    name: "",
    email: "",
    website: "",
    saveInfo: false,
  });
  const [verification, setVerification] = useState(null); // 'robot' or 'human'
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (verification === "human") {
      setSubmitted(true);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  if (submitted) {
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

        <div className="pt-4">
          <p className="text-sm font-bold text-zinc-700 mb-4 text-center">
            Verification
          </p>
          <div className="flex justify-center gap-4">
            <button
              type="button"
              onClick={() => setVerification("robot")}
              className={`px-6 py-2 rounded-full text-sm font-bold border transition-all ${
                verification === "robot"
                  ? "bg-zinc-900 text-white border-zinc-900"
                  : "bg-white text-zinc-500 border-zinc-200 hover:border-zinc-300"
              }`}
            >
              I am a robot.
            </button>
            <button
              type="button"
              onClick={() => setVerification("human")}
              className={`px-6 py-2 rounded-full text-sm font-bold border transition-all ${
                verification === "human"
                  ? "bg-brand text-white border-brand shadow-lg shadow-brand/20"
                  : "bg-white text-zinc-500 border-zinc-200 hover:border-zinc-300"
              }`}
            >
              I am a human.
            </button>
          </div>
        </div>

        <div className="pt-6">
          <button
            type="submit"
            disabled={verification !== "human"}
            className={`w-full rounded-full py-4 text-center font-bold transition-all ${
              verification === "human"
                ? "bg-brand text-white shadow-xl hover:scale-[1.02] active:scale-[0.98]"
                : "bg-zinc-100 text-zinc-400 cursor-not-allowed"
            }`}
          >
            Post Comment
          </button>
        </div>
      </form>
    </div>
  );
}
