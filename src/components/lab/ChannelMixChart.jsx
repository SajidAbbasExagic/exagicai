import LabChartCard from "./LabChartCard";

export default function ChannelMixChart() {
  const channels = [
    { name: "Google organic", y2023: 78, y2026: 52 },
    { name: "Answer engines", y2023: 2, y2026: 18 },
    { name: "AI referrals", y2023: 1, y2026: 12 },
    { name: "Directories", y2023: 12, y2026: 10 },
    { name: "Direct / other", y2023: 7, y2026: 8 },
  ];

  return (
    <LabChartCard
      title="Where Industrial Buyers Discover Suppliers"
      subtitle="Illustrative discovery mix shift for Bay Area B2B manufacturers, 2023 vs. 2026."
    >
      <div className="relative w-full" style={{ paddingBottom: "55%" }}>
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 520 290"
          preserveAspectRatio="xMidYMid meet"
        >
          <rect x="80" y="10" width="420" height="250" fill="#fafafa" rx="4" />
          <line x1="80" y1="260" x2="500" y2="260" stroke="#d4d4d8" strokeWidth="1.5" />
          <line x1="80" y1="10" x2="80" y2="260" stroke="#d4d4d8" strokeWidth="1.5" />

          {channels.map((ch, i) => {
            const y = 28 + i * 46;
            const w2023 = (ch.y2023 / 80) * 360;
            const w2026 = (ch.y2026 / 80) * 360;
            return (
              <g key={ch.name}>
                <text x="72" y={y + 8} fill="#18181b" fontSize="10" fontWeight="bold" textAnchor="end">
                  {ch.name}
                </text>
                <rect x="90" y={y - 2} width={w2023} height="11" fill="#d4d4d8" rx="2" />
                <text x={90 + w2023 + 5} y={y + 7} fill="#71717a" fontSize="8">
                  {ch.y2023}%
                </text>
                <rect x="90" y={y + 14} width={w2026} height="11" fill="#0f766e" rx="2" />
                <text x={90 + w2026 + 5} y={y + 23} fill="#0f766e" fontSize="8" fontWeight="bold">
                  {ch.y2026}%
                </text>
              </g>
            );
          })}
        </svg>
      </div>
      <div className="flex items-center justify-center gap-6 mt-4 text-xs font-medium text-zinc-600">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded bg-zinc-300" /> 2023
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded bg-[#0f766e]" /> 2026
        </div>
      </div>
    </LabChartCard>
  );
}
