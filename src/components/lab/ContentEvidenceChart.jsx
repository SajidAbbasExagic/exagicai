import LabChartCard from "./LabChartCard";

export default function ContentEvidenceChart() {
  const types = [
    { name: "Equipment / material pages", geo: 92, ai: 88 },
    { name: "Certification renewals", geo: 90, ai: 85 },
    { name: "Constraint case studies", geo: 86, ai: 80 },
    { name: "Generic AI blog posts", geo: 18, ai: 12 },
    { name: "Thought leadership fluff", geo: 12, ai: 8 },
  ];

  return (
    <LabChartCard
      title="Content Type vs. GEO Retrieval Value"
      subtitle="Relative extractability score for AI procurement agents (illustrative audit index)."
    >
      <div className="relative w-full" style={{ paddingBottom: "52%" }}>
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 520 270"
          preserveAspectRatio="xMidYMid meet"
        >
          <rect x="80" y="10" width="420" height="230" fill="#fafafa" rx="4" />
          <line x1="80" y1="240" x2="500" y2="240" stroke="#d4d4d8" strokeWidth="1.5" />
          <line x1="80" y1="10" x2="80" y2="240" stroke="#d4d4d8" strokeWidth="1.5" />

          {types.map((t, i) => {
            const y = 30 + i * 42;
            const w = (t.geo / 100) * 380;
            const color = t.geo >= 80 ? "#0f766e" : t.geo >= 50 ? "#f59e0b" : "#e11d48";
            return (
              <g key={t.name}>
                <text x="74" y={y + 10} fill="#18181b" fontSize="9" fontWeight="bold" textAnchor="end">
                  {t.name.length > 22 ? t.name.slice(0, 20) + "…" : t.name}
                </text>
                <rect x="90" y={y} width={w} height="16" fill={color} rx="3" />
                <text x={90 + w + 6} y={y + 12} fill="#52525b" fontSize="9" fontWeight="bold">
                  {t.geo}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
      <p className="text-xs text-zinc-500 mt-2 text-center">
        Scores reflect how often audited pages supplied quotable facts in buyer prompt tests.
      </p>
    </LabChartCard>
  );
}
