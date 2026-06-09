"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { getAuthor } from "@/app/lab/_data/authors";

export default function UnifiedBlogCTA({ authorId = "saif" }) {
  const router = useRouter();
  const [url, setUrl] = useState("");
  const author = getAuthor(authorId);

  const handleContinue = () => {
    if (url) {
      router.push(`/audit?url=${encodeURIComponent(url)}`);
    } else {
      router.push("/audit");
    }
  };

  return (
    <div className="my-20 overflow-hidden rounded-2xl border border-zinc-100 bg-white shadow-xl">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-[55%] flex items-center border-b border-zinc-100 p-10 md:p-12 lg:border-b-0 lg:border-r">
          <div className="flex flex-col items-center gap-8 text-center md:flex-row md:items-center md:gap-10 md:text-left">
            <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-full border-4 border-white shadow-lg ring-1 ring-zinc-100">
              <Image
                src={author.image}
                alt={author.name}
                fill
                className="object-cover scale-110"
              />
            </div>
            <div className="flex-1">
              <span className="mb-3 block text-[10px] font-bold uppercase tracking-[0.25em] text-[#f06030]">
                {author.ctaTitle}
              </span>
              <h3 className="mb-2 text-3xl font-bold tracking-tight text-zinc-900">
                {author.name}
              </h3>
              <p className="mb-4 text-xs font-semibold tracking-wide text-zinc-500">
                {author.ctaSubtitle}
              </p>
              <p className="max-w-sm text-[14px] leading-relaxed text-zinc-600">
                {author.ctaBio}
              </p>
            </div>
          </div>
        </div>

        <div className="relative flex flex-col justify-center bg-[#f06030] p-10 md:p-12 lg:w-[45%] text-white">
          <div className="pointer-events-none absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
          <div className="relative z-10">
            <h4 className="mb-4 text-center text-2xl font-bold leading-[1.2]">
              Boost Your <br /> AI Visibility
            </h4>
            <p className="mx-auto mb-8 max-w-[280px] text-center text-[13px] leading-relaxed opacity-90">
              Get a free audit of how ChatGPT and Perplexity perceive your
              brand.
            </p>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="WWW.YOURDOMAIN.COM"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="w-full rounded-xl border border-white/20 bg-white px-5 py-4 text-xs font-bold text-zinc-900 shadow-sm placeholder:text-zinc-400 focus:outline-none"
              />
              <button
                onClick={handleContinue}
                className="w-full rounded-xl bg-[#1b63da] py-4 text-xs font-black tracking-[0.15em] shadow-[0_8px_20px_rgba(27,99,218,0.3)] transition-all hover:bg-blue-700 active:scale-[0.97]"
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
