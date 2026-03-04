import Link from "next/link";

export default function AEOClosingCTA() {
  return (
    <>
      <section className="bg-zinc-50 py-24 border-t border-zinc-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-semibold text-zinc-900">
              Start Building AI Citation Visibility for Your Industrial Brand
            </h2>
            <p className="mt-8 text-xl text-zinc-600 leading-relaxed">
              Exagic AI works with SF Bay Area industrial manufacturers,
              hardware suppliers, logistics providers, and B2B technical
              services companies to build the content structure, entity
              authority, and schema infrastructure that AI procurement tools
              need to cite your brand consistently and accurately.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-md bg-brand px-10 py-5 text-xl font-bold text-white shadow-xl transition-all hover:bg-brand-dark active:scale-95"
              >
                Schedule a Free Consultation
              </Link>
              <div className="flex flex-col items-start gap-4">
                <Link
                  href="/sro"
                  className="text-lg font-bold text-zinc-900 hover:text-brand transition-colors"
                >
                  Learn About SRO Services →
                </Link>
                <Link
                  href="/ai-seo"
                  className="text-lg font-bold text-zinc-900 hover:text-brand transition-colors"
                >
                  See All AI SEO Capabilities →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
