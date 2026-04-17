export const themes = {
  light: {
    bg: "#ffffff",
    bgSecondary: "#fafafa",
    bgTertiary: "#f5f5f0",
    text: "#1a1a1a",
    textSecondary: "#555",
    textMuted: "#777",
    textPlaceholder: "#999",
    border: "#e0e0e0",
    borderLight: "#eee",
    borderDash: "#e8e8e8",
    inputBg: "#fafafa",
    inputBorder: "#ccc",
    tabBorder: "#bbb",
    tabText: "#555",
    shadow: "0 1px 3px rgba(0,0,0,0.04)",
    headerBorder: "#1a1a1a",
    toggleBg: "#f0f0f0",
    toggleText: "#333",
    formationBgAlpha: "0a",
    romajiOpacity: 0.8,
  },
  dark: {
    bg: "#111318",
    bgSecondary: "#1a1d24",
    bgTertiary: "#22262e",
    text: "#e8e8ec",
    textSecondary: "#a0a4b0",
    textMuted: "#888da0",
    textPlaceholder: "#666b7a",
    border: "#2a2e38",
    borderLight: "#252830",
    borderDash: "#2a2e38",
    inputBg: "#1a1d24",
    inputBorder: "#333842",
    tabBorder: "#3a3f4a",
    tabText: "#8a8fa0",
    shadow: "0 1px 4px rgba(0,0,0,0.3)",
    headerBorder: "#555a68",
    toggleBg: "#2a2e38",
    toggleText: "#e8e8ec",
    formationBgAlpha: "18",
    romajiOpacity: 0.9,
  },
};

export const SANS = "'Noto Sans JP', sans-serif";

// Lesson colors — source of truth shared between Grammar and Vocab views.
// L1-L9 use lighter / warmer hues (beginner lessons), L10-L20 keep the
// original palette, L21-L25 use richer jewel-tones (advanced).
export const LESSON_COLORS = {
  1:  { light: "#D84315", dark: "#FFAB91" }, // deep orange
  2:  { light: "#F57C00", dark: "#FFCC80" }, // amber
  3:  { light: "#9E9D24", dark: "#DCE775" }, // lime-olive
  4:  { light: "#558B2F", dark: "#AED581" }, // light green
  5:  { light: "#00897B", dark: "#80CBC4" }, // teal
  6:  { light: "#0277BD", dark: "#81D4FA" }, // light blue
  7:  { light: "#283593", dark: "#9FA8DA" }, // indigo
  8:  { light: "#6A1B9A", dark: "#CE93D8" }, // purple
  9:  { light: "#AD1457", dark: "#F48FB1" }, // pink (shifted)
  10: { light: "#C2185B", dark: "#F48FB1" },
  11: { light: "#7B1FA2", dark: "#CE93D8" },
  12: { light: "#1565C0", dark: "#64B5F6" },
  13: { light: "#00838F", dark: "#4DD0E1" },
  14: { light: "#2E7D32", dark: "#81C784" },
  15: { light: "#EF6C00", dark: "#FFB74D" },
  16: { light: "#AD1457", dark: "#F06292" },
  17: { light: "#4527A0", dark: "#B39DDB" },
  18: { light: "#00695C", dark: "#4DB6AC" },
  19: { light: "#BF360C", dark: "#FF8A65" },
  20: { light: "#37474F", dark: "#B0BEC5" },
  21: { light: "#5D4037", dark: "#BCAAA4" }, // brown
  22: { light: "#006064", dark: "#4DD0E1" }, // deep cyan
  23: { light: "#1B5E20", dark: "#A5D6A7" }, // deep green
  24: { light: "#880E4F", dark: "#F48FB1" }, // deep magenta
  25: { light: "#0D47A1", dark: "#90CAF9" }, // deep blue
};

export function lessonColor(lessonNum, dark) {
  const c = LESSON_COLORS[lessonNum];
  if (!c) return dark ? "#888" : "#444";
  return dark ? c.dark : c.light;
}
