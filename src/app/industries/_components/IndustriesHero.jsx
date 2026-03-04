import Link from "next/link";

export default function IndustriesHero() {
  return (
    <>
      <section className="bg-white pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 text-zinc-900">
          <div className="max-w-3xl">
            <h1 className="text-xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
              Strategic AI SEO for the SF Bay Area Industrial Corridor
            </h1>
            <p className="mt-6 text-lg text-zinc-700 leading-relaxed font-medium">
              Exagic AI delivers targeted AI visibility strategies for
              industrial manufacturers, logistics providers, hardware suppliers,
              electronics companies, B2B technical services, and engineering
              firms.
            </p>
            <p className="mt-4 text-sm sm:text-base text-zinc-500 leading-relaxed">
              Every industrial sector has its own procurement language, buyer
              behavior, and AI search patterns. Our industry-specific approach
              ensures your brand is optimized for the exact queries your buyers
              are asking AI platforms.
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-brand px-6 py-3 text-base font-bold text-white shadow-xl transition-all hover:bg-brand-dark active:scale-95"
              >
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
