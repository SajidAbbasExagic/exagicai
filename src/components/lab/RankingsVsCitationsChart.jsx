import LabChartCard from "./LabChartCard";

export default function RankingsVsCitationsChart() {
  const rows = [
    { label: "Shop A", rank: 1, cited: 0, rankW: 95, citedW: 0 },
    { label: "Shop B", rank: 7, cited: 72, rankW: 45, citedW: 72 },
    { label: "Shop C", rank: 3, cited: 88, rankW: 70, citedW: 88 },
  ];

  return (
    <LabChartCard
      title="Google Rank vs. AI Citation Rate (Illustrative)"
      subtitle="Three East Bay precision shops — same buyer prompt set, different scoreboards."
    >
      <div className="relative w-full" style={{ paddingBottom: "48%" }}>
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 520 250"
          preserveAspectRatio="xMidYMid meet"
        >
          <rect x="70" y="12" width="430" height="200" fill="#fafafa" rx="4" />
          <line x1="70" y1="212" x2="500" y2="212" stroke="#d4d4d8" strokeWidth="1.5" />
          <line x1="70" y1="12" x2="70" y2="212" stroke="#d4d4d8" strokeWidth="1.5" />
          <text x="285" y="238" fill="#71717a" fontSize="10" textAnchor="middle">
            Relative score (0–100)
          </text>

          {rows.map((row, i) => {
            const y = 36 + i * 58;
            return (
              <g key={row.label}>
                <text x="62" y={y + 10} fill="#18181b" fontSize="11" fontWeight="bold" textAnchor="end">
                  {row.label}
                </text>
                <text x="78" y={y + 2} fill="#71717a" fontSize="8">
                  Rank #{row.rank}
                </text>
                <rect x="140" y={y - 4} width={row.rankW * 3.2} height="12" fill="#d4d4d8" rx="2" />
                <text x={140 + row.rankW * 3.2 + 6} y={y + 6} fill="#71717a" fontSize="8">
                  SEO
                </text>
                <rect x="140" y={y + 14} width={Math.max(row.citedW * 3.2, 4)} height="12" fill="#f06030" rx="2" />
                <text x={140 + Math.max(row.citedW * 3.2, 4) + 6} y={y + 24} fill="#f06030" fontSize="8" fontWeight="bold">
                  {row.cited === 0 ? "Not cited" : `${row.cited}% cited`}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
      <div className="flex items-center justify-center gap-6 mt-4 text-xs font-medium text-zinc-600">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded bg-zinc-300" /> Google rank strength
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded bg-brand" /> AI citation rate
        </div>
      </div>
    </LabChartCard>
  );
}
