import { useMemo, useState } from "react";
import { LESSONS } from "../data/grammar.js";
import { SANS, lessonColor } from "../lib/theme.js";

export default function GrammarView({ t, dark, activeLesson, searchQuery }) {
  const [expandedCards, setExpandedCards] = useState({});

  const toggleCard = (lessonNum, idx) => {
    const key = `${lessonNum}-${idx}`;
    setExpandedCards((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // Single pass: each grammar point is tested once. Result is
  //   [{ lesson, grammar: [...matchingPoints] }, ...]
  // If the lesson title matches the query, all its points are kept even
  // when the individual point text doesn't match.
  const filteredLessons = useMemo(() => {
    const qRaw = searchQuery.trim();
    const q = qRaw.toLowerCase();
    const hasQuery = qRaw.length > 0;

    const matchesPoint = (g) =>
      g.structure.toLowerCase().includes(q) ||
      g.meaning.toLowerCase().includes(q) ||
      (g.note && g.note.toLowerCase().includes(q)) ||
      g.examples.some(
        (e) =>
          e.jp.includes(qRaw) ||
          e.rm.toLowerCase().includes(q) ||
          e.en.toLowerCase().includes(q)
      );

    const result = [];
    for (const lesson of LESSONS) {
      if (activeLesson !== null && lesson.num !== activeLesson) continue;
      if (!hasQuery) {
        result.push({ lesson, grammar: lesson.grammar });
        continue;
      }
      const titleMatches =
        lesson.title.includes(qRaw) || lesson.titleEn.toLowerCase().includes(q);
      const matchedPoints = titleMatches
        ? lesson.grammar
        : lesson.grammar.filter(matchesPoint);
      if (matchedPoints.length > 0) {
        result.push({ lesson, grammar: matchedPoints });
      }
    }
    return result;
  }, [activeLesson, searchQuery]);

  return (
    <div style={{ maxWidth: "680px", margin: "0 auto", padding: "0 16px 60px" }}>
      {filteredLessons.map(({ lesson, grammar: filteredGrammar }) => {
        const c = lessonColor(lesson.num, dark);

        return (
          <div key={lesson.num} style={{ marginBottom: "36px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                marginBottom: "16px",
                paddingBottom: "10px",
                borderBottom: `2px solid ${c}33`,
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
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
                {lesson.num}
              </div>
              <div>
                <div style={{ fontSize: "clamp(18px, 3.5vw, 24px)", fontWeight: 700, color: t.text, lineHeight: 1.2 }}>
                  {lesson.title}
                </div>
                <div style={{ fontSize: "13px", color: t.textMuted, fontWeight: 300 }}>{lesson.titleEn}</div>
              </div>
            </div>

            {filteredGrammar.map((g, idx) => {
              const key = `${lesson.num}-${idx}`;
              const isExpanded = expandedCards[key] !== false;

              return (
                <div
                  key={idx}
                  style={{
                    marginBottom: "12px",
                    border: `1px solid ${t.border}`,
                    borderRadius: "10px",
                    overflow: "hidden",
                    background: t.bgSecondary,
                    boxShadow: t.shadow,
                  }}
                >
                  <button
                    onClick={() => toggleCard(lesson.num, idx)}
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "14px 16px",
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                      textAlign: "left",
                      gap: "12px",
                      fontFamily: SANS,
                    }}
                  >
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: "clamp(16px, 3vw, 20px)", fontWeight: 700, color: c, lineHeight: 1.3 }}>
                        {g.structure}
                      </div>
                      <div style={{ fontSize: "13px", color: t.textSecondary, marginTop: "2px", fontWeight: 400 }}>
                        {g.meaning}
                      </div>
                    </div>
                    <span
                      style={{
                        fontSize: "18px",
                        color: t.textPlaceholder,
                        transition: "transform 0.2s",
                        transform: isExpanded ? "rotate(180deg)" : "rotate(0)",
                      }}
                    >
                      ▾
                    </span>
                  </button>

                  {isExpanded && (
                    <div style={{ padding: "0 16px 16px", borderTop: `1px solid ${t.borderLight}` }}>
                      <div
                        style={{
                          margin: "12px 0 14px",
                          padding: "10px 14px",
                          background: `${c}${t.formationBgAlpha}`,
                          borderLeft: `3px solid ${c}`,
                          borderRadius: "0 6px 6px 0",
                        }}
                      >
                        <div
                          style={{
                            fontSize: "11px",
                            textTransform: "uppercase",
                            letterSpacing: "1.5px",
                            color: t.textMuted,
                            fontWeight: 600,
                            marginBottom: "4px",
                          }}
                        >
                          Formation
                        </div>
                        <div style={{ fontSize: "14px", color: t.text, fontWeight: 600 }}>{g.formation}</div>
                      </div>

                      {g.examples.map((ex, ei) => (
                        <div
                          key={ei}
                          style={{
                            marginBottom: ei < g.examples.length - 1 ? "12px" : "0",
                            paddingBottom: ei < g.examples.length - 1 ? "12px" : "0",
                            borderBottom: ei < g.examples.length - 1 ? `1px dashed ${t.borderDash}` : "none",
                          }}
                        >
                          <div
                            style={{
                              fontSize: "clamp(15px, 2.8vw, 18px)",
                              color: t.text,
                              marginBottom: "3px",
                              lineHeight: 1.5,
                              fontWeight: 500,
                            }}
                          >
                            {ex.jp}
                          </div>
                          <div
                            style={{
                              fontSize: "12px",
                              color: c,
                              fontStyle: "italic",
                              marginBottom: "2px",
                              opacity: t.romajiOpacity,
                              fontWeight: 400,
                            }}
                          >
                            {ex.rm}
                          </div>
                          <div style={{ fontSize: "13px", color: t.textSecondary, fontWeight: 400 }}>{ex.en}</div>
                        </div>
                      ))}

                      {g.note && (
                        <div
                          style={{
                            marginTop: "12px",
                            padding: "10px 12px",
                            background: t.bgTertiary,
                            borderRadius: "6px",
                            fontSize: "13px",
                            color: t.textSecondary,
                            lineHeight: 1.6,
                            fontWeight: 400,
                          }}
                        >
                          <span style={{ fontWeight: 700, marginRight: "4px" }}>💡</span> {g.note}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        );
      })}

      {filteredLessons.length === 0 && (
        <div style={{ textAlign: "center", padding: "40px 20px", color: t.textPlaceholder }}>
          <div style={{ fontSize: "32px", marginBottom: "8px" }}>🔍</div>
          <div>No grammar points match your search.</div>
        </div>
      )}
    </div>
  );
}
