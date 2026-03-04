"use client";

import { motion } from "framer-motion";
import { Search, Sparkles, Target, Zap } from "lucide-react";

const frameworkSteps = [
  {
    icon: <Search className="w-5 h-5" />,
    title: "Data. Discovery. Probing.",
    description:
      "We design and deploy high-precision digital strategies grounded in mechanistic interpretability. Every decision is driven by probabilistic testing and deep semantic analysis of model behavior.",
  },
  {
    icon: <Sparkles className="w-5 h-5" />,
    title: "Innovation.",
    description:
      "Our clients gain access to proprietary tools and methodologies designed to convert technical specifications into machine-readable entities, ensuring dominance in AI sourcing.",
  },
  {
    icon: <Target className="w-5 h-5" />,
    title: "Focused Campaigns.",
    description:
      "We deliver sharp, prioritised AI SEO strategies designed to meet your business objectives in the SF Bay Area industrial corridor and beyond.",
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: "Next Level Support.",
    description:
      "Proactive, technical oversight designed to lift your visibility ceiling, mitigate algorithmic risk, and maximize the efficiency of your model-steering efforts.",
  },
];

export default function Logic() {
  return (
    <section
      id="logic"
      aria-labelledby="logic-heading"
      className="rag-section bg-white py-20 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="max-w-3xl mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            id="logic-heading"
            className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900"
          >
            Our Strategic Framework
          </motion.h2>
        </div>

        <div className="max-w-4xl space-y-12">
          {frameworkSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
              itemScope
              itemType="https://schema.org/HowToStep"
            >
              <div className="flex items-center gap-4 mb-4">
                <div
                  className="flex h-1.5 w-1.5 rounded-full bg-brand shrink-0"
                  aria-hidden="true"
                />
                <div className="text-brand shrink-0" aria-hidden="true">
                  {step.icon}
                </div>
                <h3
                  className="text-xl font-bold text-zinc-900 tracking-tight"
                  itemProp="name"
                >
                  {step.title}
                </h3>
              </div>

              <div className="pl-10">
                <p
                  className="text-zinc-600 text-base leading-relaxed max-w-3xl"
                  itemProp="description"
                >
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
