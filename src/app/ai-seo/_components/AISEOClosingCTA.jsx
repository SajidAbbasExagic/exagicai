import Link from "next/link";

export default function AISEOClosingCTA() {
  return (
    <>
      <section className="bg-zinc-50 py-24 border-t border-zinc-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-semibold text-zinc-900">
              Ready to Make Your Industrial Brand Visible in AI Search?
            </h2>
            <p className="mt-8 text-xl text-zinc-600 leading-relaxed">
              Exagic AI works with industrial manufacturers, SF Bay Area
              suppliers, and global hardware companies to build the entity
              authority, content structure, and data infrastructure that AI
              platforms need to cite your brand—consistently and accurately.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-md bg-brand px-10 py-5 text-xl font-bold text-white shadow-xl transition-all hover:bg-brand-dark active:scale-95"
              >
                Schedule a Free Consultation
              </Link>
              <Link
                href="/sro"
                className="w-full sm:w-auto inline-flex items-center justify-center text-lg font-bold text-zinc-900 hover:text-brand transition-colors"
              >
                Explore Our SRO Services →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
