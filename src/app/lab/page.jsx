"use client";

import { useState } from "react";
import { categories, articles } from "./_data/articles";
import LabHero from "./_components/LabHero";
import LabFilterBar from "./_components/LabFilterBar";
import LabArticleGrid from "./_components/LabArticleGrid";
import LabCTA from "./_components/LabCTA";

export default function LabPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredArticles =
    activeCategory === "All"
      ? articles
      : articles.filter((article) => article.category === activeCategory);

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://exagic-ai.vercel.app/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Lab",
        item: "https://exagic-ai.vercel.app/lab",
      },
    ],
  };

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: filteredArticles.map((article, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `https://exagic-ai.vercel.app${article.href}`,
      name: article.title,
    })),
  };

  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />

      <LabHero />
      <LabFilterBar
        categories={categories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <LabArticleGrid filteredArticles={filteredArticles} />
      <LabCTA />
    </div>
  );
}
