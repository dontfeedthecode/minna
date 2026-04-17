import { SANS, lessonColor } from "../lib/theme.js";

export default function LessonTabs({ t, dark, lessons, activeLesson, onChange }) {
  const allActive = activeLesson === null;
  const allColor = lessonColor(10, dark);

  return (
    <div style={{ maxWidth: "680px", margin: "0 auto 28px", padding: "0 16px" }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", justifyContent: "center" }}>
        <button
          onClick={() => onChange(null)}
          style={{
            padding: "6px 14px",
            borderRadius: "20px",
            border: allActive ? `2px solid ${allColor}` : `1.5px solid ${t.tabBorder}`,
            background: allActive ? allColor : "transparent",
            color: allActive ? (dark ? "#111318" : "#fff") : t.tabText,
            fontFamily: SANS,
            fontSize: "13px",
            fontWeight: 600,
            cursor: "pointer",
            transition: "all 0.2s",
          }}
        >
          All
        </button>
        {lessons.map((num) => {
          const active = activeLesson === num;
          const c = lessonColor(num, dark);
          return (
            <button
              key={num}
              onClick={() => onChange(active ? null : num)}
              style={{
                padding: "6px 14px",
                borderRadius: "20px",
                border: active ? `2px solid ${c}` : `1.5px solid ${t.tabBorder}`,
                background: active ? c : "transparent",
                color: active ? (dark ? "#111318" : "#fff") : t.tabText,
                fontFamily: SANS,
                fontSize: "13px",
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              L{num}
            </button>
          );
        })}
      </div>
    </div>
  );
}
