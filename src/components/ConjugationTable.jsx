import { Fragment } from "react";
import { SANS } from "../lib/theme.js";

const VERB_ROWS = [
  { label: "Present",    plain: "dict",    polite: "polite.present" },
  { label: "Negative",   plain: "nai",     polite: "polite.neg" },
  { label: "Past",       plain: "ta",      polite: "polite.past" },
  { label: "Past Neg",   plain: "naiPast", polite: "polite.pastNeg" },
];

const VERB_EXTRA = [
  { label: "て-form",       key: "te" },
  { label: "〜たい (want)", key: "tai" },
];

const ADJ_ROWS = [
  { label: "Present",  plain: "present", polite: "politePresent" },
  { label: "Negative", plain: "neg",     polite: "politeNeg" },
  { label: "Past",     plain: "past",    polite: "politePast" },
  { label: "Past Neg", plain: "pastNeg", polite: "politePastNeg" },
];

const ADJ_EXTRA = [
  { label: "て-form", key: "te" },
  { label: "Adverb",  key: "adverb" },
];

function dig(obj, path) {
  return path.split(".").reduce((o, k) => (o == null ? o : o[k]), obj);
}

export default function ConjugationTable({ t, color, conjugation }) {
  if (!conjugation) return null;
  const { kind, forms, group, note } = conjugation;

  const isVerb = kind === "verb";
  const rows = isVerb ? VERB_ROWS : ADJ_ROWS;
  const extras = isVerb ? VERB_EXTRA : ADJ_EXTRA;
  const kindLabel = isVerb
    ? `Verb · Group ${group === 3 ? "III" : group === 2 ? "II" : "I"}`
    : kind === "i-adj"
      ? "い-Adjective"
      : "な-Adjective";

  return (
    <div
      style={{
        marginTop: "14px",
        border: `1px solid ${t.border}`,
        borderTop: `3px solid ${color}`,
        borderRadius: "8px",
        overflow: "hidden",
        background: t.bg,
        fontFamily: SANS,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "8px 14px",
          background: `${color}${t.formationBgAlpha}`,
          borderBottom: `1px solid ${t.borderLight}`,
        }}
      >
        <div
          style={{
            fontSize: "11px",
            textTransform: "uppercase",
            letterSpacing: "1.5px",
            color: t.textMuted,
            fontWeight: 700,
          }}
        >
          Conjugation
        </div>
        <div style={{ fontSize: "11px", color, fontWeight: 700 }}>{kindLabel}</div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(85px, auto) 1fr 1fr",
          fontSize: "13px",
        }}
      >
        <div style={headerCell(t)}></div>
        <div style={{ ...headerCell(t), textAlign: "center" }}>Plain</div>
        <div style={{ ...headerCell(t), textAlign: "center" }}>Polite</div>
        {rows.map((r, i) => (
          <Fragment key={r.label}>
            <div style={{ ...cell(t, i === rows.length - 1), color: t.textMuted, fontWeight: 600 }}>{r.label}</div>
            <div style={{ ...cell(t, i === rows.length - 1), textAlign: "center", color: t.text }}>
              {dig(forms, r.plain) || "—"}
            </div>
            <div style={{ ...cell(t, i === rows.length - 1), textAlign: "center", color: t.text }}>
              {dig(forms, r.polite) || "—"}
            </div>
          </Fragment>
        ))}
      </div>

      {extras.length > 0 && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(85px, auto) 1fr",
            borderTop: `1px dashed ${t.borderDash}`,
            fontSize: "13px",
          }}
        >
          {extras.map((e, i) => (
            <Fragment key={e.label}>
              <div style={{ ...cell(t, i === extras.length - 1), color: t.textMuted, fontWeight: 600 }}>{e.label}</div>
              <div style={{ ...cell(t, i === extras.length - 1), color: t.text }}>{forms[e.key] || "—"}</div>
            </Fragment>
          ))}
        </div>
      )}

      {note && (
        <div
          style={{
            padding: "9px 14px",
            background: t.bgTertiary,
            borderTop: `1px solid ${t.borderLight}`,
            fontSize: "12px",
            color: t.textSecondary,
            lineHeight: 1.5,
          }}
        >
          <span style={{ fontWeight: 700, marginRight: "4px" }}>💡</span> {note}
        </div>
      )}
    </div>
  );
}

function headerCell(t) {
  return {
    padding: "7px 12px",
    fontSize: "11px",
    textTransform: "uppercase",
    letterSpacing: "1px",
    color: t.textMuted,
    fontWeight: 700,
    background: t.bgSecondary,
    borderBottom: `1px solid ${t.borderLight}`,
  };
}

function cell(t, isLast) {
  return {
    padding: "8px 12px",
    borderBottom: isLast ? "none" : `1px dashed ${t.borderDash}`,
  };
}
