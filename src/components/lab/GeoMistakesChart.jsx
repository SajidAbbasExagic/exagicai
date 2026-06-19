const DEFAULT_MISTAKES = [
  ["Weak Brand / Entity Positioning", "40%"],
  ["Publishing Mass AI-Generated Content", "38%"],
  ["Not Diversifying Traffic Sources", "37%"],
  ["Ignoring Authority Building", "28%"],
  ["Not Updating Old Content", "22%"],
  ["Chasing Rankings Only", "19%"],
  ["Using Outdated KPIs", "4%"],
];

export default function GeoMistakesChart({
  mistakes = DEFAULT_MISTAKES,
  highlightIndex = null,
  footnote = "The top three mistakes chase volume over trust. Build authority before scaling.",
}) {
  return (
    <div className="my-12 p-10 rounded-2xl bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 text-white shadow-xl relative overflow-hidden not-prose">
      <div className="absolute bottom-0 right-0 p-8 opacity-10 font-serif text-[10rem] leading-none select-none pointer-events-none font-bold italic">
        GEO
      </div>
      <div className="relative z-10">
        <div className="text-brand font-bold mb-4 tracking-widest text-sm uppercase">
          Exagic AI Research · 500 Marketers
        </div>
        <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
          The 7 Most Common AI Search Mistakes
        </h3>
        <div className="space-y-3 max-w-xl">
          {mistakes.map(([label, pct], index) => (
            <div key={label} className="flex items-center gap-4">
              <div
                className={`w-12 text-right text-sm font-bold shrink-0 ${
                  highlightIndex === index ? "text-white" : "text-brand"
                }`}
              >
                {pct}
              </div>
              <div className="flex-1 h-2.5 bg-zinc-800 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full ${
                    highlightIndex === index ? "bg-white" : "bg-brand"
                  }`}
                  style={{ width: pct }}
                />
              </div>
              <div
                className={`text-sm min-w-0 ${
                  highlightIndex === index ? "text-white font-semibold" : "text-zinc-300"
                }`}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
        {footnote && (
          <p className="mt-8 text-zinc-400 text-sm leading-relaxed max-w-2xl">
            {footnote}
          </p>
        )}
      </div>
    </div>
  );
}
