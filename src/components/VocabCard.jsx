import { useState } from "react";
import { SANS } from "../lib/theme.js";
import { conjugate } from "../lib/conjugate.js";
import ConjugationTable from "./ConjugationTable.jsx";

const POS_LABEL = {
  verb: "verb",
  "i-adj": "い-adj",
  "na-adj": "な-adj",
  noun: "noun",
  adverb: "adverb",
  phrase: "phrase",
  other: "—",
};

// Strip bracketed context ("います［子どもが～］" → "います") for display.
function cleanDisplay(s) {
  return (s || "").replace(/[［\[].*?[］\]]/g, "").trim();
}

// Extract context note from kana if brackets were present. The bare "な"
// marker on な-adjectives isn't context — it's structural — so drop it.
function extractContext(s) {
  const m = (s || "").match(/[［\[](.+?)[］\]]/);
  if (!m) return null;
  const inner = m[1].trim();
  if (inner === "な") return null;
  return inner;
}

export default function VocabCard({ word, t, color, showLessonChip = false }) {
  const [open, setOpen] = useState(false);

  const kanaDisplay = cleanDisplay(word.kana);
  const context = extractContext(word.kana);
  const kanjiDisplay = cleanDisplay(word.kanji);
  const hasKanji = kanjiDisplay && kanjiDisplay.length > 0;

  // Kana is the primary headline; kanji (if any) is shown secondary.
  const headline = kanaDisplay;
  const reading = hasKanji ? kanjiDisplay : null;

  const conjugation = conjugate(word);

  return (
    <div
      style={{
        marginBottom: "8px",
        border: `1px solid ${t.border}`,
        borderRadius: "10px",
        overflow: "hidden",
        background: t.bgSecondary,
        boxShadow: t.shadow,
      }}
    >
      <button
        onClick={() => setOpen((o) => !o)}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px 14px",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          gap: "12px",
          fontFamily: SANS,
        }}
      >
        <div style={{ display: "flex", alignItems: "baseline", gap: "12px", minWidth: 0, flex: 1 }}>
          <div
            style={{
              fontSize: "clamp(16px, 2.6vw, 19px)",
              fontWeight: 600,
              color: t.text,
              lineHeight: 1.3,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              flexShrink: 0,
            }}
          >
            {headline}
          </div>
          <div
            style={{
              fontSize: "13px",
              color: t.textSecondary,
              fontWeight: 400,
              lineHeight: 1.3,
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: 1,
              WebkitBoxOrient: "vertical",
              flex: 1,
              minWidth: 0,
            }}
          >
            {word.en}
          </div>
          {showLessonChip && (
            <div
              style={{
                fontSize: "10px",
                letterSpacing: "0.5px",
                fontWeight: 700,
                color,
                background: `${color}22`,
                padding: "2px 7px",
                borderRadius: "10px",
                whiteSpace: "nowrap",
                marginLeft: reading ? 0 : "auto",
                flexShrink: 0,
              }}
            >
              L{word.lesson}
            </div>
          )}
          {reading && (
            <div
              style={{
                fontSize: "12px",
                color: t.textMuted,
                fontWeight: 400,
                whiteSpace: "nowrap",
                marginLeft: showLessonChip ? 0 : "auto",
                flexShrink: 0,
              }}
            >
              {reading}
            </div>
          )}
        </div>
        <span
          style={{
            fontSize: "16px",
            color: t.textPlaceholder,
            transition: "transform 0.2s",
            transform: open ? "rotate(180deg)" : "rotate(0)",
            flexShrink: 0,
          }}
        >
          ▾
        </span>
      </button>

      {open && (
        <div
          style={{
            padding: "0 14px 14px",
            borderTop: `1px solid ${t.borderLight}`,
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
              alignItems: "center",
              margin: "12px 0 10px",
            }}
          >
            <span
              style={{
                fontSize: "11px",
                textTransform: "uppercase",
                letterSpacing: "1px",
                padding: "2px 8px",
                borderRadius: "12px",
                background: `${color}22`,
                color,
                fontWeight: 700,
              }}
            >
              {POS_LABEL[word.pos] || word.pos}
              {word.pos === "verb" && word.group
                ? ` · G${word.group === 3 ? "III" : word.group === 2 ? "II" : "I"}`
                : ""}
            </span>
            <span
              style={{
                fontSize: "11px",
                color: t.textMuted,
                fontFamily: "monospace",
              }}
            >
              L{word.lesson}.{word.idx}
            </span>
            <span
              style={{
                fontSize: "13px",
                color,
                fontStyle: "italic",
                opacity: t.romajiOpacity,
              }}
            >
              {word.romaji}
            </span>
          </div>

          <div
            style={{
              fontSize: "14px",
              color: t.text,
              lineHeight: 1.5,
              marginBottom: context ? "6px" : "4px",
            }}
          >
            {word.en}
          </div>

          {context && (
            <div
              style={{
                fontSize: "12px",
                color: t.textMuted,
                fontStyle: "italic",
              }}
            >
              context: {context}
            </div>
          )}

          {conjugation && <ConjugationTable t={t} color={color} conjugation={conjugation} />}

          {!conjugation && word.note && (
            <div
              style={{
                marginTop: "10px",
                padding: "8px 12px",
                background: t.bgTertiary,
                borderRadius: "6px",
                fontSize: "12px",
                color: t.textSecondary,
                lineHeight: 1.5,
              }}
            >
              <span style={{ fontWeight: 700, marginRight: "4px" }}>💡</span> {word.note}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
