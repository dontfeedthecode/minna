import { useMemo } from "react";
import { COUNTER_GROUPS } from "../data/counters.js";
import { lessonColor } from "../lib/theme.js";
import CounterCard from "./CounterCard.jsx";

// Assign each group a lesson color so the view visually echoes the rest of
// the app. Indices correspond to L10, L12, L14, L16, L18, L20.
const GROUP_COLOR_LESSON = [10, 12, 14, 16, 18, 20, 11];

function cardMatches(card, qLower, qRaw) {
  if (
    card.label?.includes(qRaw) ||
    (card.labelEn || "").toLowerCase().includes(qLower) ||
    (card.note || "").toLowerCase().includes(qLower)
  ) {
    return true;
  }
  if (card.question) {
    if (
      (card.question.jp || "").includes(qRaw) ||
      (card.question.en || "").toLowerCase().includes(qLower)
    )
      return true;
  }
  if (Array.isArray(card.readings)) {
    for (const r of card.readings) {
      if (
        (r.kana || "").includes(qRaw) ||
        (r.romaji || "").toLowerCase().includes(qLower) ||
        (r.label || "").toLowerCase().includes(qLower)
      )
        return true;
    }
  }
  if (Array.isArray(card.rows)) {
    for (const r of card.rows) {
      if (
        (r.kana || "").includes(qRaw) ||
        (r.romaji || "").toLowerCase().includes(qLower) ||
        (r.label || "").toLowerCase().includes(qLower)
      )
        return true;
    }
  }
  if (Array.isArray(card.examples)) {
    for (const ex of card.examples) {
      if (
        (ex.jp || "").includes(qRaw) ||
        (ex.rm || "").toLowerCase().includes(qLower) ||
        (ex.en || "").toLowerCase().includes(qLower)
      )
        return true;
    }
  }
  if (card.example) {
    if (
      (card.example.jp || "").includes(qRaw) ||
      (card.example.rm || "").toLowerCase().includes(qLower) ||
      (card.example.en || "").toLowerCase().includes(qLower)
    )
      return true;
  }
  return false;
}

export default function CountersView({ t, dark, searchQuery }) {
  const groups = useMemo(() => {
    const qRaw = searchQuery.trim();
    const qLower = qRaw.toLowerCase();
    if (!qRaw) return COUNTER_GROUPS;
    return COUNTER_GROUPS.map((g) => ({
      ...g,
      cards: g.cards.filter((c) => cardMatches(c, qLower, qRaw)),
    })).filter((g) => g.cards.length > 0);
  }, [searchQuery]);

  return (
    <div style={{ maxWidth: "680px", margin: "0 auto", padding: "0 16px 60px" }}>
      {groups.map((group, gi) => {
        const lessonForColor = GROUP_COLOR_LESSON[gi % GROUP_COLOR_LESSON.length];
        const c = lessonColor(lessonForColor, dark);

        return (
          <div key={group.id} style={{ marginBottom: "36px" }}>
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
                  fontSize: "18px",
                  flexShrink: 0,
                }}
              >
                ?
              </div>
              <div>
                <div
                  style={{
                    fontSize: "clamp(18px, 3.5vw, 22px)",
                    fontWeight: 700,
                    color: t.text,
                    lineHeight: 1.2,
                  }}
                >
                  {group.title}
                </div>
                <div style={{ fontSize: "13px", color: t.textMuted, fontWeight: 300 }}>
                  {group.titleEn}
                </div>
              </div>
            </div>

            {group.cards.map((card) => (
              <CounterCard key={card.id} card={card} t={t} color={c} />
            ))}
          </div>
        );
      })}

      {groups.length === 0 && (
        <div style={{ textAlign: "center", padding: "40px 20px", color: t.textPlaceholder }}>
          <div style={{ fontSize: "32px", marginBottom: "8px" }}>🔍</div>
          <div>No counters match your search.</div>
        </div>
      )}
    </div>
  );
}
