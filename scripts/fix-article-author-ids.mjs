import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const articlesPath = path.join(__dirname, "../src/app/lab/_data/articles.js");
let source = fs.readFileSync(articlesPath, "utf8");

let index = 0;
source = source.replace(
  /href: "(\/lab\/[^"]+)",(\r?\n)(?!\s*authorId:)/g,
  (match, href, newline) => {
    const authorId = index % 2 === 0 ? "saif" : "muqaddas";
    index += 1;
    return `href: "${href}",${newline}    authorId: "${authorId}",${newline}`;
  },
);

fs.writeFileSync(articlesPath, source);
console.log(`Ensured authorId on ${index} articles.`);
