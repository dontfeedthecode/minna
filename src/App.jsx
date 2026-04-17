import { useState } from "react";
import { themes, SANS } from "./lib/theme.js";
import Header from "./components/Header.jsx";
import SearchBox from "./components/SearchBox.jsx";
import LessonTabs from "./components/LessonTabs.jsx";
import GrammarView from "./components/GrammarView.jsx";
import VocabView from "./components/VocabView.jsx";
import CountersView from "./components/CountersView.jsx";

const RANGE = (start, end) => Array.from({ length: end - start + 1 }, (_, i) => start + i);
const GRAMMAR_LESSONS = RANGE(1, 25);
const VOCAB_LESSONS = RANGE(1, 25);

export default function App() {
  const [dark, setDark] = useState(true);
  const [mode, setMode] = useState("grammar");
  const [activeLesson, setActiveLesson] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const t = dark ? themes.dark : themes.light;

  const placeholder =
    mode === "grammar"
      ? "Search grammar, にほんご, or English…"
      : mode === "vocab"
        ? "Search English, kanji, kana, or romaji…"
        : "Search counters — e.g. 'hours', 'ippon', 'Monday'…";

  return (
    <div
      style={{
        fontFamily: SANS,
        background: t.bg,
        minHeight: "100vh",
        padding: 0,
        transition: "background 0.3s, color 0.3s",
        color: t.text,
        zoom: 1.2,
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <Header
        t={t}
        dark={dark}
        onToggleDark={() => setDark((d) => !d)}
        mode={mode}
        onModeChange={(next) => {
          setMode(next);
          // A lesson selected in one mode may not exist in another (e.g. L5
          // is vocab-only). Clear the filter when switching.
          const nextLessons = next === "vocab" ? VOCAB_LESSONS : next === "grammar" ? GRAMMAR_LESSONS : null;
          if (nextLessons && activeLesson !== null && !nextLessons.includes(activeLesson)) {
            setActiveLesson(null);
          }
        }}
      />

      <SearchBox t={t} value={searchQuery} onChange={setSearchQuery} placeholder={placeholder} />

      {mode !== "counters" && (
        <LessonTabs
          t={t}
          dark={dark}
          lessons={mode === "vocab" ? VOCAB_LESSONS : GRAMMAR_LESSONS}
          activeLesson={activeLesson}
          onChange={setActiveLesson}
        />
      )}

      {mode === "grammar" && (
        <GrammarView t={t} dark={dark} activeLesson={activeLesson} searchQuery={searchQuery} />
      )}
      {mode === "vocab" && (
        <VocabView t={t} dark={dark} activeLesson={activeLesson} searchQuery={searchQuery} />
      )}
      {mode === "counters" && (
        <CountersView t={t} dark={dark} searchQuery={searchQuery} />
      )}
    </div>
  );
}
