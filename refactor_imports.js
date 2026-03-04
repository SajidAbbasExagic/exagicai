const fs = require("fs");

const pages = [
  "src/app/ai-seo/page.jsx",
  "src/app/aeo/page.jsx",
  "src/app/sro/page.jsx",
  "src/app/industries/page.jsx",
];

pages.forEach((file) => {
  let content = fs.readFileSync(file, "utf8");
  let lines = content.split("\n");

  let imports = ['import Link from "next/link";'];
  let others = [];

  lines.forEach((line) => {
    if (line.trim().startsWith("import ") && line.includes("from")) {
      if (!imports.includes(line)) imports.push(line);
    } else {
      others.push(line);
    }
  });

  // ensure ContactCTA is last among imports if we care, doesn't matter much.
  const newContent =
    imports.join("\n") +
    "\n\n" +
    others.join("\n").replace(/^\s*[\r\n]/gm, "\n");
  fs.writeFileSync(file, newContent);
});
console.log("Imports reordered");
