export default function SocialProof() {
  const pressLogos = [
    "TechCrunch",
    "Forbes Industrial",
    "Manufacturing Today",
    "SupplyChain 247",
  ];

  return (
    <section
      id="social-proof"
      className="rag-section bg-zinc-950 py-20 md:py-24 text-white overflow-hidden relative"
    >
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] bg-brand/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-10 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand/30 to-brand/10 text-brand border border-white/5 shadow-[0_0_30px_rgba(255,115,0,0.15)]">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V5C14.017 3.89543 14.9124 3 16.017 3H19.017C21.2261 3 23.017 4.79086 23.017 7V15C23.017 18.866 19.883 22 16.017 22H14.017V21ZM1.017 21V18C1.017 16.8954 1.91243 16 3.017 16H6.017C6.56928 16 7.017 15.5523 7.017 15V9C7.017 8.44772 6.56928 8 6.017 8H3.017C1.91243 8 1.017 7.10457 1.017 6V5C1.017 3.89543 1.91243 3 3.017 3H6.017C8.22614 3 10.017 4.79086 10.017 7V15C10.017 18.866 6.88295 22 3.017 22H1.017V21Z" />
            </svg>
          </div>
          <blockquote className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-[1.25] tracking-tight relative z-20">
            <span className="text-white/40 absolute -left-6 -top-4 text-6xl select-none font-serif leading-none">
              “
            </span>
            Exagic AI transformed our technical spec sheets into a
            machine-readable knowledge graph. We are now the #1 cited supplier
            in AI-generated procurement queries for precision machining.
            <span className="text-white/40 absolute -right-6 bottom-0 text-6xl select-none font-serif leading-none rotate-180 translate-y-6">
              “
            </span>
          </blockquote>
          <div className="mt-10 flex flex-col items-center">
            <div className="text-lg font-bold text-white tracking-wide">
              Arthur Miller
            </div>
            <div className="text-brand font-bold uppercase tracking-widest text-xs mt-2">
              VP of Engineering • Pacific Precision Components
            </div>
          </div>
        </div>

        <div className="mt-24 pt-12 border-t border-white/5 text-center">
          <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-white/30 mb-10">
            Recognized By
          </h3>
          <div className="flex flex-wrap justify-center gap-8 md:gap-14 items-center">
            {pressLogos.map((logo, index) => (
              <div
                key={index}
                className="text-sm font-bold uppercase text-white/40 hover:text-white transition-colors duration-300"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
