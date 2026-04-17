import { SANS } from "../lib/theme.js";

export default function SearchBox({ t, value, onChange, placeholder }) {
  return (
    <div style={{ maxWidth: "680px", margin: "0 auto 20px", padding: "0 16px" }}>
      <div style={{ position: "relative" }}>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          style={{
            width: "100%",
            padding: "12px 16px 12px 40px",
            fontSize: "15px",
            border: `1.5px solid ${t.inputBorder}`,
            borderRadius: "8px",
            fontFamily: SANS,
            background: t.inputBg,
            color: t.text,
            outline: "none",
            boxSizing: "border-box",
            transition: "border-color 0.2s, background 0.3s",
          }}
        />
        <span
          style={{
            position: "absolute",
            left: "14px",
            top: "50%",
            transform: "translateY(-50%)",
            fontSize: "16px",
            color: t.textPlaceholder,
          }}
        >
          🔍
        </span>
      </div>
    </div>
  );
}
