import Link from "next/link";

export default function SROHero() {
  return (
    <>
      <section className="bg-white pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="max-w-3xl">
            <h1 className="text-xl sm:text-4xl md:text-5xl font-semibold text-zinc-900 tracking-tight leading-tight">
              Selection Rate Optimization (SRO)
            </h1>
            <p className="mt-6 text-lg text-zinc-700 leading-relaxed font-medium">
              Selection Rate Optimization is an AI SEO discipline that leads to
              preferential treatment of your brand, products, and services in
              AI-generated search results.
            </p>
            <p className="mt-4 text-sm sm:text-base text-zinc-500 leading-relaxed">
              In AI search systems like Google's AI Mode, Gemini, and ChatGPT, a
              large language model acts as an interpretive layer between your
              content and industrial buyers. SRO is the practice of
              systematically improving that selection decision in your brand's
              favor.
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
