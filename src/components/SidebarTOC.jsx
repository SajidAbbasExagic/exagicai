"use client";

import { useEffect, useState } from "react";

export default function SidebarTOC() {
  const [headings, setHeadings] = useState([]);
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    // Find headings within the article content only
    const articleContent = document.querySelector(".article-content");
    if (!articleContent) return;

    const elements = Array.from(articleContent.querySelectorAll("h2, h3")).map(
      (element, index) => {
        if (!element.id) {
          element.id = `section-${index}`;
        }
        return {
          id: element.id,
          text: element.innerText,
          level: element.tagName.toLowerCase(),
        };
      },
    );
    setHeadings(elements);

    // Intersection Observer for active state
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "0% 0% -80% 0%" },
    );

    elements.forEach((h) => {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  if (headings.length === 0) return null;

  return (
    <div className="bg-white border border-zinc-100 rounded-2xl p-6 shadow-sm">
      <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#f06030] mb-6 border-b border-zinc-50 pb-4">
        In this article
      </h3>
      <nav>
        <ul className="space-y-4">
          {headings.map((heading) => (
            <li
              key={heading.id}
              className={heading.level === "h3" ? "ml-4" : ""}
            >
              <a
                href={`#${heading.id}`}
                className={`text-sm transition-all duration-200 block ${
                  activeId === heading.id
                    ? "text-[#f06030] font-bold translate-x-1"
                    : "text-zinc-500 hover:text-zinc-900"
                }`}
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
