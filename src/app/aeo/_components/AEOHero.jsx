import Link from "next/link";

export default function AEOHero() {
  return (
    <>
      <section className="bg-white pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="max-w-3xl">
            <h1 className="text-xl sm:text-4xl md:text-5xl font-semibold text-zinc-900 tracking-tight leading-tight">
              Answer Engine Optimization (AEO)
            </h1>
            <p className="mt-6 text-lg text-zinc-700 leading-relaxed font-medium">
              AEO is the practice of optimizing your brand's visibility for AI
              chat assistants, AI agents, and answer engines — ensuring your
              industrial products and services are the default recommendation
              when buyers search.
            </p>
            <p className="mt-4 text-sm sm:text-base text-zinc-500 leading-relaxed">
              When a procurement manager queries ChatGPT, Perplexity, or Google
              Gemini for supplier recommendations, component specifications, or
              service comparisons, AEO determines whether your brand appears in
              the answer — or your competitor's does.
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-brand px-6 py-3 text-base font-bold text-white shadow-xl transition-all hover:bg-brand-dark active:scale-95"
              >
                Schedule a Call
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
