"use client";

import Image from "next/image";

export default function SidebarAuthor() {
  return (
    <div className="bg-white border border-zinc-100 rounded-2xl p-6 shadow-sm">
      <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em] block mb-4">
        Author
      </span>
      <div className="flex items-center gap-4 mb-4">
        <div className="relative h-12 w-12 rounded-full overflow-hidden border-2 border-[#f06030]">
          <Image
            src="/ai_expert_author.png"
            alt="Alex Sterling"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h4 className="text-sm font-bold text-zinc-900 leading-tight">
            Alex Sterling
          </h4>
          <p className="text-[10px] text-zinc-500 font-medium">
            Lead AI Strategist
          </p>
        </div>
      </div>
      <p className="text-xs text-zinc-600 leading-relaxed line-clamp-3">
        Expert in mechanistic interpretability and AI visibility for industrial
        global brands.
      </p>
    </div>
  );
}
