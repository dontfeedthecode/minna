import { useState } from "react";
import { SANS } from "../lib/theme.js";

// A single reference card inside the Counters view. Handles three shapes:
//   - "counter"   → 1-10 reading table for a counter (default)
//   - "table"     → flat reference table (basics, question words, days, etc.)
//   - "pattern"   → grammar-style card with formation + examples
export default function CounterCard({ card, t, color }) {
  const [open, setOpen] = useState(false);
  const type = card.type || "counter";

  return (
    <div
      style={{
        marginBottom: "10px",
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
          padding: "12px 16px",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          gap: "12px",
          fontFamily: SANS,
        }}
      >
        <div style={{ flex: 1, minWidth: 0 }}>
          <div
            style={{
              fontSize: "clamp(16px, 2.8vw, 19px)",
              fontWeight: 700,
              color,
              lineHeight: 1.3,
            }}
          >
            {card.label}
          </div>
          <div
            style={{
              fontSize: "13px",
              color: t.textSecondary,
              marginTop: "2px",
            }}
          >
            {card.labelEn}
          </div>
        </div>
        {card.question && (
          <div
            style={{
              fontSize: "11px",
              color: t.textMuted,
              fontWeight: 600,
              textAlign: "right",
              flexShrink: 0,
            }}
          >
            ? {card.question.jp}
          </div>
        )}
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
        <div style={{ padding: "0 16px 14px", borderTop: `1px solid ${t.borderLight}` }}>
          {type === "counter" && (
            <ReadingGrid rows={card.readings} t={t} color={color} showNumber />
          )}

          {type === "table" && (
            <ReadingGrid rows={card.rows} t={t} color={color} />
          )}

          {type === "pattern" && (
            <PatternBody card={card} t={t} color={color} />
          )}

          {card.example && type === "counter" && (
            <ExampleBlock example={card.example} t={t} color={color} />
          )}

          {card.note && <Note t={t} text={card.note} />}
        </div>
      )}
    </div>
  );
}

function ReadingGrid({ rows, t, color, showNumber }) {
  // Leftmost column holds either the number (for counters) or the row label
  // (for reference tables like days-of-week). Numbers shown as "?" render as
  // muted, not monospaced.
  return (
    <div
      style={{
        marginTop: "12px",
        border: `1px solid ${t.border}`,
        borderRadius: "6px",
        overflow: "hidden",
      }}
    >
      {rows.map((r, i) => {
        const leadIsNumber = showNumber;
        const lead = leadIsNumber ? r.n : r.label;
        return (
          <div
            key={`${r.n}-${i}`}
            style={{
              display: "grid",
              gridTemplateColumns: leadIsNumber
                ? "44px 1fr auto"
                : "minmax(90px, max-content) 1fr auto",
              columnGap: "10px",
              alignItems: "baseline",
              padding: "8px 12px",
              borderBottom: i < rows.length - 1 ? `1px dashed ${t.borderDash}` : "none",
              background: r.special ? `${color}${t.formationBgAlpha}` : "transparent",
            }}
          >
            <div
              style={{
                fontFamily: leadIsNumber ? "monospace" : "inherit",
                fontSize: leadIsNumber ? "13px" : "12px",
                color: r.special && leadIsNumber ? color : t.textMuted,
                fontWeight: leadIsNumber && r.special ? 700 : 500,
              }}
            >
              {lead}
            </div>
            <div style={{ minWidth: 0 }}>
              <div
                style={{
                  fontSize: "15px",
                  color: r.special ? color : t.text,
                  fontWeight: r.special ? 700 : 500,
                  lineHeight: 1.3,
                }}
              >
                {r.kana}
              </div>
              {leadIsNumber && r.label && (
                <div style={{ fontSize: "11px", color: t.textMuted, marginTop: "1px" }}>
                  {r.label}
                </div>
              )}
            </div>
            <div
              style={{
                fontSize: "12px",
                color: t.textMuted,
                fontStyle: "italic",
                textAlign: "right",
                opacity: t.romajiOpacity,
                whiteSpace: "nowrap",
              }}
            >
              {r.romaji}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function PatternBody({ card, t, color }) {
  return (
    <div>
      {card.formation && (
        <div
          style={{
            margin: "12px 0 14px",
            padding: "10px 14px",
            background: `${color}${t.formationBgAlpha}`,
            borderLeft: `3px solid ${color}`,
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
          <div style={{ fontSize: "14px", color: t.text, fontWeight: 600 }}>{card.formation}</div>
        </div>
      )}

      {card.examples?.map((ex, ei) => (
        <div
          key={ei}
          style={{
            marginBottom: ei < card.examples.length - 1 ? "12px" : "0",
            paddingBottom: ei < card.examples.length - 1 ? "12px" : "0",
            borderBottom: ei < card.examples.length - 1 ? `1px dashed ${t.borderDash}` : "none",
          }}
        >
          <div
            style={{
              fontSize: "clamp(15px, 2.8vw, 17px)",
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
              color,
              fontStyle: "italic",
              marginBottom: "2px",
              opacity: t.romajiOpacity,
            }}
          >
            {ex.rm}
          </div>
          <div style={{ fontSize: "13px", color: t.textSecondary }}>{ex.en}</div>
        </div>
      ))}
    </div>
  );
}

function ExampleBlock({ example, t, color }) {
  return (
    <div
      style={{
        marginTop: "12px",
        padding: "10px 12px",
        borderLeft: `3px solid ${color}`,
        background: `${color}${t.formationBgAlpha}`,
        borderRadius: "0 6px 6px 0",
      }}
    >
      <div style={{ fontSize: "15px", color: t.text, fontWeight: 500, lineHeight: 1.5 }}>
        {example.jp}
      </div>
      {example.rm && (
        <div
          style={{
            fontSize: "12px",
            color,
            fontStyle: "italic",
            opacity: t.romajiOpacity,
            marginTop: "2px",
          }}
        >
          {example.rm}
        </div>
      )}
      <div style={{ fontSize: "12px", color: t.textSecondary, marginTop: "2px" }}>{example.en}</div>
    </div>
  );
}

function Note({ t, text }) {
  return (
    <div
      style={{
        marginTop: "12px",
        padding: "10px 12px",
        background: t.bgTertiary,
        borderRadius: "6px",
        fontSize: "13px",
        color: t.textSecondary,
        lineHeight: 1.6,
      }}
    >
      <span style={{ fontWeight: 700, marginRight: "4px" }}>💡</span> {text}
    </div>
  );
}
