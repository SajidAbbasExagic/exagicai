"use client";

import Image from "next/image";

export default function AuthorBio() {
  return (
    <div className="bg-white border border-zinc-100 rounded-2xl p-8 flex flex-col md:flex-row gap-8 items-start h-full">
      <div className="relative h-48 w-48 shrink-0 rounded-xl overflow-hidden shadow-lg border-4 border-white">
        <Image
          src="/ai_expert_author.png" // I'll need to make sure this is available or use a placeholder/generated one
          alt="AI Expert"
          fill
          className="object-cover"
        />
      </div>
      <div>
        <span className="text-sm font-bold text-zinc-400 uppercase tracking-widest block mb-1">
          About the author:
        </span>
        <h3 className="text-2xl font-bold text-[#f06030] mb-2">
          Alex Sterling
        </h3>
        <p className="text-zinc-500 font-bold mb-4 text-sm">
          Lead AI Strategist & Founder of Exagic AI
        </p>
        <p className="text-zinc-600 text-sm leading-relaxed mb-6">
          Alex is a pioneer in mechanistic interpretability for industrial SEO.
          His research has been cited by top manufacturers across the SF
          Industrial Corridor. He specializes in bridging the gap between legacy
          technical documentation and modern AI retrieval-augmented generation
          (RAG) systems.
        </p>
        <div className="flex gap-4 text-zinc-400">
          {/* Social icons placeholder */}
          <span className="text-xs font-bold uppercase tracking-widest hover:text-brand cursor-pointer transition-colors">
            Twitter
          </span>
          <span className="text-xs font-bold uppercase tracking-widest hover:text-brand cursor-pointer transition-colors">
            LinkedIn
          </span>
        </div>
      </div>
    </div>
  );
}
