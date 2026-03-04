"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SidebarCTA() {
  const router = useRouter();
  const [url, setUrl] = useState("");

  const handleContinue = () => {
    if (url) {
      router.push(`/audit?url=${encodeURIComponent(url)}`);
    } else {
      router.push("/audit");
    }
  };

  return (
    <div className="bg-[#f06030] rounded-2xl p-6 text-white shadow-lg">
      <h3 className="text-xl font-bold leading-tight mb-3">
        Do you want more AI Visibility?
      </h3>
      <p className="text-xs mb-5 opacity-90 leading-relaxed">
        Enter your website URL to see how AI models currently rank your brand.
      </p>

      <div className="space-y-3">
        <input
          type="text"
          placeholder="WWW.YOURDOMAIN.COM"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="w-full px-4 py-3 rounded bg-white text-zinc-900 text-xs font-bold focus:outline-none placeholder:text-zinc-400 border border-white/20 shadow-sm"
        />
        <button
          onClick={handleContinue}
          className="w-full bg-[#1b63da] py-3 rounded text-[10px] font-bold tracking-widest hover:bg-[#1652b5] transition-colors"
        >
          CONTINUE
        </button>
      </div>

      <p className="text-[9px] mt-4 opacity-70 text-center">
        Free visibility report for industrial suppliers.
      </p>
    </div>
  );
}
