import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "The senator drafting the bill to regulate artificial intelligence spent the morning on hold with IT because his 400-page crypto report would not become a PDF, then voted to regulate the future anyway.";

function writeEntry(text: string): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(`${outDir}/entry.txt`, text + "\n", "utf8");
}

writeEntry(ENTRY);
