"use client";

import Image from "next/image";
import { ArrowUpRight, Linkedin } from "lucide-react";
import { getAuthor } from "@/app/lab/_data/authors";

export default function SidebarAuthor({ authorId = "saif" }) {
  const author = getAuthor(authorId);

  return (
    <div className="bg-white border border-zinc-100 rounded-2xl p-6 shadow-sm">
      <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em] block mb-4">
        Author
      </span>
      <div className="flex items-center gap-4">
        <div className="relative h-12 w-12 rounded-full overflow-hidden border-2 border-[#f06030] shrink-0">
          <Image
            src={author.image}
            alt={author.name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h4 className="text-sm font-bold text-zinc-900 leading-tight">
            {author.name}
          </h4>
          <p className="text-[10px] text-zinc-500 font-medium">
            {author.title}
          </p>
        </div>
      </div>

      <a
        href={author.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-600 transition-colors hover:text-zinc-900"
      >
        <Linkedin className="h-3.5 w-3.5 shrink-0" strokeWidth={1.75} />
        <span>LinkedIn</span>
        <ArrowUpRight className="h-3 w-3 opacity-50" strokeWidth={2} />
      </a>

      <p className="mt-4 text-xs text-zinc-600 leading-relaxed line-clamp-3">
        {author.bio}
      </p>
    </div>
  );
}
