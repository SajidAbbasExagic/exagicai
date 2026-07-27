"use client";

import { useState } from "react";

export default function FAQAccordion({
  items = [],
  defaultOpenIndex = null,
  allowMultiple = false,
  className = "",
}) {
  const [openIndexes, setOpenIndexes] = useState(
    defaultOpenIndex !== null ? [defaultOpenIndex] : []
  );

  const toggleIndex = (index) => {
    if (allowMultiple) {
      setOpenIndexes((prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index]
      );
    } else {
      setOpenIndexes((prev) => (prev.includes(index) ? [] : [index]));
    }
  };

  return (
    <div className={`space-y-4 w-full ${className}`}>
      {items.map((item, index) => {
        const isOpen = openIndexes.includes(index);
        return (
          <div
            key={index}
            className={`faq-item group rounded-2xl bg-white transition-all duration-300 overflow-hidden ${
              isOpen
                ? "border border-brand/40 bg-brand/[0.015] shadow-sm"
                : "border border-zinc-200/80 hover:border-brand/30 shadow-sm"
            }`}
            itemScope
            itemProp="mainEntity"
            itemType="https://schema.org/Question"
          >
            <h3>
              <button
                type="button"
                className="flex w-full cursor-pointer items-center justify-between px-6 py-5 sm:px-8 sm:py-6 text-left transition-colors"
                onClick={() => toggleIndex(index)}
                aria-expanded={isOpen}
                aria-controls={`faq-accordion-answer-${index}`}
              >
                <span
                  className={`text-base sm:text-lg font-bold tracking-tight transition-colors duration-300 ${
                    isOpen
                      ? "text-brand"
                      : "text-zinc-900 group-hover:text-brand"
                  }`}
                  itemProp="name"
                >
                  {item.question}
                </span>
                <div
                  className={`ml-6 flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                    isOpen
                      ? "bg-brand/10 text-brand"
                      : "bg-zinc-100/80 text-zinc-400 group-hover:bg-brand/10 group-hover:text-brand"
                  }`}
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    aria-hidden="true"
                  >
                    {isOpen ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M20 12H4"
                      />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4v16m8-8H4"
                      />
                    )}
                  </svg>
                </div>
              </button>
            </h3>
            <div
              id={`faq-accordion-answer-${index}`}
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
              }`}
              itemScope
              itemProp="acceptedAnswer"
              itemType="https://schema.org/Answer"
              hidden={!isOpen}
            >
              <div
                className="px-6 pb-6 pt-0 sm:px-8 sm:pb-7 text-sm sm:text-base text-zinc-600 leading-relaxed"
                itemProp="text"
              >
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
