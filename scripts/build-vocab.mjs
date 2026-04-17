// Fetches the MinnaNoDS YAML, filters to lessons 10-20, merges in POS tags
// from src/data/pos.js, and writes src/data/vocab.json.
//
// Run with: npm run build:vocab

import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import yaml from "js-yaml";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, "..");

const SOURCE_URL =
  "https://raw.githubusercontent.com/vitto4/MinnaNoDS/master/minna-no-ds.yaml";
const CACHE_PATH = path.join(ROOT, ".cache", "minna-no-ds.yaml");
const POS_PATH = path.join(ROOT, "src", "data", "pos.js");
const OUT_PATH = path.join(ROOT, "src", "data", "vocab.json");

const FIRST_LESSON = 1;
const LAST_LESSON = 25;

async function loadYaml() {
  try {
    const cached = await fs.readFile(CACHE_PATH, "utf8");
    if (cached.length > 0) {
      console.log(`Using cached YAML at ${path.relative(ROOT, CACHE_PATH)}`);
      return cached;
    }
  } catch {}
  console.log(`Fetching ${SOURCE_URL}...`);
  const res = await fetch(SOURCE_URL);
  if (!res.ok) throw new Error(`Fetch failed: ${res.status} ${res.statusText}`);
  const text = await res.text();
  await fs.mkdir(path.dirname(CACHE_PATH), { recursive: true });
  await fs.writeFile(CACHE_PATH, text, "utf8");
  return text;
}

async function loadPos() {
  try {
    const mod = await import(`file://${POS_PATH}`);
    return mod.POS || {};
  } catch (err) {
    console.warn(`No POS tags found at ${path.relative(ROOT, POS_PATH)} — all entries will be "other"`);
    return {};
  }
}

function slim(entry, posMap) {
  const [lesson, idx] = entry.id;
  const key = `${lesson}.${idx}`;
  const tag = posMap[key] || { pos: "other" };
  return {
    lesson,
    idx,
    kanji: entry.kanji || null,
    kana: entry.kana,
    romaji: entry.romaji,
    en: entry.meaning?.en || "",
    pos: tag.pos,
    ...(tag.group ? { group: tag.group } : {}),
    ...(tag.irregular ? { irregular: true } : {}),
    ...(tag.note ? { note: tag.note } : {}),
  };
}

async function main() {
  const rawYaml = await loadYaml();
  const parsed = yaml.load(rawYaml);
  const posMap = await loadPos();

  const words = [];
  for (let n = FIRST_LESSON; n <= LAST_LESSON; n++) {
    const key = `lesson-${String(n).padStart(2, "0")}`;
    const entries = parsed[key];
    if (!Array.isArray(entries)) {
      console.warn(`Missing lesson: ${key}`);
      continue;
    }
    for (const entry of entries) {
      words.push(slim(entry, posMap));
    }
  }

  const counts = words.reduce((acc, w) => {
    acc[w.pos] = (acc[w.pos] || 0) + 1;
    return acc;
  }, {});
  await fs.mkdir(path.dirname(OUT_PATH), { recursive: true });
  await fs.writeFile(OUT_PATH, JSON.stringify(words, null, 2), "utf8");
  console.log(`Wrote ${words.length} entries → ${path.relative(ROOT, OUT_PATH)}`);
  console.log("  by pos:", counts);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
