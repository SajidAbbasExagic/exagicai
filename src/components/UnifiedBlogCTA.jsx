"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function UnifiedBlogCTA() {
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
    <div className="bg-white border border-zinc-100 rounded-[2.5rem] overflow-hidden shadow-2xl my-20">
      <div className="flex flex-col lg:flex-row">
        {/* Left Section: Author Bio */}
        <div className="lg:w-[55%] p-10 md:p-14 border-b lg:border-b-0 lg:border-r border-zinc-100 flex items-center">
          <div className="flex flex-col md:flex-row gap-10 items-center text-center md:text-left">
            <div className="relative h-32 w-32 shrink-0 rounded-full overflow-hidden shadow-xl border-4 border-white ring-1 ring-zinc-100">
              <Image
                src="/ai_expert_author.png"
                alt="Alex Sterling"
                fill
                className="object-cover scale-110"
              />
            </div>
            <div className="flex-1">
              <span className="text-[10px] font-bold text-[#f06030] uppercase tracking-[0.25em] block mb-3">
                Knowledge Lead
              </span>
              <h3 className="text-3xl font-bold text-zinc-900 mb-2 tracking-tight">
                Alex Sterling
              </h3>
              <p className="text-zinc-500 font-semibold mb-4 text-xs tracking-wide">
                Lead AI Strategist & Founder
              </p>
              <p className="text-zinc-600 text-[14px] leading-relaxed max-w-sm">
                Alex specializes in bridging the gap between industrial
                technical documentation and modern AI retrieval systems.
              </p>
            </div>
          </div>
        </div>

        {/* Right Section: Conversion CTA */}
        <div className="lg:w-[45%] bg-[#f06030] p-10 md:p-14 flex flex-col justify-center text-white relative">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10 pointer-events-none"></div>
          <div className="relative z-10">
            <h4 className="text-2xl font-bold leading-[1.2] mb-4 text-center">
              Boost Your <br /> AI Visibility
            </h4>
            <p className="text-[13px] mb-8 opacity-90 leading-relaxed text-center max-w-[280px] mx-auto">
              Get a free audit of how ChatGPT and Perplexity perceive your
              brand.
            </p>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="WWW.YOURDOMAIN.COM"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="w-full px-5 py-4 rounded-xl bg-white text-zinc-900 text-xs font-bold focus:outline-none placeholder:text-zinc-400 shadow-sm border border-white/20"
              />
              <button
                onClick={handleContinue}
                className="w-full bg-[#1b63da] py-4 rounded-xl text-xs font-black tracking-[0.15em] hover:bg-blue-700 transition-all shadow-[0_8px_20px_rgba(27,99,218,0.3)] active:scale-[0.97]"
              >
                CONTINUE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
