"use client";

import { motion } from "framer-motion";

export default function ShiftingSearchLandscapeChart() {
  const data = [
    { year: "2023", legacy: 95, ai: 5 },
    { year: "2024", legacy: 70, ai: 30 },
    { year: "2025", legacy: 40, ai: 60 },
    { year: "2026", legacy: 15, ai: 85 },
  ];

  return (
    <div className="bg-white p-6 md:p-8 rounded-2xl border border-zinc-100 shadow-sm overflow-hidden relative">
      <div className="flex flex-col mb-8">
        <h4 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-1">
          Market Pulse
        </h4>
        <h3 className="text-xl font-bold text-zinc-900">
          The Search Paradigm Shift
        </h3>
        <p className="text-sm text-zinc-500 mt-1">
          Industrial procurement starting point (% of initial queries)
        </p>
      </div>

      <div className="relative h-72 w-full flex items-end gap-3 md:gap-6 pt-10 pl-12 pr-4">
        {/* Y-axis labels */}
        <div className="absolute left-0 top-10 bottom-0 flex flex-col justify-between text-[10px] font-bold text-zinc-300 pointer-events-none pb-6">
          <span>100%</span>
          <span>75%</span>
          <span>50%</span>
          <span>25%</span>
          <span>0%</span>
        </div>

        {data.map((item, i) => (
          <div
            key={item.year}
            className="flex-grow flex flex-col justify-end gap-1 group relative h-full"
          >
            <div className="flex gap-1 md:gap-1.5 h-full items-end pb-6 border-b border-zinc-50 relative">
              {/* Legacy Search Bar */}
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: `${item.legacy}%` }}
                transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                className="w-full bg-zinc-100 rounded-t-[2px] group-hover:bg-zinc-200 transition-colors relative"
              >
                {item.legacy > 5 && (
                  <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    {item.legacy}%
                  </span>
                )}
              </motion.div>
              {/* AI Search Bar */}
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: `${item.ai}%` }}
                transition={{
                  duration: 1,
                  delay: i * 0.1 + 0.3,
                  ease: "easeOut",
                }}
                className="w-full bg-brand rounded-t-[2px] group-hover:bg-brand-dark transition-colors relative"
              >
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-brand opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {item.ai}%
                </span>
              </motion.div>
            </div>
            <span className="text-xs font-bold text-zinc-400 text-center mt-2 uppercase tracking-tighter">
              {item.year}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-8 flex gap-6 border-t border-zinc-50 pt-6">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-zinc-100 rounded-sm"></div>
          <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
            Legacy Search (Blue Links)
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-brand rounded-sm"></div>
          <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
            AI Discovery (Grounded Answers)
          </span>
        </div>
      </div>
    </div>
  );
}
