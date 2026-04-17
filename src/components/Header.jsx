import { SANS } from "../lib/theme.js";

export default function Header({ t, dark, onToggleDark, mode, onModeChange }) {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "40px 20px 20px",
        borderBottom: `3px double ${t.headerBorder}`,
        marginBottom: "24px",
        position: "relative",
      }}
    >
      <button
        onClick={onToggleDark}
        style={{
          position: "absolute",
          top: "16px",
          right: "16px",
          width: "44px",
          height: "44px",
          borderRadius: "50%",
          border: `1.5px solid ${t.inputBorder}`,
          background: t.toggleBg,
          color: t.toggleText,
          fontSize: "20px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "all 0.3s",
          fontFamily: SANS,
        }}
        title={dark ? "Switch to light mode" : "Switch to dark mode"}
      >
        {dark ? "☀️" : "🌙"}
      </button>

      <div
        style={{
          fontSize: "13px",
          letterSpacing: "6px",
          textTransform: "uppercase",
          color: t.textMuted,
          fontWeight: 300,
          marginBottom: "8px",
        }}
      >
        みんなの にほんご
      </div>
      <h1
        style={{
          fontSize: "clamp(28px, 5vw, 42px)",
          fontWeight: 700,
          margin: "0 0 4px",
          color: t.text,
          lineHeight: 1.2,
        }}
      >
        ぶんぽう ＆ ごい
      </h1>
      <div
        style={{
          fontSize: "clamp(14px, 2.5vw, 18px)",
          color: t.textSecondary,
          fontWeight: 300,
          marginBottom: "20px",
        }}
      >
        Grammar &amp; Vocabulary — Lessons 1–25
      </div>

      {/* Mode toggle */}
      <div
        role="tablist"
        aria-label="View mode"
        style={{
          display: "inline-flex",
          border: `1.5px solid ${t.inputBorder}`,
          borderRadius: "999px",
          background: t.inputBg,
          padding: "3px",
        }}
      >
        {[
          { id: "grammar", label: "Grammar" },
          { id: "vocab", label: "Vocabulary" },
          { id: "counters", label: "Counters" },
        ].map((m) => {
          const active = mode === m.id;
          return (
            <button
              key={m.id}
              role="tab"
              aria-selected={active}
              onClick={() => onModeChange(m.id)}
              style={{
                padding: "8px 18px",
                borderRadius: "999px",
                border: "none",
                background: active ? t.text : "transparent",
                color: active ? t.bg : t.textSecondary,
                fontFamily: SANS,
                fontSize: "13px",
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.2s",
                minWidth: "90px",
              }}
            >
              {m.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
