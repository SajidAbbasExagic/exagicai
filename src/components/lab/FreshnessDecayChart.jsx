import LabChartCard from "./LabChartCard";

/**
 * Illustrative decay curve: probability that an AI answer engine cites a page
 * as a function of how long ago the page was last meaningfully updated.
 */
export default function FreshnessDecayChart({
  points = [
    { age: "0 mo", p: 82 },
    { age: "3 mo", p: 74 },
    { age: "6 mo", p: 61 },
    { age: "9 mo", p: 44 },
    { age: "12 mo", p: 29 },
    { age: "18 mo", p: 17 },
    { age: "24 mo", p: 9 },
  ],
}) {
  const w = 520;
  const h = 260;
  const padL = 44;
  const padR = 20;
  const padT = 20;
  const padB = 40;
  const plotW = w - padL - padR;
  const plotH = h - padT - padB;

  const x = (i) => padL + (i / (points.length - 1)) * plotW;
  const y = (p) => padT + (1 - p / 100) * plotH;

  const linePath = points.map((pt, i) => `${i === 0 ? "M" : "L"} ${x(i)} ${y(pt.p)}`).join(" ");
  const areaPath = `${linePath} L ${x(points.length - 1)} ${padT + plotH} L ${x(0)} ${padT + plotH} Z`;

  return (
    <LabChartCard
      title="Citation Probability Decays With Content Age"
      subtitle="Illustrative likelihood that an AI answer engine surfaces a page, by months since last substantive update."
    >
      <div className="relative w-full" style={{ paddingBottom: "50%" }}>
        <svg className="absolute inset-0 w-full h-full" viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="xMidYMid meet">
          {[0, 25, 50, 75, 100].map((g) => (
            <g key={g}>
              <line x1={padL} y1={y(g)} x2={w - padR} y2={y(g)} stroke="#f1f1f4" strokeWidth="1" />
              <text x={padL - 8} y={y(g) + 4} textAnchor="end" fontSize="9" fill="#a1a1aa">{g}%</text>
            </g>
          ))}

          <path d={areaPath} fill="#0f766e" fillOpacity="0.08" />
          <path d={linePath} fill="none" stroke="#0f766e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

          {points.map((pt, i) => (
            <g key={pt.age}>
              <circle cx={x(i)} cy={y(pt.p)} r="3.5" fill="#0f766e" />
              <text x={x(i)} y={h - padB + 20} textAnchor="middle" fontSize="9" fill="#71717a">{pt.age}</text>
            </g>
          ))}
        </svg>
      </div>
      <p className="mt-4 text-xs text-zinc-500 leading-relaxed">
        Pages left untouched for 12+ months lose roughly two-thirds of their citation likelihood. Recency is a ranking signal, not a vanity metric.
      </p>
    </LabChartCard>
  );
}
