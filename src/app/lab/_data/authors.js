export const authors = {
  saif: {
    id: "saif",
    name: "Saif K",
    title: "Director of Strategy",
    ctaTitle: "Director of Strategy",
    ctaSubtitle: "Director of Strategy & Founder",
    image: "/team/arthur.jpg",
    linkedin: "https://www.linkedin.com/in/saif-exagic-ai",
    bio: "Expert in mechanistic interpretability and AI visibility for industrial manufacturers and Bay Area suppliers.",
    ctaBio:
      "Saif specializes in bridging the gap between industrial technical documentation and modern AI retrieval systems.",
    schemaName: "Saif Khan",
  },
  muqaddas: {
    id: "muqaddas",
    name: "Muqaddas",
    title: "Head of AI Visibility & AEO",
    ctaTitle: "Head of AI Visibility & AEO",
    ctaSubtitle: "Head of AI Visibility & AEO",
    image: "/team/muqaddas-placeholder.svg",
    linkedin: "https://www.linkedin.com/in/muqaddas-exagic-ai/",
    bio: "Specialist in answer engine optimization and AI citation strategy for industrial brands competing in procurement search.",
    ctaBio:
      "Muqaddas leads AEO programs that help manufacturers earn citations across ChatGPT, Perplexity, and AI procurement workflows.",
    schemaName: "Muqaddas",
  },
};

export function getAuthor(authorId = "saif") {
  return authors[authorId] ?? authors.saif;
}
