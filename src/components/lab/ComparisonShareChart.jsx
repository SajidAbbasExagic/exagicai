/**
 * Share-of-voice bars: when a buyer asks an AI engine to compare suppliers,
 * this is the share of answers in which each supplier is named / recommended.
 */
export default function ComparisonShareChart({
  suppliers = [
    { name: "Supplier A (structured capability pages)", share: 71, highlight: true },
    { name: "Supplier B (PDF spec sheets only)", share: 38 },
    { name: "Supplier C (marketing site, no specs)", share: 12 },
    { name: "Supplier D (no schema, thin content)", share: 6 },
  ],
  footnote = "Share of AI comparison answers that named each supplier across 40 'X vs Y' procurement prompts. The supplier with machine-readable capability data appears in nearly 3x as many answers.",
}) {
  return (
    <div className="my-12 p-8 md:p-10 rounded-2xl bg-white border border-zinc-200 shadow-sm not-prose">
      <div className="text-brand font-bold tracking-widest text-[11px] uppercase mb-1">
        Exagic AI Research · Comparison Queries
      </div>
      <h3 className="text-xl md:text-2xl font-bold text-zinc-900 tracking-tight mb-8">
        Who Gets Named When Buyers Ask AI to Compare?
      </h3>
      <div className="space-y-5">
        {suppliers.map((s) => (
          <div key={s.name}>
            <div className="flex items-center justify-between mb-1.5">
              <span className={`text-sm ${s.highlight ? "font-bold text-zinc-900" : "font-medium text-zinc-600"}`}>
                {s.name}
              </span>
              <span className={`text-sm font-bold ${s.highlight ? "text-brand" : "text-zinc-500"}`}>
                {s.share}%
              </span>
            </div>
            <div className="h-3 bg-zinc-100 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full ${s.highlight ? "bg-brand" : "bg-zinc-300"}`}
                style={{ width: `${s.share}%` }}
              />
            </div>
          </div>
        ))}
      </div>
      {footnote && (
        <p className="mt-8 text-xs text-zinc-500 leading-relaxed border-t border-zinc-100 pt-4">
          {footnote}
        </p>
      )}
    </div>
  );
}
