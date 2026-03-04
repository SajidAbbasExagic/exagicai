"use client";

import Link from "next/link";

export default function ArticleNavigation({ previousArticle, nextArticle }) {
  return (
    <nav className="mt-20 pt-10 border-t border-zinc-100">
      <div className="flex flex-col md:flex-row justify-between gap-8">
        <div className="flex-1">
          {previousArticle ? (
            <Link
              href={previousArticle.href}
              className="group block p-6 rounded-2xl border border-zinc-200 bg-white hover:border-brand/30 hover:shadow-md transition-all h-full"
            >
              <div className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">
                ← Previous
              </div>
              <div className="text-lg font-bold text-zinc-900 group-hover:text-brand transition-colors leading-tight">
                {previousArticle.title}
              </div>
            </Link>
          ) : (
            <div className="invisible" aria-hidden="true" />
          )}
        </div>

        <div className="flex-1 text-right">
          {nextArticle ? (
            <Link
              href={nextArticle.href}
              className="group block p-6 rounded-2xl border border-zinc-200 bg-white hover:border-brand/30 hover:shadow-md transition-all h-full"
            >
              <div className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">
                Next →
              </div>
              <div className="text-lg font-bold text-zinc-900 group-hover:text-brand transition-colors leading-tight">
                {nextArticle.title}
              </div>
            </Link>
          ) : (
            <div className="invisible" aria-hidden="true" />
          )}
        </div>
      </div>
    </nav>
  );
}
