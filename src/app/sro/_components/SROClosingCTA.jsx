import Link from "next/link";

export default function SROClosingCTA() {
  return (
    <>
      <section className="bg-zinc-50 py-24 border-t border-zinc-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-semibold text-zinc-900">
              Ready to Increase Your Brand's Selection Rate in AI Search?
            </h2>
            <p className="mt-8 text-xl text-zinc-600 leading-relaxed">
              Exagic AI works with SF Bay Area industrial manufacturers, global
              suppliers, and hardware companies to systematically improve
              selection rate across ChatGPT, Gemini, and Perplexity. If your
              brand is being retrieved but not selected — or not appearing in AI
              procurement searches at all — SRO is where the work begins.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-md bg-brand px-10 py-5 text-xl font-bold text-white shadow-xl transition-all hover:bg-brand-dark active:scale-95"
              >
                Schedule a Free Consultation
              </Link>
              <Link
                href="/aeo"
                className="w-full sm:w-auto inline-flex items-center justify-center text-lg font-bold text-zinc-900 hover:text-brand transition-colors"
              >
                Learn About AEO Services →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
