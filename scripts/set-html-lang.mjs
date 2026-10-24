// Post-build step: the static export renders every page with <html lang="en">
// (one root layout), so rewrite it to lang="id" for the Indonesian pages in out/id.
import { readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const root = new URL("../out/", import.meta.url);
const targets = [new URL("id.html", root), new URL("id/", root)];

async function* htmlFiles(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) yield* htmlFiles(path);
    else if (entry.name.endsWith(".html")) yield path;
  }
}

let count = 0;
async function fix(path) {
  const html = await readFile(path, "utf8");
  const next = html.replace(/<html lang="en"/, '<html lang="id"');
  if (next !== html) {
    await writeFile(path, next);
    count++;
  }
}

for (const target of targets) {
  const path = fileURLToPath(target);
  try {
    if (path.endsWith(".html")) await fix(path);
    else for await (const file of htmlFiles(path)) await fix(file);
  } catch (err) {
    if (err.code !== "ENOENT") throw err;
  }
}
console.log(`set-html-lang: ${count} Indonesian pages updated`);
