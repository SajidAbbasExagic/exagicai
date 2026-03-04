"use client";

import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What sort of monthly budget do I need for AI SEO?",
      answer:
        "Engagements vary by scope. We offer retainers, audits, and project-based packages. Contact us for a quote tailored to your industrial niche and business objectives.",
    },
    {
      question: "How many queries can Exagic AI target?",
      answer:
        "All of them. Our campaigns cover past, current, and future AI search queries with no technical limit. Target selection is a strategic decision made collaboratively based on your goals.",
    },
    {
      question: "What separates Exagic AI from traditional SEO companies?",
      answer:
        "We lead the industry through the application of mechanistic interpretability. We don't just optimize for clicks; we steer how AI models retrieve and cite your specific brand data.",
    },
    {
      question: "Why do manufacturers in the SF Bay Area need SRO?",
      answer:
        "Industrial buyers now use AI agents to source parts. SRO ensures that when an agent searches for a supplier in Fremont or San Leandro, your business is the one it trusts and selects.",
    },
    {
      question: "Do you offer ranking guarantees?",
      answer:
        "We focus on visibility and citation share. We do not offer arbitrary ranking guarantees, as AI model outputs are probabilistic; however, we optimize the data to maximize the probability of selection.",
    },
    {
      question: "What is Answer Engine Optimization (AEO)?",
      answer:
        "AEO is the practice of optimizing your brand's content and data so that AI tools like ChatGPT, Perplexity, and Gemini cite your business as a trusted source when answering relevant queries. Unlike traditional SEO which targets search engine rankings, AEO targets AI retrieval and citation.",
    },
    {
      question: "What is Selection Rate Optimization (SRO)?",
      answer:
        "SRO is an advanced technique that increases the probability of an AI model selecting your brand as its primary citation during retrieval. It involves data structuring, entity reinforcement, and authority signal building to make your brand the default recommendation.",
    },
    {
      question: "Which AI platforms do you optimize for?",
      answer:
        "We optimize for all major AI answer engines including ChatGPT, Google Gemini, Perplexity AI, and AI-powered search agents used in industrial procurement and sourcing.",
    },
    {
      question: "How long does it take to see results from AEO?",
      answer:
        "Initial visibility improvements typically appear within 60 to 90 days. Full citation dominance in your niche depends on content depth, competitive landscape, and the starting state of your brand's data structure.",
    },
    {
      question: "What industries do you specialize in?",
      answer:
        "We specialize in industrial manufacturing, hardware supply chains, logistics, and B2B suppliers operating in the San Francisco Bay Area corridor, including the East Bay, Fremont, San Leandro, and Silicon Valley.",
    },
    {
      question: "What does a Technical Entity Audit include?",
      answer:
        "A full-day audit covering your brand's current AI visibility status, entity associations, knowledge graph presence, schema markup quality, content extractability, and citation share across major AI platforms, with a prioritized action plan.",
    },
    {
      question: "Do I need to change my existing website to work with you?",
      answer:
        "Not necessarily. Many of our optimizations are implemented at the data and schema level and do not require redesigning your site. We assess what is needed during the initial consultation.",
    },
    {
      question: "How is AI SEO different from traditional SEO?",
      answer:
        "Traditional SEO optimizes for search engine rankings and click-through rates. AI SEO optimizes for how AI models understand, trust, and retrieve your brand data. The goal is citations inside AI answers, not just blue links on a results page.",
    },
    {
      question: "Can you fix AI hallucinations about my brand?",
      answer:
        "Yes. Our Rank and Citation Recovery service includes identifying incorrect or misleading AI-generated descriptions of your brand and implementing data corrections to steer models toward accurate information.",
    },
    {
      question: "How do industrial buyers use AI to find suppliers today?",
      answer:
        "Increasingly, procurement teams use AI agents to search for qualified suppliers, compare specifications, and shortlist vendors. If your brand is not visible in AI retrieval systems, you are invisible to this growing segment of industrial buyers.",
    },
    {
      question: "What does your AI SEO retainer include?",
      answer:
        "Ongoing model steering, entity maintenance, content optimization, monthly visibility tracking across ChatGPT, Gemini, and Perplexity, and strategic recommendations based on competitive citation analysis.",
    },
    {
      question: "Where are you based?",
      answer:
        "We are based in San Francisco, California, and serve clients across the SF Bay Area industrial corridor, Silicon Valley, and globally for enterprise engagements.",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="rag-section border-y border-zinc-100 bg-zinc-50 py-20 md:py-24"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="mx-auto max-w-4xl px-6 lg:px-12 min-h-[450px]">
        <h2
          id="faq-heading"
          className="text-3xl sm:text-4xl font-bold text-zinc-900 tracking-tight text-center"
        >
          Frequently Asked Questions
        </h2>

        <dl className="mt-12 sm:mt-16 space-y-2 w-full">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="faq-item group rounded-2xl bg-white border border-zinc-200/60 overflow-hidden shadow-sm hover:border-brand/30 transition-colors duration-300"
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <dt>
                <button
                  type="button"
                  className="flex w-full cursor-pointer items-center justify-between px-5 py-5 sm:px-6 sm:py-6 text-left transition-colors"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span
                    className="text-base sm:text-lg font-bold text-zinc-900 tracking-tight group-hover:text-brand transition-colors duration-300"
                    itemProp="name"
                  >
                    {faq.question}
                  </span>
                  <div
                    className={`ml-6 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-zinc-50 transition-all duration-300 ${openIndex === index ? "bg-brand/10 text-brand transform rotate-180" : "text-zinc-400 group-hover:bg-brand/5 group-hover:text-brand"}`}
                  >
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d={openIndex === index ? "M20 12H4" : "M12 4v16m8-8H4"}
                      />
                    </svg>
                  </div>
                </button>
              </dt>
              <dd
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
                hidden={openIndex !== index}
              >
                <div
                  className="px-5 pb-5 pt-0 sm:px-6 sm:pb-6 text-sm text-zinc-600 leading-relaxed border-t border-zinc-100 mt-2 pt-4"
                  itemProp="text"
                >
                  {faq.answer}
                </div>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
