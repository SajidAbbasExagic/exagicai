import Link from "next/link";

export default function AISEOHero() {
  return (
    <>
      <section className="bg-white pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="max-w-3xl">
            <h1 className="text-xl sm:text-4xl md:text-5xl font-semibold text-zinc-900 tracking-tight leading-tight">
              AI SEO by Exagic AI
            </h1>
            <p className="mt-6 text-lg text-zinc-700 leading-relaxed font-medium">
              Exagic AI is the most advanced AI SEO agency in the SF Bay Area,
              specializing in brand visibility optimization for industrial
              manufacturers, global suppliers, and hardware companies.
            </p>
            <p className="mt-4 text-sm sm:text-base text-zinc-500 leading-relaxed"> 
              Our AI SEO process is driven by advanced machine learning
              techniques, mechanistic interpretability, and practical model
              steering methods, built for the industrial corridor.
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
