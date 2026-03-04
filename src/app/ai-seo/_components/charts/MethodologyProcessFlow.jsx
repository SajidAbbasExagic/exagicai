"use client";

import { motion } from "framer-motion";

export default function MethodologyProcessFlow() {
  const phases = [
    { num: "01", title: "Analysis", desc: "Brand Knowledge mapping" },
    { num: "02", title: "Mapping", desc: "Entity & Association" },
    { num: "03", title: "Citability", desc: "Citation Stack analysis" },
    { num: "04", title: "Grounding", desc: "Grounding behavior prediction" },
    { num: "05", title: "Execution", desc: "Technical data structuring" },
    { num: "06", title: "Tracking", desc: "AI Visibility monitoring" },
  ];

  return (
    <div className="bg-white p-8 rounded-[2.5rem] border border-zinc-200 shadow-sm">
      <div className="flex flex-col mb-10">
        <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-1">
          Operational Framework
        </h4>
        <h3 className="text-2xl font-bold text-zinc-900">
          The 6-Phase Alignment
        </h3>
      </div>

      <div className="relative">
        {/* Connecting line for desktop - adjusted to center of 64px icon (left-8) */}
        <div className="hidden lg:block absolute left-8 top-8 bottom-8 w-px bg-zinc-100" />

        <div className="space-y-10 relative z-10">
          {phases.map((phase, i) => (
            <motion.div
              key={phase.num}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-center gap-6 group"
            >
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-zinc-50 border border-zinc-100 flex items-center justify-center text-xl font-black text-zinc-200 group-hover:bg-brand group-hover:text-white group-hover:border-brand transition-all duration-300 relative z-10">
                {phase.num}
              </div>
              <div>
                <h4 className="text-sm font-bold text-zinc-900 uppercase tracking-widest group-hover:text-brand transition-colors mb-0.5">
                  Phase {phase.num}
                </h4>
                <h5 className="text-base font-bold text-zinc-800 leading-tight">
                  {phase.title}
                </h5>
                <p className="text-sm text-zinc-500 font-medium mt-1">
                  {phase.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-zinc-50">
        <div className="flex items-center gap-4">
          <div className="flex -space-x-2">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full bg-zinc-100 border-2 border-white flex items-center justify-center text-[10px] font-bold text-zinc-400"
              >
                EA
              </div>
            ))}
          </div>
          <p className="text-[11px] font-bold text-zinc-400 uppercase tracking-widest">
            Methodology continuously updated by Exagic AI Engineering
          </p>
        </div>
      </div>
    </div>
  );
}
