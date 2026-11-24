import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Resolve the output directory: MAKEFUN_OUTPUT_DIR wins, then the
// --output flag (either "--output <dir>" or "--output=<dir>"), then
// the default /output directory.
function resolveOutputDir(): string {
  const fromEnv = process.env.MAKEFUN_OUTPUT_DIR;
  if (fromEnv !== undefined && fromEnv.length > 0) {
    return fromEnv;
  }
  const args = process.argv.slice(2);
  for (let i = 0; i < args.length; i++) {
    if (args[i] === "--output" && i + 1 < args.length) {
      return args[i + 1];
    }
    if (args[i].startsWith("--output=")) {
      return args[i].slice("--output=".length);
    }
  }
  return "/output";
}

const here = dirname(fileURLToPath(import.meta.url));
const image = readFileSync(join(here, "meme.png"));
const outDir = resolveOutputDir();
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.png"), image);
console.log(`Wrote ${image.length} bytes to ${join(outDir, "entry.png")}`);
