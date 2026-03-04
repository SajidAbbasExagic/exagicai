"use client";

import { motion } from "framer-motion";

export default function AEOProcessChart() {
  const steps = [
    {
      num: "01",
      title: "Technical Extraction",
      desc: "Parsing PDF & Legacy structured data",
    },
    {
      num: "02",
      title: "Entity Alignment",
      desc: "Mapping specs to industry ontologies",
    },
    {
      num: "03",
      title: "Trust Verification",
      desc: "Building cross-domain authority signals",
    },
    {
      num: "04",
      title: "Answer Synthesis",
      desc: "Optimizing for direct LLM citation",
    },
  ];

  return (
    <div className="bg-white p-8 rounded-3xl border border-zinc-100 shadow-sm relative overflow-hidden group">
      <div className="flex flex-col mb-10">
        <h4 className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em] mb-1">
          Operational Core
        </h4>
        <h3 className="text-xl font-bold text-zinc-900">The AEO Pipeline</h3>
      </div>

      <div className="grid grid-cols-1 gap-6 relative">
        {/* Connecting line */}
        <div className="absolute left-6 top-6 bottom-6 w-px bg-zinc-50 hidden md:block" />

        {steps.map((step, i) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="flex items-start gap-5 relative z-10 group/item"
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center text-sm font-bold text-zinc-300 group-hover/item:bg-brand group-hover/item:text-white group-hover/item:border-brand transition-all duration-300">
              {step.num}
            </div>
            <div className="pt-1">
              <h4 className="text-sm font-bold text-zinc-900 uppercase tracking-widest group-hover/item:text-brand transition-colors">
                {step.title}
              </h4>
              <p className="text-xs text-zinc-500 font-medium mt-1 leading-relaxed">
                {step.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
