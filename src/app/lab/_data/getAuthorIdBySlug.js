import { articles } from "./articles";

const slugToAuthorId = Object.fromEntries(
  articles.map((article, index) => {
    const slug = article.href.replace("/lab/", "");
    const authorId = article.authorId ?? (index % 2 === 0 ? "saif" : "muqaddas");
    return [slug, authorId];
  }),
);

export function getAuthorIdBySlug(slug) {
  return slugToAuthorId[slug] ?? "saif";
}
