import LabChartCard from "./LabChartCard";

/**
 * Illustrative share of AI-related crawler requests hitting a typical B2B
 * industrial site. Used to argue that an llms.txt / crawler policy is worth
 * having because AI bots are now a meaningful slice of non-human traffic.
 */
export default function AiCrawlerTrafficChart({
  bots = [
    { name: "GPTBot (OpenAI)", pct: 31 },
    { name: "Google-Extended", pct: 24 },
    { name: "ClaudeBot (Anthropic)", pct: 16 },
    { name: "PerplexityBot", pct: 14 },
    { name: "Bytespider / others", pct: 15 },
  ],
}) {
  return (
    <LabChartCard
      title="Who Is Actually Crawling Your Site for AI"
      subtitle="Illustrative share of identified AI crawler requests to a mid-size industrial B2B domain."
    >
      <div className="space-y-4">
        {bots.map((b) => (
          <div key={b.name} className="flex items-center gap-4">
            <div className="flex-[1.1] min-w-0 text-sm font-medium text-zinc-700 text-right">{b.name}</div>
            <div className="flex-[2] h-6 bg-zinc-100 rounded-md overflow-hidden">
              <div
                className="h-full bg-brand rounded-md flex items-center justify-end pr-2"
                style={{ width: `${(b.pct / 31) * 100}%` }}
              >
                <span className="text-[10px] font-bold text-white">{b.pct}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-6 text-xs text-zinc-500 leading-relaxed">
        AI crawlers are no longer a rounding error. An explicit crawler policy tells them what to read, what to skip, and where the canonical facts live.
      </p>
    </LabChartCard>
  );
}
