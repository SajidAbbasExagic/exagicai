import LabChartCard from "./LabChartCard";

/**
 * Illustrative breakdown of the AI-search query landscape for contract
 * electronics manufacturers (EMS / PCB assembly). Shows which query intents
 * drive the most AI-assisted sourcing conversations.
 */
export default function EmsQueryChart({
  queries = [
    { label: "PCB assembly capability & volume", pct: 34 },
    { label: "Certifications (IPC-A-610, ISO 13485, AS9100)", pct: 27 },
    { label: "Prototype-to-production lead times", pct: 18 },
    { label: "Component sourcing & BOM management", pct: 12 },
    { label: "Box build / system integration", pct: 9 },
  ],
}) {
  return (
    <LabChartCard
      title="What Buyers Ask AI When Sourcing an EMS Partner"
      subtitle="Illustrative share of AI-assisted sourcing prompts by intent for contract electronics manufacturing."
    >
      <div className="space-y-4">
        {queries.map((q) => (
          <div key={q.label} className="flex items-center gap-4">
            <div className="w-9 text-right text-sm font-bold text-brand shrink-0">{q.pct}%</div>
            <div className="flex-1 h-2.5 bg-zinc-100 rounded-full overflow-hidden">
              <div className="h-full bg-brand rounded-full" style={{ width: `${(q.pct / 34) * 100}%` }} />
            </div>
            <div className="flex-[1.4] min-w-0 text-sm text-zinc-600">{q.label}</div>
          </div>
        ))}
      </div>
      <p className="mt-6 text-xs text-zinc-500 leading-relaxed">
        Capability and certification queries dominate. EMS providers that expose these as structured, verifiable facts win the citation.
      </p>
    </LabChartCard>
  );
}
