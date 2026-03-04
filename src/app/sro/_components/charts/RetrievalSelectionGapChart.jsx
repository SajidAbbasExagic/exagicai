"use client";

import { motion } from "framer-motion";

export default function RetrievalSelectionGapChart() {
  const layers = [
    {
      label: "Market Suppliers",
      count: "100%",
      sub: "Total qualified manufacturers",
      color: "bg-zinc-100",
      width: "100%",
    },
    {
      label: "AI Retrieval",
      count: "45%",
      sub: "Found during research phase",
      color: "bg-brand/30",
      width: "45%",
    },
    {
      label: "AI Selection",
      count: "3%",
      sub: "Cited in the final answer",
      color: "bg-brand",
      width: "15%",
    },
  ];

  return (
    <div className="bg-zinc-950 p-8 rounded-3xl border border-zinc-800 shadow-sm relative overflow-hidden group">
      <div className="flex flex-col mb-10 relative z-10">
        <h4 className="text-[10px] font-bold text-brand-dark uppercase tracking-[0.2em] mb-1">
          The Procurement Funnel
        </h4>
        <h3 className="text-xl font-bold text-white">
          The Retrieval-Selection Gap
        </h3>
        <p className="text-xs text-zinc-400 mt-1">
          Most brands are archived, only 3% achieve "Model Grounding" authority.
        </p>
      </div>

      <div className="flex flex-col items-center gap-4 relative z-10">
        {layers.map((layer, i) => (
          <div key={layer.label} className="w-full flex flex-col items-center">
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: layer.width, opacity: 1 }}
              transition={{ duration: 0.8, delay: i * 0.2, ease: "circOut" }}
              className={`h-12 ${layer.color} rounded-xl border border-white/10 flex items-center justify-center relative shadow-lg`}
            >
              <span
                className={`text-sm font-bold ${i === 2 ? "text-white" : "text-zinc-600"} pointer-events-none`}
              >
                {layer.count}
              </span>
            </motion.div>
            <div className="mt-2 text-center">
              <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest leading-none">
                {layer.label}
              </span>
              <p className="text-[9px] text-zinc-600 mt-0.5">{layer.sub}</p>
            </div>
            {i < layers.length - 1 && (
              <div className="h-4 w-px bg-zinc-800 my-1" />
            )}
          </div>
        ))}
      </div>

      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.05)_0%,transparent_50%)] pointer-events-none" />
    </div>
  );
}
