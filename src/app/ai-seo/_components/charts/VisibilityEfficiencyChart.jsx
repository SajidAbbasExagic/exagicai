"use client";

import { motion } from "framer-motion";

export default function VisibilityEfficiencyChart() {
  const steps = [
    { label: "Legacy SEO", cost: 100, reach: 20, efficiency: 0.2 },
    { label: "Exagic AI SEO", cost: 60, reach: 95, efficiency: 1.58 },
  ];

  return (
    <div className="bg-zinc-950 p-6 md:p-8 rounded-2xl border border-zinc-800 shadow-sm overflow-hidden relative group">
      <div className="flex flex-col mb-8 relative z-10">
        <h4 className="text-sm font-bold text-brand-dark uppercase tracking-widest mb-1">
          Performance Alpha
        </h4>
        <h3 className="text-xl font-bold text-white">
          SRO Visibility Efficiency
        </h3>
        <p className="text-sm text-zinc-400 mt-1">
          Comparison of brand citation probability vs spend
        </p>
      </div>

      <div className="space-y-8 relative z-10">
        {steps.map((step, i) => (
          <div key={step.label} className="space-y-2.5">
            <div className="flex justify-between items-end gap-4">
              <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
                {step.label}
              </span>
              <span
                className={`text-base font-bold ${i === 1 ? "text-brand" : "text-zinc-500"}`}
              >
                {i === 1 ? "8.4x Lower CAC" : "Industry Standard"}
              </span>
            </div>
            <div className="h-3 w-full bg-zinc-900 rounded-full overflow-hidden border border-zinc-800">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${(step.efficiency / 1.58) * 100}%` }}
                transition={{ duration: 1.2, delay: i * 0.3, ease: "circOut" }}
                className={`h-full rounded-full ${i === 1 ? "bg-gradient-to-r from-brand to-brand-dark" : "bg-zinc-700"}`}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-2 gap-4 relative z-10">
        <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/50">
          <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-1">
            Citation Probability
          </p>
          <p className="text-2xl font-bold text-white">+375%</p>
        </div>
        <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/50">
          <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-1">
            Avg. SRO Gain
          </p>
          <p className="text-2xl font-bold text-white">12.2 pts</p>
        </div>
      </div>

      <div className="absolute top-0 right-0 w-64 h-64 bg-brand/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none group-hover:bg-brand/10 transition-colors" />
    </div>
  );
}
