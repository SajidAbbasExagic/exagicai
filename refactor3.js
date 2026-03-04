const fs = require("fs");
const path = require("path");

const pagesDir = "src/app";

const pages = [
  { path: "ai-seo", comp: "AISEOContent" },
  { path: "aeo", comp: "AEOContent" },
  { path: "sro", comp: "SROContent" },
  { path: "industries", comp: "IndustriesContent" },
];

function camelize(str) {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      if (+word === 0 || word === "0") return ""; // ignore digits maybe
      return word.toUpperCase();
    })
    .replace(/\s+/g, "")
    .replace(/[^a-zA-Z0-9]/g, "");
}

pages.forEach((p) => {
  const contentPath = path.join(
    pagesDir,
    "_components",
    p.comp,
    p.comp + ".jsx",
  );
  if (!fs.existsSync(contentPath)) {
    console.log("Skipping " + p.comp);
    return;
  }

  const content = fs.readFileSync(contentPath, "utf8");
  const lines = content.split("\n");

  const sections = [];
  let currentTitle = null;
  let currentBody = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.includes("{/* SECTION")) {
      if (currentTitle) {
        sections.push({
          title: currentTitle,
          body: currentBody.join("\n"),
          hasFaq: currentBody.join("\\n").includes("faqItems"),
        });
      }

      const match = line.match(/SECTION\s+\d+\s*—\s*(.*?)\s*\*\//);
      if (match) {
        currentTitle = match[1].trim();
      } else {
        currentTitle = "Section " + i;
      }
      currentBody = [];
    } else if (line.includes("<ContactCTA />") && currentTitle) {
      sections.push({
        title: currentTitle,
        body: currentBody.join("\n"),
        hasFaq: currentBody.join("\\n").includes("faqItems"),
      });
      currentTitle = null;
    } else if (currentTitle) {
      currentBody.push(line);
    }
  }

  // End of file processing
  if (currentTitle) {
    sections.push({
      title: currentTitle,
      body: currentBody.join("\n"),
      hasFaq: currentBody.join("\\n").includes("faqItems"),
    });
  }

  console.log("Processed", p.comp, "found", sections.length, "sections");

  const pageComponentsDir = path.join(pagesDir, p.path, "_components");
  if (!fs.existsSync(pageComponentsDir)) {
    fs.mkdirSync(pageComponentsDir, { recursive: true });
  }

  let imports = [];
  let tags = [];

  sections.forEach((s, idx) => {
    let compName = camelize(s.title);
    if (!compName || compName.toLowerCase() === "hero")
      compName = p.comp.replace("Content", "") + "Hero";
    if (compName.toLowerCase().includes("faq"))
      compName = p.comp.replace("Content", "") + "FAQ";
    if (
      compName.toLowerCase().includes("cta") ||
      compName.toLowerCase().includes("readyto") ||
      compName.toLowerCase().includes("startbuilding")
    )
      compName = p.comp.replace("Content", "") + "ClosingCTA";

    // Ensure uniqueness
    let finalCompName = compName;
    while (
      sections.slice(0, idx).some((x) => x.finalCompName === finalCompName)
    ) {
      finalCompName += "Next";
    }
    s.finalCompName = finalCompName;

    // We shouldn't export ContactCTA from here if it conflicts, but let's assume it doesn't.
    // Ensure body doesn't end with </>, it's already stripped out.
    // Trim trailing empty lines
    const sectionBody = s.body
      .trim()
      .replace(/^<\/>$/, "")
      .replace(/<\/>$/, "");

    let compCode = `import Link from "next/link";\n\n`;
    compCode += `export default function ${finalCompName}(${s.hasFaq ? "{ faqItems }" : ""}) {\n  return (\n    <>\n      ${sectionBody}\n    </>\n  );\n}\n`;

    fs.writeFileSync(
      path.join(pageComponentsDir, finalCompName + ".jsx"),
      compCode,
    );

    imports.push(
      `import ${finalCompName} from "./_components/${finalCompName}";`,
    );
    tags.push(
      `      <${finalCompName}${s.hasFaq ? " faqItems={faqItems}" : ""} />`,
    );
  });

  const pageFile = path.join(pagesDir, p.path, "page.jsx");
  let pageContent = fs.readFileSync(pageFile, "utf8");

  // Replace the component render and import
  pageContent = pageContent.replace(
    new RegExp(`import ${p.comp}.*?\\n`, "g"),
    "",
  );
  pageContent = pageContent.replace(
    new RegExp(`\\s*<${p.comp}.*?/>`, "g"),
    "\n" + tags.join("\n") + "\n      <ContactCTA />\n",
  );

  // Add ContactCTA import
  let importBlock =
    imports.join("\n") +
    `\nimport ContactCTA from "../_components/ContactCTA/ContactCTA";`;

  // Insert the import block right before export default function
  pageContent = pageContent.replace(
    /export default function/,
    importBlock + "\n\n$&",
  );

  fs.writeFileSync(pageFile, pageContent);
  console.log("Saved", pageFile);
});
