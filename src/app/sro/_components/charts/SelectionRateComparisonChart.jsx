"use client";

import { motion } from "framer-motion";

export default function SelectionRateComparisonChart() {
  const data = [
    { label: "Generic Technical Content", value: 4, color: "bg-zinc-200" },
    { label: "SRO Optimized Authority", value: 92, color: "bg-brand" },
  ];

  return (
    <div className="bg-white p-8 rounded-3xl border border-zinc-100 shadow-sm relative overflow-hidden group">
      <div className="flex flex-col mb-10">
        <h4 className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em] mb-1">
          Selection Alpha
        </h4>
        <h3 className="text-xl font-bold text-zinc-900">
          Selection Rate Probabilities
        </h3>
        <p className="text-xs text-zinc-500 mt-1">
          Rate at which a retrieved brand is cited as the primary recommendation
        </p>
      </div>

      <div className="space-y-8">
        {data.map((item, i) => (
          <div key={item.label} className="space-y-3">
            <div className="flex justify-between items-end">
              <span className="text-xs font-bold text-zinc-600 uppercase tracking-widest max-w-[200px]">
                {item.label}
              </span>
              <span
                className={`text-2xl font-black ${i === 1 ? "text-brand" : "text-zinc-400"}`}
              >
                {item.value}%
              </span>
            </div>
            <div className="h-4 w-full bg-zinc-50 rounded-full overflow-hidden border border-zinc-100">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${item.value}%` }}
                transition={{ duration: 1, delay: i * 0.2, ease: "circOut" }}
                className={`h-full rounded-full ${item.color}`}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 pt-6 border-t border-zinc-50 italic text-[10px] text-zinc-400 font-medium leading-relaxed">
        * Based on proprietary Exagic SRO testing across 1,200 industrial
        procurement simulations in 2024.
      </div>
    </div>
  );
}
