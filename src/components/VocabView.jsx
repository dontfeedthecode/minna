import { useMemo } from "react";
import vocab from "../data/vocab.json";
import { lessonColor } from "../lib/theme.js";
import VocabCard from "./VocabCard.jsx";

const collator = new Intl.Collator("en", { sensitivity: "base" });
const sortByEn = (a, b) => collator.compare(a.en || "", b.en || "");

// Module-load precomputation: do the static work once so keystrokes stay
// cheap. We precompute
//   - lowercased en / romaji per entry (avoids ~2400 toLowerCase per keystroke)
//   - the flat A→Z list for the "All" no-search baseline
//   - a Map of lesson → pre-sorted words for the grouped no-search baseline
const INDEXED = vocab.map((w) => ({
  ...w,
  _en: (w.en || "").toLowerCase(),
  _rm: (w.romaji || "").toLowerCase(),
}));
const ALL_SORTED = [...INDEXED].sort(sortByEn);
const BY_LESSON_SORTED = (() => {
  const map = new Map();
  for (const w of ALL_SORTED) {
    if (!map.has(w.lesson)) map.set(w.lesson, []);
    map.get(w.lesson).push(w);
  }
  return map;
})();

export default function VocabView({ t, dark, activeLesson, searchQuery }) {
  const flatMode = activeLesson === null;

  // Hot path: only walk + re-sort when the user is actually filtering.
  const filtered = useMemo(() => {
    const qRaw = searchQuery.trim();
    if (!qRaw && activeLesson === null) return ALL_SORTED;
    if (!qRaw) return BY_LESSON_SORTED.get(activeLesson) || [];
    const q = qRaw.toLowerCase();
    return INDEXED.filter((w) => {
      if (activeLesson !== null && w.lesson !== activeLesson) return false;
      return (
        w._en.includes(q) ||
        w._rm.includes(q) ||
        (w.kana || "").includes(qRaw) ||
        (w.kanji || "").includes(qRaw)
      );
    });
  }, [activeLesson, searchQuery]);

  const flat = useMemo(() => {
    if (!flatMode) return [];
    // Skip the re-sort when we're handing back the baseline already in order.
    return searchQuery.trim() ? [...filtered].sort(sortByEn) : filtered;
  }, [flatMode, filtered, searchQuery]);

  const grouped = useMemo(() => {
    if (flatMode) return [];
    const sorted = searchQuery.trim() ? [...filtered].sort(sortByEn) : filtered;
    return sorted.length > 0 ? [{ lesson: activeLesson, words: sorted }] : [];
  }, [flatMode, filtered, searchQuery, activeLesson]);

  const empty = flatMode ? flat.length === 0 : grouped.length === 0;

  return (
    <div style={{ maxWidth: "680px", margin: "0 auto", padding: "0 16px 60px" }}>
      {flatMode && flat.length > 0 && (
        <div
          style={{
            fontSize: "12px",
            color: t.textMuted,
            marginBottom: "12px",
            padding: "0 4px",
          }}
        >
          {flat.length} words · sorted A→Z
        </div>
      )}

      {flatMode &&
        flat.map((w) => (
          <VocabCard
            key={`${w.lesson}.${w.idx}`}
            word={w}
            t={t}
            color={lessonColor(w.lesson, dark)}
            showLessonChip
          />
        ))}

      {!flatMode &&
        grouped.map(({ lesson, words }) => {
          const c = lessonColor(lesson, dark);
          return (
            <div key={lesson} style={{ marginBottom: "32px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  marginBottom: "14px",
                  paddingBottom: "10px",
                  borderBottom: `2px solid ${c}33`,
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: c,
                    color: dark ? "#111318" : "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                    fontSize: "15px",
                    flexShrink: 0,
                  }}
                >
                  {lesson}
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "clamp(16px, 3vw, 20px)",
                      fontWeight: 700,
                      color: t.text,
                      lineHeight: 1.2,
                    }}
                  >
                    Lesson {lesson} vocabulary
                  </div>
                  <div style={{ fontSize: "12px", color: t.textMuted, fontWeight: 300 }}>
                    {words.length} {words.length === 1 ? "word" : "words"}
                  </div>
                </div>
              </div>

              {words.map((w) => (
                <VocabCard key={`${w.lesson}.${w.idx}`} word={w} t={t} color={c} />
              ))}
            </div>
          );
        })}

      {empty && (
        <div style={{ textAlign: "center", padding: "40px 20px", color: t.textPlaceholder }}>
          <div style={{ fontSize: "32px", marginBottom: "8px" }}>🔍</div>
          <div>No words match your search.</div>
        </div>
      )}

      <div
        style={{
          marginTop: "40px",
          padding: "12px 16px",
          fontSize: "11px",
          color: t.textMuted,
          textAlign: "center",
          lineHeight: 1.5,
        }}
      >
        Vocabulary data from{" "}
        <a
          href="https://github.com/vitto4/MinnaNoDS"
          target="_blank"
          rel="noreferrer"
          style={{ color: t.textMuted, textDecoration: "underline" }}
        >
          vitto4/MinnaNoDS
        </a>{" "}
        · © 3A Corporation · For personal study.
      </div>
    </div>
  );
}
