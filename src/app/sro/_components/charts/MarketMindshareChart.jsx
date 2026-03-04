"use client";

import { motion } from "framer-motion";

export default function MarketMindshareChart() {
  const regions = [
    { name: "Fremont Cluster", value: 85, color: "bg-brand" },
    { name: "San Jose Tech", value: 72, color: "bg-brand/80" },
    { name: "East Bay Industrial", value: 64, color: "bg-brand/60" },
    { name: "Peninsula Suppliers", value: 45, color: "bg-zinc-200" },
  ];

  return (
    <div className="bg-white p-8 rounded-3xl border border-zinc-100 shadow-sm relative overflow-hidden group">
      <div className="flex flex-col mb-10">
        <h4 className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em] mb-1">
          Regional Analysis
        </h4>
        <h3 className="text-xl font-bold text-zinc-900">
          Model Mindshare Mapping
        </h3>
        <p className="text-xs text-zinc-500 mt-1">
          Authority levels for Bay Area industrial entities across LLMs
        </p>
      </div>

      <div className="space-y-6">
        {regions.map((region, i) => (
          <div key={region.name} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
                {region.name}
              </span>
              <span className="text-xs font-black text-brand">
                {region.value} pts
              </span>
            </div>
            <div className="h-1.5 w-full bg-zinc-50 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${region.value}%` }}
                transition={{ duration: 1, delay: i * 0.1 }}
                className={`h-full rounded-full ${region.color}`}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 pt-6 border-t border-zinc-50 flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center text-[10px] font-bold text-zinc-300 italic">
          Map
        </div>
        <p className="text-[10px] text-zinc-400 font-medium leading-relaxed">
          SRO builds geographic and category authority so AI models recognize
          your "Entity Presence" in the Bay Area Corridor.
        </p>
      </div>
    </div>
  );
}
