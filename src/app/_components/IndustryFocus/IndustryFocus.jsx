export default function IndustryFocus() {
  return (
    <section
      id="industries"
      aria-labelledby="industries-heading"
      className="rag-section border-y border-zinc-100 bg-zinc-50 py-20 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <h2
              id="industries-heading"
              className="text-3xl sm:text-4xl font-bold text-zinc-900 leading-tight tracking-tight"
            >
              Strategic Industrial Optimization
            </h2>
            <p className="mt-6 text-lg text-zinc-600 leading-relaxed">
              We deliver sharp, prioritized SEO strategies for manufacturers in
              the East Bay and Silicon Valley. By bridging the gap between
              legacy data and modern AI retrieval, we ensure brands maintain a
              permanent seat in the global knowledge graph. Read our report on{" "}
              <a
                href="/lab/east-bay-manufacturers-invisible-ai-search"
                className="text-brand hover:text-brand-dark transition-colors font-bold underline decoration-brand/30 underline-offset-4"
              >
                why East Bay suppliers are becoming invisible in AI search
              </a>
              .
            </p>
            <nav className="mt-12" aria-label="Industry pages">
              <a
                href="/industries"
                className="inline-flex items-center gap-2 text-base font-bold text-zinc-900 group"
              >
                <span className="border-b-2 border-brand/30 hover:border-brand transition-colors pb-1">
                  Explore Specialized Industries
                </span>
                <svg
                  className="h-5 w-5 text-brand transform group-hover:translate-x-1.5 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </nav>
          </div>

          <aside aria-label="Entity associations" className="relative">
            <div className="absolute inset-0 bg-brand/5 rounded-3xl blur-2xl transform translate-x-4 translate-y-4"></div>
            <div className="relative rounded-3xl border border-zinc-200 bg-white p-6 md:p-10 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-all">
              <div className="mb-8 text-xs font-bold uppercase tracking-[0.2em] text-brand border-b border-zinc-100 pb-4 inline-block">
                Entity Associations
              </div>
              <ul className="space-y-4" role="list">
                {[
                  "SF Industrial Corridor",
                  "East Bay Manufacturing Belt",
                  "Silicon Valley Supply Chain",
                  "Fremont Logistics Hub",
                ].map((entity) => (
                  <li
                    key={entity}
                    className="flex items-center gap-4 rounded-2xl border border-zinc-100 bg-zinc-50/50 px-5 py-4 text-sm"
                  >
                    <div
                      className="h-2.5 w-2.5 rounded-full bg-brand shadow-[0_0_12px_rgba(255,115,0,0.5)] flex-shrink-0"
                      aria-hidden="true"
                    ></div>
                    <span
                      className="font-bold text-zinc-800 tracking-tight"
                      itemProp="areaServed"
                    >
                      {entity}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-10 pt-8 border-t border-zinc-100">
                <div className="text-sm font-medium text-zinc-500 flex items-center gap-4">
                  <div className="flex -space-x-3" aria-hidden="true">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="h-8 w-8 rounded-full border-2 border-white bg-zinc-200 flex items-center justify-center text-[10px] text-zinc-500 font-bold shadow-sm"
                      />
                    ))}
                  </div>
                  <span>
                    Connected to{" "}
                    <span className="font-bold text-brand block sm:inline">
                      12+ high-authority nodes
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
