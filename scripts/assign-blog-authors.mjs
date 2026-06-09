import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const articlesPath = path.join(root, "src/app/lab/_data/articles.js");
const labDir = path.join(root, "src/app/lab");

let articlesSource = fs.readFileSync(articlesPath, "utf8");

const hrefMatches = [...articlesSource.matchAll(/href: "(\/lab\/[^"]+)"/g)];
const slugs = hrefMatches.map((match, index) => ({
  href: match[1],
  slug: match[1].replace("/lab/", ""),
  authorId: index % 2 === 0 ? "saif" : "muqaddas",
}));

for (const { href, authorId } of slugs) {
  const hrefPattern = `href: "${href}"`;
  const blockStart = articlesSource.indexOf(hrefPattern);
  if (blockStart === -1) continue;

  const blockSlice = articlesSource.slice(
    Math.max(0, blockStart - 400),
    blockStart + 200,
  );
  if (blockSlice.includes("authorId:")) continue;

  articlesSource = articlesSource.replace(
    `${hrefPattern},`,
    `${hrefPattern},\n    authorId: "${authorId}",`,
  );
}

fs.writeFileSync(articlesPath, articlesSource);

let updatedPages = 0;
for (const { slug, authorId } of slugs) {
  const pagePath = path.join(labDir, slug, "page.jsx");
  if (!fs.existsSync(pagePath)) continue;

  let content = fs.readFileSync(pagePath, "utf8");
  if (/authorId="(?:saif|muqaddas)"/.test(content)) {
    content = content.replace(
      /authorId="(?:saif|muqaddas)"/,
      `authorId="${authorId}"`,
    );
  } else {
    content = content.replace(
      /<LabArticleLayout(\r?\n)/,
      `<LabArticleLayout$1      authorId="${authorId}"$1`,
    );
  }

  fs.writeFileSync(pagePath, content);
  updatedPages += 1;
}

console.log(
  `Assigned authors to ${slugs.length} articles and updated ${updatedPages} blog pages.`,
);
