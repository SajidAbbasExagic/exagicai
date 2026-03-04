"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("success");
  };

  return (
    <div className="bg-white p-6 md:p-8 rounded-2xl border border-zinc-200 shadow-lg shadow-zinc-100/50">
      <h2 className="text-xl font-bold text-zinc-900 mb-6">
        Discuss Your AI Visibility
      </h2>
      {status === "success" ? (
        <div className="bg-emerald-50 text-emerald-700 p-4 rounded-xl border border-emerald-100 font-medium text-sm">
          Thank you! Our strategy team will reach out to you within 24 hours.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                Full Name
              </label>
              <input
                required
                type="text"
                className="w-full bg-zinc-50 border border-zinc-100 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-all"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                Company Email
              </label>
              <input
                required
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
            <select className="w-full bg-zinc-50 border border-zinc-100 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-all appearance-none cursor-pointer">
              <option>AI SEO Visibility Analysis</option>
              <option>AEO/SRO Implementation</option>
              <option>Technical Data Structuring</option>
              <option>Other / General Inquiry</option>
            </select>
          </div>
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
              How can we help?
            </label>
            <textarea
              required
              rows={4}
              className="w-full bg-zinc-50 border border-zinc-100 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-all resize-none"
              placeholder="Tell us about your project..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-zinc-900 text-white font-bold py-3 px-6 rounded-lg hover:bg-brand transition-all shadow-md active:scale-[0.98] text-sm"
          >
            Submit Strategy Inquiry
          </button>
        </form>
      )}
    </div>
  );
}
