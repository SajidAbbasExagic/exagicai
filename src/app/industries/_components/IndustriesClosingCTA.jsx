import Link from "next/link";

export default function IndustriesClosingCTA() {
  return (
    <>
      <section className="bg-white py-24 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 text-center text-zinc-900">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-semibold text-zinc-900">
              Start Building AI Visibility in Your Industrial Sector
            </h2>
            <p className="mt-8 text-xl text-zinc-600 leading-relaxed text-zinc-900">
              Whether you manufacture precision components in Fremont, operate a
              logistics network across the East Bay, supply electronics to
              Silicon Valley hardware companies, or provide technical services
              to industrial clients throughout Northern California — Exagic AI
              has the sector-specific expertise to make your brand visible where
              your buyers are looking: inside AI-generated answers.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-zinc-900">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-md bg-brand px-10 py-5 text-xl font-bold text-white shadow-xl transition-all hover:bg-brand-dark active:scale-95 text-zinc-900"
              >
                Schedule a Free Consultation
              </Link>
              <Link
                href="/ai-seo"
                className="text-lg font-bold text-zinc-900 hover:text-brand transition-colors text-zinc-900"
              >
                Explore Our AI SEO Capabilities →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
