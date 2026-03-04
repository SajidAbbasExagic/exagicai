"use client";

import { motion } from "framer-motion";

export default function ServiceStackChart() {
  const stacks = [
    {
      label: "SRO",
      role: "Selection Decision",
      color: "bg-brand",
      height: "h-12",
    },
    {
      label: "AEO",
      role: "Answer Extraction",
      color: "bg-brand/70",
      height: "h-14",
    },
    {
      label: "SEO",
      role: "Technical Authority",
      color: "bg-zinc-100",
      height: "h-16",
    },
  ];

  return (
    <div className="bg-zinc-50 p-8 rounded-3xl border border-zinc-200 relative overflow-hidden group">
      <div className="flex flex-col mb-10">
        <h4 className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em] mb-1">
          Strategic Layers
        </h4>
        <h3 className="text-xl font-bold text-zinc-900">
          The Optimization Stack
        </h3>
      </div>

      <div className="flex flex-col items-center">
        {stacks.map((layer, i) => (
          <motion.div
            key={layer.label}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
            className="w-full relative group/layer"
          >
            <div
              className={`${layer.height} ${layer.color} border border-black/5 rounded-xl flex flex-col items-center justify-center mb-2 shadow-sm transition-transform group-hover/layer:-translate-y-1`}
            >
              <span
                className={`text-sm font-black ${i === 2 ? "text-zinc-500" : "text-white"} tracking-widest`}
              >
                {layer.label}
              </span>
              <span
                className={`text-[9px] font-bold ${i === 2 ? "text-zinc-400" : "text-white/70"} uppercase tracking-tight`}
              >
                {layer.role}
              </span>
            </div>
            {i < stacks.length - 1 && (
              <div className="flex justify-center -mt-1 mb-1">
                <div className="w-px h-2 bg-zinc-200" />
              </div>
            )}
          </motion.div>
        ))}
      </div>

      <p className="mt-8 text-[10px] text-zinc-400 font-medium leading-relaxed italic border-t border-zinc-100 pt-6">
        * Exagic AI integrates all three layers to ensure industrial brands move
        from simple indexing to dominant AI answer citation.
      </p>
    </div>
  );
}
