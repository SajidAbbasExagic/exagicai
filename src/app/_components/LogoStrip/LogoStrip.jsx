export default function LogoStrip() {
  const logos = [
    "Precision Tooling",
    "SF Aerospace",
    "Fremont Logistics",
    "Bay Area Hardware",
    "Valley Electronics",
    "Marine Dynamics",
    "TechWeld Solutions",
    "Global Procurement",
  ];

  return (
    <section
      id="logos"
      className="rag-section bg-zinc-50 py-12 md:py-16 border-y border-zinc-100 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12 text-center">
        <h2 className="text-xs font-bold uppercase tracking-[0.25em] text-zinc-400 mb-10">
          Trusted by Industrial Leaders Across the SF Bay Area
        </h2>

        <div className="relative group">
          {/* subtle gradient masks for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-zinc-50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-zinc-50 to-transparent z-10 pointer-events-none"></div>

          <div className="flex animate-scroll hover:pause-scroll gap-6 md:gap-10 items-center">
            {/* Double the logos for seamless scroll */}
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 h-14 w-48 bg-white border border-zinc-100 rounded-lg shadow-sm flex items-center justify-center text-[10px] text-zinc-500 font-bold uppercase tracking-widest text-center px-6 transition-colors hover:border-brand/20 hover:text-brand"
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
