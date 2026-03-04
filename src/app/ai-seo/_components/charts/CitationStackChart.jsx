"use client";

import { motion } from "framer-motion";

export default function CitationStackChart() {
  const layers = [
    {
      label: "AI Response",
      color: "bg-brand",
      text: "Brand Citation within synthesized answer",
    },
    {
      label: "Grounding Content",
      color: "bg-brand/80",
      text: "Technical specifications and case studies",
    },
    {
      label: "Entity Linkage",
      color: "bg-brand/60",
      text: "Associations between brand & industry categories",
    },
    {
      label: "Technical Schema",
      color: "bg-brand/40",
      text: "Advanced JSON-LD and structured metadata",
    },
    {
      label: "Core Technical Data",
      color: "bg-zinc-100",
      text: "Product catalogs, spec sheets, certifications",
    },
  ];

  return (
    <div className="bg-zinc-50 p-6 md:p-8 rounded-[2rem] border border-zinc-200 relative">
      <div className="flex flex-col mb-10">
        <h4 className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1">
          Technical Architecture
        </h4>
        <h3 className="text-xl font-bold text-zinc-900">
          The AI Discovery Stack
        </h3>
      </div>

      <div className="flex flex-col gap-3">
        {layers.map((layer, i) => (
          <motion.div
            key={layer.label}
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative transition-all duration-300 hover:-translate-y-1"
          >
            <div
              className={`h-12 ${layer.color} rounded-xl border ${
                i === layers.length - 1 ? "border-zinc-200" : "border-white/20"
              } shadow-sm group-hover:shadow-md flex items-center px-4 md:px-6 transition-all cursor-help`}
            >
              <span
                className={`text-[10px] md:text-xs font-bold ${
                  i >= 3 ? "text-zinc-600" : "text-white"
                } uppercase tracking-[0.2em]`}
              >
                {layer.label}
              </span>
            </div>

            {/* Tooltip detail - Popping out to the LEFT to avoid edge cutoff */}
            <div className="absolute right-[105%] top-1/2 -translate-y-1/2 w-48 hidden lg:block pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
              <div className="bg-zinc-900 p-3 rounded-xl shadow-xl border border-zinc-800">
                <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest leading-relaxed">
                  {layer.text}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
