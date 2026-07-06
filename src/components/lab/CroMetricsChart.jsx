const DEFAULT_METRICS = [
  { name: "Conversion Rate", b2b: 96, b2c: 98 },
  { name: "Leads / Sales", b2b: 54, b2c: 43 },
  { name: "Revenue", b2b: 21, b2c: 17 },
  { name: "Rev. per Lead / Customer", b2b: 18, b2c: 14 },
  { name: "CAC", b2b: 3, b2c: 5 },
  { name: "Lifetime Value", b2b: 5, b2c: 2 },
  { name: "Churn / Repeat Purchase", b2b: 1, b2c: 3 },
  { name: "ROI", b2b: 3, b2c: 2 },
];

/**
 * Exagic-branded grouped bar chart showing which metrics teams actually track
 * when they measure conversion / AI-search success. Front-end metrics dominate;
 * value metrics (LTV, ROI, repeat) are almost never measured.
 */
export default function CroMetricsChart({
  metrics = DEFAULT_METRICS,
  footnote = "Front-end metrics (Conversion Rate, Leads) are near-universal. Value metrics that actually predict profit — LTV, Repeat Purchase, ROI — are measured by fewer than 1 in 20 teams.",
}) {
  const max = 100;

  return (
    <div className="my-12 rounded-2xl bg-white border border-zinc-200 shadow-sm not-prose overflow-hidden">
      <div className="flex items-center justify-between px-6 md:px-8 pt-6 pb-4 border-b border-zinc-100">
        <div>
          <div className="text-brand font-bold tracking-widest text-[11px] uppercase mb-1">
            Exagic AI Research · Conversion Insights
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-zinc-900 tracking-tight">
            How Is Success Measured Today?
          </h3>
        </div>
        <div className="hidden sm:flex items-center gap-4 text-xs font-semibold text-zinc-600">
          <span className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-sm bg-[#f26522]" /> B2B
          </span>
          <span className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-sm bg-[#2f7ed8]" /> B2C
          </span>
        </div>
      </div>

      <div className="px-6 md:px-8 py-6 space-y-4">
        {metrics.map((m) => (
          <div key={m.name} className="grid grid-cols-[130px_1fr] md:grid-cols-[190px_1fr] gap-4 items-center">
            <div className="text-xs md:text-sm font-semibold text-zinc-800 text-right leading-tight">
              {m.name}
            </div>
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <div className="flex-1 h-3 bg-[#fbe6da] rounded-sm overflow-hidden">
                  <div className="h-full bg-[#f26522] rounded-sm" style={{ width: `${(m.b2b / max) * 100}%` }} />
                </div>
                <span className="w-9 text-right text-xs font-bold text-[#f26522]">{m.b2b}%</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex-1 h-3 bg-[#dbe8f7] rounded-sm overflow-hidden">
                  <div className="h-full bg-[#2f7ed8] rounded-sm" style={{ width: `${(m.b2c / max) * 100}%` }} />
                </div>
                <span className="w-9 text-right text-xs font-bold text-[#2f7ed8]">{m.b2c}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {footnote && (
        <div className="bg-zinc-50 border-t border-zinc-100 px-6 md:px-8 py-4 flex gap-3 items-start">
          <span className="text-[10px] font-bold uppercase tracking-wider text-brand bg-brand/10 rounded px-2 py-1 shrink-0">
            What to do next
          </span>
          <p className="text-sm text-zinc-600 leading-relaxed">{footnote}</p>
        </div>
      )}
    </div>
  );
}
