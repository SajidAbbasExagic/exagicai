import Link from "next/link";

export default function ContactCTA() {
  return (
    <section
      id="contact"
      aria-labelledby="cta-heading"
      className="rag-section bg-white py-20 md:py-24"
      itemScope
      itemType="https://schema.org/ContactPoint"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="relative overflow-hidden rounded-[2rem] bg-zinc-950 px-6 py-16 md:py-24 text-center shadow-2xl">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20" />
          <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[600px] h-[600px] bg-brand/30 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[500px] h-[500px] bg-brand/20 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto">
            <h2
              id="cta-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tighter leading-[1.1]"
            >
              Ready to Scale Your AI Visibility?
            </h2>
            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed font-medium">
              Discuss your AI visibility strategy with our senior team and
              secure your brand's position in industrial AI search.
            </p>
            <div className="mt-10 flex flex-col items-center gap-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-bold text-brand shadow-sm transition-colors hover:bg-zinc-50"
              >
                <span>Request Video Call</span>
                <svg
                  className="ml-3 h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </Link>
              <Link
                href="/ai-seo"
                className="text-white/60 hover:text-white font-bold transition-colors uppercase tracking-[0.2em] text-sm border-b border-transparent hover:border-white/30 pb-1"
              >
                Browse Technical Entity Audits
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
