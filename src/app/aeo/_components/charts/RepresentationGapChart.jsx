"use client";

import { motion } from "framer-motion";

export default function RepresentationGapChart() {
  const categories = [
    { name: "Technical Specs", human: 90, ai: 15 },
    { name: "Brand Authority", human: 85, ai: 20 },
    { name: "Entity Relations", human: 30, ai: 5 },
    { name: "Procurement Intent", human: 10, ai: 2 },
  ];

  return (
    <div className="bg-zinc-950 p-8 rounded-3xl border border-zinc-800 shadow-sm relative overflow-hidden group">
      <div className="flex flex-col mb-10 relative z-10">
        <h4 className="text-[10px] font-bold text-brand-dark uppercase tracking-[0.2em] mb-1">
          The Semantic Gap
        </h4>
        <h3 className="text-xl font-bold text-white">AI Parsing Efficiency</h3>
        <p className="text-xs text-zinc-400 mt-1">
          Legacy Industrial Web Content vs AI Retrieval Capabilities
        </p>
      </div>

      <div className="space-y-6 relative z-10">
        {categories.map((cat, i) => (
          <div key={cat.name} className="space-y-2">
            <div className="flex justify-between items-center px-1">
              <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
                {cat.name}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex-1 h-2 bg-zinc-900 rounded-full overflow-hidden border border-zinc-800 relative">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${cat.human}%` }}
                  transition={{ duration: 1, delay: i * 0.1 }}
                  className="h-full bg-zinc-700/50 rounded-full"
                />
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${cat.ai}%` }}
                  transition={{ duration: 1, delay: i * 0.1 + 0.3 }}
                  className="absolute inset-0 h-full bg-brand rounded-full "
                />
              </div>
              <span className="text-[10px] font-bold text-zinc-400 w-8">
                {cat.ai}%
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex gap-6 relative z-10 pt-6 border-t border-zinc-900">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-zinc-700/50 rounded-full"></div>
          <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest">
            Human Readability
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-brand rounded-full"></div>
          <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest">
            AI Extraction Rate
          </span>
        </div>
      </div>

      <div className="absolute top-0 right-0 w-32 h-32 bg-brand/5 rounded-full blur-[60px] pointer-events-none" />
    </div>
  );
}
