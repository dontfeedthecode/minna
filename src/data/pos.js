// Part-of-speech tags for Minna no Nihongo vocabulary L1-L25.
// Keyed by "lesson.idx". Merged into vocab.json at build time.
//
// Types:
//   verb      — with group: 1 (godan) | 2 (ichidan) | 3 (suru/kuru)
//   i-adj     — conjugates via ～い → ～くない / ～かった / ～くて
//   na-adj    — conjugates via ～だ / ～じゃない / ～だった
//   noun      — not conjugated
//   adverb    — not conjugated
//   phrase    — fixed expression (no conjugation display)
//   other     — particles, suffixes, interjections
//
// `irregular: true` flags forms we don't auto-conjugate (the engine will
// hide the table and show the note).

export const POS = {
  // ---------- LESSON 1 ----------
  "1.1": { pos: "noun" },  // わたし
  "1.2": { pos: "noun" },  // あなた
  "1.3": { pos: "noun" },
  "1.4": { pos: "other" }, // ～さん
  "1.5": { pos: "other" },
  "1.6": { pos: "other" },
  "1.7": { pos: "noun" },
  "1.8": { pos: "noun" },
  "1.9": { pos: "noun" },
  "1.10": { pos: "noun" },
  "1.11": { pos: "noun" },
  "1.12": { pos: "noun" },
  "1.13": { pos: "noun" },
  "1.14": { pos: "noun" },
  "1.15": { pos: "noun" },
  "1.16": { pos: "noun" },
  "1.17": { pos: "other" }, // だれ
  "1.18": { pos: "other" }, // －さい (suffix)
  "1.19": { pos: "other" },
  "1.20": { pos: "other" },
  "1.21": { pos: "other" },
  "1.22": { pos: "phrase" },
  "1.23": { pos: "phrase" },
  "1.24": { pos: "phrase" },
  "1.25": { pos: "phrase" },
  "1.26": { pos: "phrase" },
  "1.27": { pos: "phrase" },
  "1.28": { pos: "noun" },
  "1.29": { pos: "noun" },
  "1.30": { pos: "noun" },
  "1.31": { pos: "noun" },
  "1.32": { pos: "noun" },
  "1.33": { pos: "noun" },
  "1.34": { pos: "noun" },
  "1.35": { pos: "noun" },
  "1.36": { pos: "noun" },
  "1.37": { pos: "noun" },
  "1.38": { pos: "noun" },
  "1.39": { pos: "noun" },
  "1.40": { pos: "noun" },
  "1.41": { pos: "noun" },
  "1.42": { pos: "noun" },
  "1.43": { pos: "noun" },
  "1.44": { pos: "other" },
  "1.45": { pos: "noun" },
  "1.46": { pos: "noun" },
  "1.47": { pos: "noun" },

  // ---------- LESSON 2 ----------
  "2.1": { pos: "other" },  // これ
  "2.2": { pos: "other" },
  "2.3": { pos: "other" },
  "2.4": { pos: "other" },  // この ～
  "2.5": { pos: "other" },
  "2.6": { pos: "other" },
  "2.7": { pos: "noun" },
  "2.8": { pos: "noun" },
  "2.9": { pos: "noun" },
  "2.10": { pos: "noun" },
  "2.11": { pos: "noun" },
  "2.12": { pos: "noun" },
  "2.13": { pos: "noun" },
  "2.14": { pos: "noun" },
  "2.15": { pos: "noun" },
  "2.16": { pos: "noun" },
  "2.17": { pos: "noun" },
  "2.18": { pos: "noun" },
  "2.19": { pos: "noun" },
  "2.20": { pos: "noun" },
  "2.21": { pos: "noun" },
  "2.22": { pos: "noun" },
  "2.23": { pos: "noun" },
  "2.24": { pos: "noun" },
  "2.25": { pos: "noun" },
  "2.26": { pos: "noun" },
  "2.27": { pos: "noun" },
  "2.28": { pos: "noun" },
  "2.29": { pos: "noun" },
  "2.30": { pos: "noun" },
  "2.31": { pos: "noun" },
  "2.32": { pos: "noun" },
  "2.33": { pos: "noun" },
  "2.34": { pos: "noun" },
  "2.35": { pos: "other" },
  "2.36": { pos: "other" },  // なん
  "2.37": { pos: "adverb" },
  "2.38": { pos: "other" },
  "2.39": { pos: "other" },
  "2.40": { pos: "phrase" },
  "2.41": { pos: "phrase" },
  "2.42": { pos: "phrase" },
  "2.43": { pos: "verb", group: 1 }, // ちがいます (ちがう)
  "2.44": { pos: "other" },
  "2.45": { pos: "phrase" },
  "2.46": { pos: "phrase" },
  "2.47": { pos: "noun" },
  "2.48": { pos: "noun" },
  "2.49": { pos: "noun" },
  "2.50": { pos: "noun" },
  "2.51": { pos: "phrase" },
  "2.52": { pos: "phrase" },

  // ---------- LESSON 3 ----------
  "3.1": { pos: "other" },
  "3.2": { pos: "other" },
  "3.3": { pos: "other" },
  "3.4": { pos: "other" },
  "3.5": { pos: "other" },
  "3.6": { pos: "other" },
  "3.7": { pos: "other" },
  "3.8": { pos: "other" },
  "3.9": { pos: "noun" },
  "3.10": { pos: "noun" },
  "3.11": { pos: "noun" },
  "3.12": { pos: "noun" },
  "3.13": { pos: "noun" },
  "3.14": { pos: "noun" },
  "3.15": { pos: "noun" },
  "3.16": { pos: "noun" },
  "3.17": { pos: "noun" },
  "3.18": { pos: "noun" },
  "3.19": { pos: "noun" },
  "3.20": { pos: "noun" },
  "3.21": { pos: "noun" },
  "3.22": { pos: "noun" },
  "3.23": { pos: "noun" },
  "3.24": { pos: "noun" },
  "3.25": { pos: "noun" },
  "3.26": { pos: "noun" },
  "3.27": { pos: "noun" },
  "3.28": { pos: "noun" },
  "3.29": { pos: "noun" },
  "3.30": { pos: "other" },
  "3.31": { pos: "other" },
  "3.32": { pos: "other" },
  "3.33": { pos: "other" },
  "3.34": { pos: "noun" },
  "3.35": { pos: "noun" },
  "3.36": { pos: "noun" },
  "3.37": { pos: "phrase" },
  "3.38": { pos: "phrase" },
  "3.39": { pos: "phrase" },
  "3.40": { pos: "phrase" },
  "3.41": { pos: "other" },
  "3.42": { pos: "phrase" },
  "3.43": { pos: "noun" },
  "3.44": { pos: "noun" },
  "3.45": { pos: "noun" },
  "3.46": { pos: "noun" },
  "3.47": { pos: "noun" },
  "3.48": { pos: "noun" },
  "3.49": { pos: "noun" },
  "3.50": { pos: "noun" },
  "3.51": { pos: "phrase" },
  "3.52": { pos: "noun" },

  // ---------- LESSON 4 ----------
  "4.1": { pos: "verb", group: 2 }, // おきます (おきる)
  "4.2": { pos: "verb", group: 2 }, // ねます (ねる)
  "4.3": { pos: "verb", group: 1 }, // はたらきます
  "4.4": { pos: "verb", group: 1 }, // やすみます
  "4.5": { pos: "verb", group: 3 }, // べんきょうします
  "4.6": { pos: "verb", group: 1 }, // おわります
  "4.7": { pos: "noun" },
  "4.8": { pos: "noun" },
  "4.9": { pos: "noun" },
  "4.10": { pos: "noun" },
  "4.11": { pos: "noun" },
  "4.12": { pos: "noun" },
  "4.13": { pos: "other" }, // －じ (suffix)
  "4.14": { pos: "other" },
  "4.15": { pos: "noun" },
  "4.16": { pos: "other" },
  "4.17": { pos: "other" },
  "4.18": { pos: "noun" },
  "4.19": { pos: "noun" },
  "4.20": { pos: "noun" },
  "4.21": { pos: "noun" },
  "4.22": { pos: "noun" },
  "4.23": { pos: "noun" },
  "4.24": { pos: "noun" },
  "4.25": { pos: "noun" },
  "4.26": { pos: "noun" },
  "4.27": { pos: "noun" },
  "4.28": { pos: "noun" },
  "4.29": { pos: "noun" },
  "4.30": { pos: "noun" },
  "4.31": { pos: "noun" },
  "4.32": { pos: "noun" },
  "4.33": { pos: "noun" },
  "4.34": { pos: "noun" },
  "4.35": { pos: "noun" },
  "4.36": { pos: "noun" },
  "4.37": { pos: "noun" },
  "4.38": { pos: "noun" },
  "4.39": { pos: "noun" },
  "4.40": { pos: "noun" },
  "4.41": { pos: "noun" },
  "4.42": { pos: "noun" },
  "4.43": { pos: "noun" },
  "4.44": { pos: "noun" },
  "4.45": { pos: "other" },
  "4.46": { pos: "other" },
  "4.47": { pos: "other" },
  "4.48": { pos: "other" },
  "4.49": { pos: "phrase" },
  "4.50": { pos: "noun" },
  "4.51": { pos: "other" },
  "4.52": { pos: "noun" },
  "4.53": { pos: "noun" },
  "4.54": { pos: "noun" },
  "4.55": { pos: "noun" },
  "4.56": { pos: "noun" },
  "4.57": { pos: "noun" },
  "4.58": { pos: "noun" },
  "4.59": { pos: "noun" },
  "4.60": { pos: "noun" },
  "4.61": { pos: "phrase" },
  "4.62": { pos: "noun" },
  "4.63": { pos: "phrase" },
  "4.64": { pos: "phrase" },
  "4.65": { pos: "phrase" },
  "4.66": { pos: "phrase" },
  "4.67": { pos: "noun" },
  "4.68": { pos: "noun" },

  // ---------- LESSON 5 ----------
  "5.1": { pos: "verb", group: 1, irregular: true, note: "行く is irregular: the te-form is いって (not いいて) and the ta-form is いった." }, // いきます (いく)
  "5.2": { pos: "verb", group: 3 }, // きます (くる)
  "5.3": { pos: "verb", group: 1 }, // かえります (かえる — G1 despite い-row stem)
  "5.4": { pos: "noun" },
  "5.5": { pos: "noun" },
  "5.6": { pos: "noun" },
  "5.7": { pos: "noun" },
  "5.8": { pos: "noun" },
  "5.9": { pos: "noun" },
  "5.10": { pos: "noun" },
  "5.11": { pos: "noun" },
  "5.12": { pos: "noun" },
  "5.13": { pos: "noun" },
  "5.14": { pos: "noun" },
  "5.15": { pos: "adverb" },
  "5.16": { pos: "noun" },
  "5.17": { pos: "noun" },
  "5.18": { pos: "noun" },
  "5.19": { pos: "noun" },
  "5.20": { pos: "noun" },
  "5.21": { pos: "adverb" },
  "5.22": { pos: "noun" },
  "5.23": { pos: "noun" },
  "5.24": { pos: "noun" },
  "5.25": { pos: "noun" },
  "5.26": { pos: "noun" },
  "5.27": { pos: "noun" },
  "5.28": { pos: "noun" },
  "5.29": { pos: "noun" },
  "5.30": { pos: "noun" },
  "5.31": { pos: "other" },
  "5.32": { pos: "other" },
  "5.33": { pos: "other" },
  "5.34": { pos: "other" },
  "5.35": { pos: "noun" },
  "5.36": { pos: "noun" },
  "5.37": { pos: "noun" },
  "5.38": { pos: "noun" },
  "5.39": { pos: "noun" },
  "5.40": { pos: "noun" },
  "5.41": { pos: "noun" },
  "5.42": { pos: "noun" },
  "5.43": { pos: "noun" },
  "5.44": { pos: "noun" },
  "5.45": { pos: "noun" },
  "5.46": { pos: "noun" },
  "5.47": { pos: "noun" },
  "5.48": { pos: "other" },
  "5.49": { pos: "other" },
  "5.50": { pos: "other" },
  "5.51": { pos: "noun" },
  "5.52": { pos: "phrase" },
  "5.53": { pos: "phrase" },
  "5.54": { pos: "phrase" },
  "5.55": { pos: "other" },
  "5.56": { pos: "other" },
  "5.57": { pos: "noun" },
  "5.58": { pos: "noun" },
  "5.59": { pos: "noun" },
  "5.60": { pos: "noun" },
  "5.61": { pos: "noun" },
  "5.62": { pos: "noun" },
  "5.63": { pos: "noun" },

  // ---------- LESSON 6 ----------
  "6.1": { pos: "verb", group: 2 },  // たべます (たべる)
  "6.2": { pos: "verb", group: 1 },  // のみます (のむ)
  "6.3": { pos: "verb", group: 1 },  // すいます (すう)
  "6.4": { pos: "verb", group: 2 },  // みます (みる)
  "6.5": { pos: "verb", group: 1 },  // ききます (きく)
  "6.6": { pos: "verb", group: 1 },  // よみます (よむ)
  "6.7": { pos: "verb", group: 1 },  // かきます (かく)
  "6.8": { pos: "verb", group: 1 },  // かいます (かう)
  "6.9": { pos: "verb", group: 1 },  // とります (とる)
  "6.10": { pos: "verb", group: 3 }, // します (する)
  "6.11": { pos: "verb", group: 1 }, // あいます (あう)
  "6.12": { pos: "noun" },
  "6.13": { pos: "noun" },
  "6.14": { pos: "noun" },
  "6.15": { pos: "noun" },
  "6.16": { pos: "noun" },
  "6.17": { pos: "noun" },
  "6.18": { pos: "noun" },
  "6.19": { pos: "noun" },
  "6.20": { pos: "noun" },
  "6.21": { pos: "noun" },
  "6.22": { pos: "noun" },
  "6.23": { pos: "noun" },
  "6.24": { pos: "noun" },
  "6.25": { pos: "noun" },
  "6.26": { pos: "noun" },
  "6.27": { pos: "noun" },
  "6.28": { pos: "noun" },
  "6.29": { pos: "noun" },
  "6.30": { pos: "noun" },
  "6.31": { pos: "noun" },
  "6.32": { pos: "noun" },
  "6.33": { pos: "noun" },
  "6.34": { pos: "noun" },
  "6.35": { pos: "noun" },
  "6.36": { pos: "noun" },
  "6.37": { pos: "noun" },
  "6.38": { pos: "noun" },
  "6.39": { pos: "noun" },
  "6.40": { pos: "other" }, // なに (what)
  "6.41": { pos: "adverb" },
  "6.42": { pos: "adverb" },
  "6.43": { pos: "adverb" },
  "6.44": { pos: "adverb" },
  "6.45": { pos: "other" },
  "6.46": { pos: "other" },
  "6.47": { pos: "phrase" },
  "6.48": { pos: "phrase" },
  "6.49": { pos: "phrase" },
  "6.50": { pos: "phrase" },
  "6.51": { pos: "noun" },
  "6.52": { pos: "noun" },
  "6.53": { pos: "noun" },
  "6.54": { pos: "noun" },
  "6.55": { pos: "noun" },
  "6.56": { pos: "noun" },
  "6.57": { pos: "noun" },
  "6.58": { pos: "noun" },
  "6.59": { pos: "noun" },

  // ---------- LESSON 7 ----------
  "7.1": { pos: "verb", group: 1 },  // きります (きる G1 despite い-row)
  "7.2": { pos: "verb", group: 1 },  // おくります (おくる)
  "7.3": { pos: "verb", group: 2 },  // あげます (あげる)
  "7.4": { pos: "verb", group: 1 },  // もらいます (もらう)
  "7.5": { pos: "verb", group: 1 },  // かします (かす)
  "7.6": { pos: "verb", group: 2 },  // かります (かりる)
  "7.7": { pos: "verb", group: 2 },  // おしえます (おしえる)
  "7.8": { pos: "verb", group: 1 },  // ならいます (ならう)
  "7.9": { pos: "verb", group: 2 },  // かけます (かける)
  "7.10": { pos: "noun" },
  "7.11": { pos: "noun" },
  "7.12": { pos: "noun" },
  "7.13": { pos: "noun" },
  "7.14": { pos: "noun" },
  "7.15": { pos: "noun" },
  "7.16": { pos: "noun" },
  "7.17": { pos: "noun" },
  "7.18": { pos: "noun" },
  "7.19": { pos: "noun" },
  "7.20": { pos: "noun" },
  "7.21": { pos: "noun" },
  "7.22": { pos: "noun" },
  "7.23": { pos: "noun" },
  "7.24": { pos: "noun" },
  "7.25": { pos: "noun" },
  "7.26": { pos: "noun" },
  "7.27": { pos: "noun" },
  "7.28": { pos: "noun" },
  "7.29": { pos: "noun" },
  "7.30": { pos: "noun" },
  "7.31": { pos: "noun" },
  "7.32": { pos: "noun" },
  "7.33": { pos: "noun" },
  "7.34": { pos: "noun" },
  "7.35": { pos: "noun" },
  "7.36": { pos: "adverb" },
  "7.37": { pos: "adverb" },
  "7.38": { pos: "adverb" },
  "7.39": { pos: "phrase" },
  "7.40": { pos: "phrase" },
  "7.41": { pos: "phrase" },
  "7.42": { pos: "phrase" },
  "7.43": { pos: "phrase" },
  "7.44": { pos: "phrase" },
  "7.45": { pos: "phrase" },
  "7.46": { pos: "noun" },
  "7.47": { pos: "noun" },
  "7.48": { pos: "noun" },
  "7.49": { pos: "phrase" },
  "7.50": { pos: "noun" },
  "7.51": { pos: "noun" },
  "7.52": { pos: "noun" },

  // ---------- LESSON 8 ----------
  "8.1": { pos: "na-adj" },
  "8.2": { pos: "na-adj" },
  "8.3": { pos: "na-adj" },
  "8.4": { pos: "na-adj" },
  "8.5": { pos: "na-adj" },
  "8.6": { pos: "na-adj" },
  "8.7": { pos: "na-adj" },
  "8.8": { pos: "na-adj" },
  "8.9": { pos: "na-adj" },
  "8.10": { pos: "na-adj" },
  "8.11": { pos: "i-adj" },
  "8.12": { pos: "i-adj" },
  "8.13": { pos: "i-adj" },
  "8.14": { pos: "i-adj" },
  "8.15": { pos: "i-adj", irregular: true, note: "いい is irregular — all non-present forms use the よい stem (よくない, よかった, よくて)." },
  "8.16": { pos: "i-adj" },
  "8.17": { pos: "i-adj" },
  "8.18": { pos: "i-adj" },
  "8.19": { pos: "i-adj" },
  "8.20": { pos: "i-adj" },
  "8.21": { pos: "i-adj" },
  "8.22": { pos: "i-adj" },
  "8.23": { pos: "i-adj" },
  "8.24": { pos: "i-adj" },
  "8.25": { pos: "i-adj" },
  "8.26": { pos: "i-adj" },
  "8.27": { pos: "i-adj" },
  "8.28": { pos: "i-adj" },
  "8.29": { pos: "i-adj" },
  "8.30": { pos: "i-adj" },
  "8.31": { pos: "i-adj" },
  "8.32": { pos: "i-adj" },
  "8.33": { pos: "noun" },
  "8.34": { pos: "noun" },
  "8.35": { pos: "noun" },
  "8.36": { pos: "noun" },
  "8.37": { pos: "noun" },
  "8.38": { pos: "noun" },
  "8.39": { pos: "noun" },
  "8.40": { pos: "noun" },
  "8.41": { pos: "noun" },
  "8.42": { pos: "adverb" },
  "8.43": { pos: "other" },
  "8.44": { pos: "adverb" },
  "8.45": { pos: "adverb" },
  "8.46": { pos: "other" },
  "8.47": { pos: "other" },
  "8.48": { pos: "phrase" },
  "8.49": { pos: "phrase" },
  "8.50": { pos: "phrase" },
  "8.51": { pos: "phrase" },
  "8.52": { pos: "phrase" },
  "8.53": { pos: "phrase" },
  "8.54": { pos: "phrase" },
  "8.55": { pos: "phrase" },
  "8.56": { pos: "noun" },
  "8.57": { pos: "noun" },
  "8.58": { pos: "noun" },
  "8.59": { pos: "noun" },
  "8.60": { pos: "noun" },
  "8.61": { pos: "noun" },
  "8.62": { pos: "noun" },
  "8.63": { pos: "other" },
  "8.64": { pos: "phrase" },
  "8.65": { pos: "noun" },

  // ---------- LESSON 9 ----------
  "9.1": { pos: "verb", group: 1 },  // わかります (わかる)
  "9.2": { pos: "verb", group: 1 },  // あります (ある)
  "9.3": { pos: "na-adj" },
  "9.4": { pos: "na-adj" },
  "9.5": { pos: "na-adj" },
  "9.6": { pos: "na-adj" },
  "9.7": { pos: "noun" },
  "9.8": { pos: "noun" },
  "9.9": { pos: "noun" },
  "9.10": { pos: "noun" },
  "9.11": { pos: "noun" },
  "9.12": { pos: "noun" },
  "9.13": { pos: "noun" },
  "9.14": { pos: "noun" },
  "9.15": { pos: "noun" },
  "9.16": { pos: "noun" },
  "9.17": { pos: "noun" },
  "9.18": { pos: "noun" },
  "9.19": { pos: "noun" },
  "9.20": { pos: "noun" },
  "9.21": { pos: "noun" },
  "9.22": { pos: "noun" },
  "9.23": { pos: "noun" },
  "9.24": { pos: "noun" },
  "9.25": { pos: "noun" },
  "9.26": { pos: "phrase" },
  "9.27": { pos: "noun" },
  "9.28": { pos: "noun" },
  "9.29": { pos: "noun" },
  "9.30": { pos: "noun" },
  "9.31": { pos: "noun" },
  "9.32": { pos: "noun" },
  "9.33": { pos: "noun" },
  "9.34": { pos: "noun" },
  "9.35": { pos: "noun" },
  "9.36": { pos: "noun" },
  "9.37": { pos: "adverb" },
  "9.38": { pos: "adverb" },
  "9.39": { pos: "adverb" },
  "9.40": { pos: "adverb" },
  "9.41": { pos: "adverb" },
  "9.42": { pos: "adverb" },
  "9.43": { pos: "other" },
  "9.44": { pos: "other" },
  "9.45": { pos: "phrase" },
  "9.46": { pos: "phrase" },
  "9.47": { pos: "phrase" },
  "9.48": { pos: "other" },
  "9.49": { pos: "phrase" },
  "9.50": { pos: "phrase" },
  "9.51": { pos: "phrase" },
  "9.52": { pos: "phrase" },
  "9.53": { pos: "phrase" },
  "9.54": { pos: "phrase" },
  "9.55": { pos: "phrase" },
  "9.56": { pos: "noun" },

  // ---------- LESSON 10 ----------
  "10.1": { pos: "verb", group: 1 },   // あります
  "10.2": { pos: "verb", group: 2 },   // います
  "10.3": { pos: "na-adj" },           // いろいろ[な]
  "10.4": { pos: "noun" },
  "10.5": { pos: "noun" },
  "10.6": { pos: "noun" },
  "10.7": { pos: "noun" },
  "10.8": { pos: "noun" },
  "10.9": { pos: "noun" },
  "10.10": { pos: "noun" },
  "10.11": { pos: "noun" },
  "10.12": { pos: "noun" },
  "10.13": { pos: "noun" },
  "10.14": { pos: "noun" },
  "10.15": { pos: "noun" },
  "10.16": { pos: "noun" },
  "10.17": { pos: "noun" },
  "10.18": { pos: "noun" },
  "10.19": { pos: "noun" },
  "10.20": { pos: "noun" },
  "10.21": { pos: "noun" },
  "10.22": { pos: "noun" },
  "10.23": { pos: "noun" },
  "10.24": { pos: "noun" },
  "10.25": { pos: "noun" },
  "10.26": { pos: "noun" },
  "10.27": { pos: "noun" },
  "10.28": { pos: "noun" },
  "10.29": { pos: "other" },           // ～屋 (suffix)
  "10.30": { pos: "noun" },
  "10.31": { pos: "noun" },
  "10.32": { pos: "noun" },
  "10.33": { pos: "noun" },
  "10.34": { pos: "noun" },
  "10.35": { pos: "noun" },
  "10.36": { pos: "noun" },
  "10.37": { pos: "noun" },
  "10.38": { pos: "noun" },
  "10.39": { pos: "noun" },
  "10.40": { pos: "noun" },
  "10.41": { pos: "noun" },
  "10.42": { pos: "noun" },
  "10.43": { pos: "other" },
  "10.44": { pos: "phrase" },
  "10.45": { pos: "noun" },
  "10.46": { pos: "noun" },
  "10.47": { pos: "phrase" },
  "10.48": { pos: "noun" },
  "10.49": { pos: "noun" },
  "10.50": { pos: "noun" },
  "10.51": { pos: "noun" },
  "10.52": { pos: "other" },
  "10.53": { pos: "other" },
  "10.54": { pos: "noun" },
  "10.55": { pos: "noun" },
  "10.56": { pos: "noun" },
  "10.57": { pos: "noun" },

  // ---------- LESSON 11 ----------
  "11.1": { pos: "verb", group: 2 },   // います [have a child]
  "11.2": { pos: "verb", group: 2 },   // います [stay in Japan]
  "11.3": { pos: "verb", group: 1 },   // かかります (かかる)
  "11.4": { pos: "verb", group: 1 },   // やすみます (やすむ)
  "11.5": { pos: "noun" },
  "11.6": { pos: "noun" },
  "11.7": { pos: "noun" },
  "11.8": { pos: "noun" },
  "11.9": { pos: "noun" },
  "11.10": { pos: "noun" },
  "11.11": { pos: "noun" },
  "11.12": { pos: "noun" },
  "11.13": { pos: "noun" },
  "11.14": { pos: "noun" },
  "11.15": { pos: "other" },
  "11.16": { pos: "noun" },
  "11.17": { pos: "noun" },
  "11.18": { pos: "other" },
  "11.19": { pos: "other" },
  "11.20": { pos: "other" },
  "11.21": { pos: "other" },
  "11.22": { pos: "noun" },
  "11.23": { pos: "noun" },
  "11.24": { pos: "noun" },
  "11.25": { pos: "noun" },
  "11.26": { pos: "noun" },
  "11.27": { pos: "noun" },
  "11.28": { pos: "noun" },
  "11.29": { pos: "noun" },
  "11.30": { pos: "noun" },
  "11.31": { pos: "noun" },
  "11.32": { pos: "noun" },
  "11.33": { pos: "noun" },
  "11.34": { pos: "noun" },
  "11.35": { pos: "noun" },
  "11.36": { pos: "noun" },
  "11.37": { pos: "noun" },
  "11.38": { pos: "noun" },
  "11.39": { pos: "noun" },
  "11.40": { pos: "noun" },
  "11.41": { pos: "noun" },
  "11.42": { pos: "noun" },
  "11.43": { pos: "other" },
  "11.44": { pos: "other" },
  "11.45": { pos: "other" },
  "11.46": { pos: "other" },
  "11.47": { pos: "other" },
  "11.48": { pos: "phrase" },
  "11.49": { pos: "adverb" },
  "11.50": { pos: "noun" },
  "11.51": { pos: "other" },
  "11.52": { pos: "phrase" },
  "11.53": { pos: "phrase" },
  "11.54": { pos: "phrase" },
  "11.55": { pos: "phrase" },
  "11.56": { pos: "phrase" },
  "11.57": { pos: "phrase" },
  "11.58": { pos: "noun" },
  "11.59": { pos: "noun" },
  "11.60": { pos: "phrase" },
  "11.61": { pos: "noun" },
  "11.62": { pos: "noun" },
  "11.63": { pos: "noun" },
  "11.64": { pos: "phrase" },
  "11.65": { pos: "phrase" },
  "11.66": { pos: "other" },

  // ---------- LESSON 12 ----------
  "12.1": { pos: "na-adj" },
  "12.2": { pos: "i-adj" },
  "12.3": { pos: "i-adj" },
  "12.4": { pos: "i-adj" },
  "12.5": { pos: "i-adj" },
  "12.6": { pos: "i-adj" },
  "12.7": { pos: "i-adj" },
  "12.8": { pos: "i-adj" },
  "12.9": { pos: "i-adj" },
  "12.10": { pos: "i-adj" },
  "12.11": { pos: "i-adj" },
  "12.12": { pos: "i-adj" },
  "12.13": { pos: "i-adj" },
  "12.14": { pos: "i-adj", irregular: true, note: "いい is irregular — all non-present forms use the よい stem (よくない, よかった, よくて)." },
  "12.15": { pos: "noun" },
  "12.16": { pos: "noun" },
  "12.17": { pos: "noun" },
  "12.18": { pos: "noun" },
  "12.19": { pos: "noun" },
  "12.20": { pos: "noun" },
  "12.21": { pos: "noun" },
  "12.22": { pos: "noun" },
  "12.23": { pos: "noun" },
  "12.24": { pos: "noun" },
  "12.25": { pos: "noun" },
  "12.26": { pos: "noun" },
  "12.27": { pos: "noun" },
  "12.28": { pos: "noun" },
  "12.29": { pos: "noun" },
  "12.30": { pos: "noun" },
  "12.31": { pos: "noun" },
  "12.32": { pos: "noun" },
  "12.33": { pos: "noun" },
  "12.34": { pos: "noun" },
  "12.35": { pos: "noun" },
  "12.36": { pos: "noun" },
  "12.37": { pos: "noun" },
  "12.38": { pos: "noun" },
  "12.39": { pos: "noun" },
  "12.40": { pos: "other" },
  "12.41": { pos: "other" },
  "12.42": { pos: "adverb" },
  "12.43": { pos: "adverb" },
  "12.44": { pos: "adverb" },
  "12.45": { pos: "phrase" },
  "12.46": { pos: "phrase" },
  "12.47": { pos: "phrase" },
  "12.48": { pos: "phrase" },
  "12.49": { pos: "noun" },
  "12.50": { pos: "noun" },
  "12.51": { pos: "noun" },
  "12.52": { pos: "noun" },
  "12.53": { pos: "noun" },
  "12.54": { pos: "noun" },
  "12.55": { pos: "phrase" },
  "12.56": { pos: "other" },
  "12.57": { pos: "noun" },

  // ---------- LESSON 13 ----------
  "13.1": { pos: "verb", group: 1 },   // あそびます (あそぶ)
  "13.2": { pos: "verb", group: 1 },   // およぎます (およぐ)
  "13.3": { pos: "verb", group: 2 },   // むかえます (むかえる)
  "13.4": { pos: "verb", group: 2 },   // つかれます (つかれる)
  "13.5": { pos: "verb", group: 3 },   // けっこんします (する)
  "13.6": { pos: "verb", group: 3 },   // かいものします
  "13.7": { pos: "verb", group: 3 },   // しょくじします
  "13.8": { pos: "verb", group: 3 },   // さんぽします
  "13.9": { pos: "na-adj" },
  "13.10": { pos: "i-adj" },
  "13.11": { pos: "i-adj" },
  "13.12": { pos: "i-adj" },
  "13.13": { pos: "noun" },
  "13.14": { pos: "noun" },
  "13.15": { pos: "noun" },
  "13.16": { pos: "noun" },
  "13.17": { pos: "noun" },
  "13.18": { pos: "noun" },
  "13.19": { pos: "noun" },
  "13.20": { pos: "other" },
  "13.21": { pos: "other" },
  "13.22": { pos: "other" },
  "13.23": { pos: "phrase" },
  "13.24": { pos: "phrase" },
  "13.25": { pos: "phrase" },
  "13.26": { pos: "phrase" },
  "13.27": { pos: "noun" },
  "13.28": { pos: "noun" },
  "13.29": { pos: "phrase" },
  "13.30": { pos: "phrase" },
  "13.31": { pos: "adverb" },
  "13.32": { pos: "noun" },
  "13.33": { pos: "noun" },
  "13.34": { pos: "verb", group: 1 },  // だします (だす)
  "13.35": { pos: "verb", group: 1 },  // はいります (はいる, irregular-looking i-row G1)
  "13.36": { pos: "verb", group: 2 },  // でます (でる)
  "13.37": { pos: "i-adj" },
  "13.38": { pos: "noun" },
  "13.39": { pos: "noun" },
  "13.40": { pos: "noun" },
  "13.41": { pos: "noun" },
  "13.42": { pos: "phrase" },
  "13.43": { pos: "phrase" },
  "13.44": { pos: "noun" },
  "13.45": { pos: "noun" },

  // ---------- LESSON 14 ----------
  "14.1": { pos: "verb", group: 2 },   // つけます
  "14.2": { pos: "verb", group: 1 },   // けします
  "14.3": { pos: "verb", group: 2 },   // あけます
  "14.4": { pos: "verb", group: 2 },   // しめます
  "14.5": { pos: "verb", group: 1 },   // いそぎます
  "14.6": { pos: "verb", group: 1 },   // まちます
  "14.7": { pos: "verb", group: 1 },   // もちます
  "14.8": { pos: "verb", group: 1 },   // とります
  "14.9": { pos: "verb", group: 1 },   // てつだいます
  "14.10": { pos: "verb", group: 1 },  // よびます
  "14.11": { pos: "verb", group: 1 },  // はなします
  "14.12": { pos: "verb", group: 1 },  // つかいます
  "14.13": { pos: "verb", group: 2 },  // とめます
  "14.14": { pos: "verb", group: 2 },  // みせます
  "14.15": { pos: "verb", group: 2 },  // おしえます
  "14.16": { pos: "verb", group: 1 },  // すわります
  "14.17": { pos: "verb", group: 1 },  // たちます
  "14.18": { pos: "verb", group: 1 },  // はいります
  "14.19": { pos: "verb", group: 2 },  // でます
  "14.20": { pos: "verb", group: 1 },  // ふります
  "14.21": { pos: "verb", group: 3 },  // コピーします
  "14.22": { pos: "noun" },
  "14.23": { pos: "noun" },
  "14.24": { pos: "noun" },
  "14.25": { pos: "noun" },
  "14.26": { pos: "noun" },
  "14.27": { pos: "noun" },
  "14.28": { pos: "noun" },
  "14.29": { pos: "noun" },
  "14.30": { pos: "noun" },
  "14.31": { pos: "noun" },
  "14.32": { pos: "noun" },
  "14.33": { pos: "other" },
  "14.34": { pos: "adverb" },
  "14.35": { pos: "adverb" },
  "14.36": { pos: "adverb" },
  "14.37": { pos: "adverb" },
  "14.38": { pos: "adverb" },
  "14.39": { pos: "phrase" },
  "14.40": { pos: "other" },
  "14.41": { pos: "other" },
  "14.42": { pos: "other" },
  "14.43": { pos: "phrase" },
  "14.44": { pos: "phrase" },
  "14.45": { pos: "noun" },
  "14.46": { pos: "noun" },
  "14.47": { pos: "verb", group: 1 },  // まがります
  "14.48": { pos: "verb", group: 2 },  // はじめます
  "14.49": { pos: "phrase" },
  "14.50": { pos: "noun" },

  // ---------- LESSON 15 ----------
  "15.1": { pos: "verb", group: 1 },   // おきます (おく — put)
  "15.2": { pos: "verb", group: 1 },   // つくります
  "15.3": { pos: "verb", group: 1 },   // うります
  "15.4": { pos: "verb", group: 1 },   // しります
  "15.5": { pos: "verb", group: 1 },   // すみます (live)
  "15.6": { pos: "verb", group: 3 },   // けんきゅうします
  "15.7": { pos: "noun" },
  "15.8": { pos: "noun" },
  "15.9": { pos: "noun" },
  "15.10": { pos: "noun" },
  "15.11": { pos: "noun" },
  "15.12": { pos: "noun" },
  "15.13": { pos: "noun" },
  "15.14": { pos: "noun" },
  "15.15": { pos: "noun" },
  "15.16": { pos: "noun" },
  "15.17": { pos: "noun" },
  "15.18": { pos: "noun" },
  "15.19": { pos: "phrase" },
  "15.20": { pos: "noun" },
  "15.21": { pos: "verb", group: 1 },  // おもいだします (おもいだす)
  "15.22": { pos: "phrase", note: "Honorific equivalent of います. Irregular: dictionary いらっしゃる, te-form いらっしゃって." },
  "15.23": { pos: "noun" },
  "15.24": { pos: "noun" },
  "15.25": { pos: "verb", group: 1 },  // たちます
  "15.26": { pos: "verb", group: 1 },  // すわります
  "15.27": { pos: "verb", group: 1 },  // つかいます
  "15.28": { pos: "phrase" },          // 知って います (idiomatic)
  "15.29": { pos: "phrase" },          // 住んで います
  "15.30": { pos: "noun" },
  "15.31": { pos: "noun" },
  "15.32": { pos: "noun" },
  "15.33": { pos: "adverb" },
  "15.34": { pos: "noun" },

  // ---------- LESSON 16 ----------
  "16.1": { pos: "verb", group: 1 },   // のります
  "16.2": { pos: "verb", group: 2 },   // おります (get off — ichidan)
  "16.3": { pos: "verb", group: 2 },   // のりかえます
  "16.4": { pos: "verb", group: 2 },   // あびます
  "16.5": { pos: "verb", group: 2 },   // いれます
  "16.6": { pos: "verb", group: 1 },   // だします
  "16.7": { pos: "verb", group: 1 },   // おろします
  "16.8": { pos: "verb", group: 1 },   // はいります
  "16.9": { pos: "verb", group: 2 },   // でます
  "16.10": { pos: "verb", group: 1 },  // おします
  "16.11": { pos: "verb", group: 1 },  // のみます
  "16.12": { pos: "verb", group: 2 },  // はじめます
  "16.13": { pos: "verb", group: 3 },  // けんがくします
  "16.14": { pos: "verb", group: 3 },  // でんわします
  "16.15": { pos: "i-adj" },
  "16.16": { pos: "i-adj" },
  "16.17": { pos: "i-adj" },
  "16.18": { pos: "i-adj" },
  "16.19": { pos: "i-adj" },
  "16.20": { pos: "noun" },
  "16.21": { pos: "noun" },
  "16.22": { pos: "noun" },
  "16.23": { pos: "noun" },
  "16.24": { pos: "noun" },
  "16.25": { pos: "noun" },
  "16.26": { pos: "noun" },
  "16.27": { pos: "noun" },
  "16.28": { pos: "noun" },
  "16.29": { pos: "noun" },
  "16.30": { pos: "noun" },
  "16.31": { pos: "noun" },
  "16.32": { pos: "noun" },
  "16.33": { pos: "noun" },
  "16.34": { pos: "noun" },
  "16.35": { pos: "noun" },
  "16.36": { pos: "noun" },
  "16.37": { pos: "noun" },
  "16.38": { pos: "other" },
  "16.39": { pos: "adverb" },
  "16.40": { pos: "other" },
  "16.41": { pos: "other" },
  "16.42": { pos: "phrase" },
  "16.43": { pos: "phrase" },
  "16.44": { pos: "phrase" },
  "16.45": { pos: "adverb" },
  "16.46": { pos: "adverb" },
  "16.47": { pos: "noun" },
  "16.48": { pos: "noun" },
  "16.49": { pos: "noun" },
  "16.50": { pos: "noun" },
  "16.51": { pos: "noun" },
  "16.52": { pos: "noun" },
  "16.53": { pos: "noun" },
  "16.54": { pos: "noun" },
  "16.55": { pos: "noun" },
  "16.56": { pos: "noun" },
  "16.57": { pos: "noun" },
  "16.58": { pos: "noun" },
  "16.59": { pos: "verb", group: 2 },  // やめます (やめる)
  "16.60": { pos: "phrase" },
  "16.61": { pos: "phrase" },
  "16.62": { pos: "noun" },
  "16.63": { pos: "noun" },
  "16.64": { pos: "noun" },
  "16.65": { pos: "noun" },

  // ---------- LESSON 17 ----------
  "17.1": { pos: "verb", group: 2 },   // おぼえます
  "17.2": { pos: "verb", group: 2 },   // わすれます
  "17.3": { pos: "verb", group: 1 },   // なくします
  "17.4": { pos: "verb", group: 1 },   // はらいます
  "17.5": { pos: "verb", group: 1 },   // かえします
  "17.6": { pos: "verb", group: 2 },   // でかけます
  "17.7": { pos: "verb", group: 1 },   // ぬぎます
  "17.8": { pos: "phrase" },           // 持って 行きます
  "17.9": { pos: "phrase" },           // 持って 来ます
  "17.10": { pos: "verb", group: 3 },  // しんぱいします
  "17.11": { pos: "verb", group: 3 },  // ざんぎょうします
  "17.12": { pos: "verb", group: 3 },  // しゅっちょうします
  "17.13": { pos: "verb", group: 1 },  // のみます [くすりを～]
  "17.14": { pos: "verb", group: 1 },  // はいります [おふろに～]
  "17.15": { pos: "na-adj" },
  "17.16": { pos: "na-adj" },
  "17.17": { pos: "i-adj" },
  "17.18": { pos: "noun" },
  "17.19": { pos: "noun" },
  "17.20": { pos: "noun" },
  "17.21": { pos: "noun" },
  "17.22": { pos: "noun" },
  "17.23": { pos: "noun" },
  "17.24": { pos: "noun" },
  "17.25": { pos: "noun" },
  "17.26": { pos: "noun" },
  "17.27": { pos: "other" },
  "17.28": { pos: "other" },
  "17.29": { pos: "other" },
  "17.30": { pos: "phrase" },
  "17.31": { pos: "noun" },
  "17.32": { pos: "phrase" },
  "17.33": { pos: "noun" },
  "17.34": { pos: "other" },
  "17.35": { pos: "phrase" },
  "17.36": { pos: "verb", group: 1 },  // だします [レポートを～]
  "17.37": { pos: "noun" },
  "17.38": { pos: "noun" },
  "17.39": { pos: "noun" },

  // ---------- LESSON 18 ----------
  "18.1": { pos: "verb", group: 2 },   // できます
  "18.2": { pos: "verb", group: 1 },   // あらいます
  "18.3": { pos: "verb", group: 1 },   // ひきます
  "18.4": { pos: "verb", group: 1 },   // うたいます
  "18.5": { pos: "verb", group: 2 },   // あつめます
  "18.6": { pos: "verb", group: 2 },   // すてます
  "18.7": { pos: "verb", group: 2 },   // かえます
  "18.8": { pos: "verb", group: 3 },   // うんてんします
  "18.9": { pos: "verb", group: 3 },   // よやくします
  "18.10": { pos: "noun" },
  "18.11": { pos: "other" },
  "18.12": { pos: "noun" },
  "18.13": { pos: "noun" },
  "18.14": { pos: "noun" },
  "18.15": { pos: "noun" },
  "18.16": { pos: "noun" },
  "18.17": { pos: "noun" },
  "18.18": { pos: "noun" },
  "18.19": { pos: "noun" },
  "18.20": { pos: "noun" },
  "18.21": { pos: "noun" },
  "18.22": { pos: "adverb" },
  "18.23": { pos: "other" },
  "18.24": { pos: "phrase" },
  "18.25": { pos: "adverb" },
  "18.26": { pos: "phrase" },
  "18.27": { pos: "adverb" },
  "18.28": { pos: "noun" },
  "18.29": { pos: "noun" },
  "18.30": { pos: "noun" },
  "18.31": { pos: "verb", group: 3 },  // けんがくします
  "18.32": { pos: "other" },
  "18.33": { pos: "noun" },

  // ---------- LESSON 19 ----------
  "19.1": { pos: "verb", group: 1 },   // のぼります
  "19.2": { pos: "verb", group: 1 },   // とまります
  "19.3": { pos: "verb", group: 3 },   // そうじします
  "19.4": { pos: "verb", group: 3 },   // せんたくします
  "19.5": { pos: "verb", group: 1 },   // なります
  "19.6": { pos: "i-adj" },
  "19.7": { pos: "i-adj" },
  "19.8": { pos: "i-adj" },
  "19.9": { pos: "noun" },
  "19.10": { pos: "noun" },
  "19.11": { pos: "noun" },
  "19.12": { pos: "noun" },
  "19.13": { pos: "noun" },
  "19.14": { pos: "noun" },
  "19.15": { pos: "noun" },
  "19.16": { pos: "adverb" },
  "19.17": { pos: "adverb" },
  "19.18": { pos: "adverb" },
  "19.19": { pos: "phrase" },
  "19.20": { pos: "other" },
  "19.21": { pos: "phrase" },
  "19.22": { pos: "noun" },
  "19.23": { pos: "na-adj" },
  "19.24": { pos: "phrase" },
  "19.25": { pos: "noun" },
  "19.26": { pos: "noun" },
  "19.27": { pos: "phrase" },
  "19.28": { pos: "phrase" },
  "19.29": { pos: "noun" },
  "19.30": { pos: "adverb" },
  "19.31": { pos: "adverb" },
  "19.32": { pos: "other" },
  "19.33": { pos: "noun" },

  // ---------- LESSON 20 ----------
  "20.1": { pos: "verb", group: 1 },   // いります (need, 要る)
  "20.2": { pos: "verb", group: 2 },   // しらべます
  "20.3": { pos: "verb", group: 3 },   // しゅうりします
  "20.4": { pos: "noun" },
  "20.5": { pos: "noun" },
  "20.6": { pos: "other" },
  "20.7": { pos: "other" },
  "20.8": { pos: "other" },
  "20.9": { pos: "noun" },
  "20.10": { pos: "noun" },
  "20.11": { pos: "noun" },
  "20.12": { pos: "noun" },
  "20.13": { pos: "noun" },
  "20.14": { pos: "other" },
  "20.15": { pos: "other" },
  "20.16": { pos: "other" },
  "20.17": { pos: "other" },
  "20.18": { pos: "adverb" },
  "20.19": { pos: "other" },
  "20.20": { pos: "phrase" },
  "20.21": { pos: "phrase" },
  "20.22": { pos: "adverb" },
  "20.23": { pos: "verb", group: 1 },  // なおします
  "20.24": { pos: "verb", group: 3 },  // でんわします
  "20.25": { pos: "noun" },
  "20.26": { pos: "noun" },
  "20.27": { pos: "noun" },
  "20.28": { pos: "phrase" },
  "20.29": { pos: "phrase" },
  "20.30": { pos: "phrase" },

  // ---------- LESSON 21 ----------
  "21.1": { pos: "verb", group: 1 },  // 思います (おもう)
  "21.2": { pos: "verb", group: 1 },  // 言います (いう)
  "21.3": { pos: "verb", group: 1 },  // 勝ちます (かつ)
  "21.4": { pos: "verb", group: 2 },  // 負けます (まける)
  "21.5": { pos: "verb", group: 1 },  // あります[お祭りが〜]
  "21.6": { pos: "phrase" },          // 役に 立ちます
  "21.7": { pos: "verb", group: 1 },  // 動きます (うごく)
  "21.8": { pos: "verb", group: 2 },  // やめます
  "21.9": { pos: "phrase" },          // 気を つけます
  "21.10": { pos: "verb", group: 3 }, // 留学します
  "21.11": { pos: "na-adj" },         // むだ[な]
  "21.12": { pos: "na-adj" },         // 不便[な]
  "21.13": { pos: "i-adj" },          // すごい
  "21.14": { pos: "noun" },
  "21.15": { pos: "noun" },
  "21.16": { pos: "noun" },
  "21.17": { pos: "noun" },
  "21.18": { pos: "noun" },
  "21.19": { pos: "noun" },
  "21.20": { pos: "noun" },
  "21.21": { pos: "noun" },
  "21.22": { pos: "noun" },
  "21.23": { pos: "noun" },
  "21.24": { pos: "noun" },
  "21.25": { pos: "noun" },
  "21.26": { pos: "noun" },
  "21.27": { pos: "noun" },
  "21.28": { pos: "noun" },
  "21.29": { pos: "noun" },
  "21.30": { pos: "noun" },
  "21.31": { pos: "adverb" },
  "21.32": { pos: "adverb" },
  "21.33": { pos: "adverb" },
  "21.34": { pos: "adverb" },
  "21.35": { pos: "adverb" },
  "21.36": { pos: "other" },          // ～に ついて
  "21.37": { pos: "phrase" },
  "21.38": { pos: "phrase" },
  "21.39": { pos: "adverb" },
  "21.40": { pos: "phrase" },
  "21.41": { pos: "noun" },
  "21.42": { pos: "noun" },
  "21.43": { pos: "noun" },
  "21.44": { pos: "noun" },
  "21.45": { pos: "noun" },
  "21.46": { pos: "noun" },
  "21.47": { pos: "noun" },
  "21.48": { pos: "noun" },
  "21.49": { pos: "noun" },
  "21.50": { pos: "noun" },
  "21.51": { pos: "noun" },
  "21.52": { pos: "verb", group: 2 }, // 足ります (たりる)
  "21.53": { pos: "noun" },           // 同じ — treat as noun (doesn't take な)
  "21.54": { pos: "noun" },
  "21.55": { pos: "noun" },
  "21.56": { pos: "noun" },
  "21.57": { pos: "noun" },
  "21.58": { pos: "noun" },
  "21.59": { pos: "noun" },
  "21.60": { pos: "noun" },
  "21.61": { pos: "noun" },
  "21.62": { pos: "phrase" },
  "21.63": { pos: "phrase" },
  "21.64": { pos: "phrase" },

  // ---------- LESSON 22 ----------
  "22.1": { pos: "verb", group: 2 },  // 着ます (きる — wear, G2)
  "22.2": { pos: "verb", group: 1 },  // はきます (はく)
  "22.3": { pos: "verb", group: 1 },  // かぶります (かぶる)
  "22.4": { pos: "verb", group: 2 },  // かけます[眼鏡を~]
  "22.5": { pos: "verb", group: 3 }, // します[ネクタイを~]
  "22.6": { pos: "verb", group: 2 },  // 生まれます (うまれる)
  "22.7": { pos: "noun" },            // わたしたち
  "22.8": { pos: "noun" },
  "22.9": { pos: "noun" },
  "22.10": { pos: "noun" },
  "22.11": { pos: "noun" },
  "22.12": { pos: "noun" },
  "22.13": { pos: "noun" },
  "22.14": { pos: "noun" },
  "22.15": { pos: "noun" },
  "22.16": { pos: "noun" },
  "22.17": { pos: "noun" },
  "22.18": { pos: "adverb" },         // よく
  "22.19": { pos: "phrase" },         // えーと
  "22.20": { pos: "phrase" },
  "22.21": { pos: "phrase" },
  "22.22": { pos: "other" },          // では
  "22.23": { pos: "other" },          // こちら
  "22.24": { pos: "noun" },
  "22.25": { pos: "noun" },
  "22.26": { pos: "noun" },
  "22.27": { pos: "noun" },
  "22.28": { pos: "noun" },
  "22.29": { pos: "noun" },
  "22.30": { pos: "noun" },
  "22.31": { pos: "noun" },
  "22.32": { pos: "phrase" },
  "22.33": { pos: "noun" },
  "22.34": { pos: "noun" },
  "22.35": { pos: "noun" },

  // ---------- LESSON 23 ----------
  "23.1": { pos: "verb", group: 1 },  // 聞きます[先生に~] (ask)
  "23.2": { pos: "verb", group: 1 },  // 回します (まわす)
  "23.3": { pos: "verb", group: 1 },  // 引きます (ひく)
  "23.4": { pos: "verb", group: 2 },  // 変えます (かえる)
  "23.5": { pos: "verb", group: 1 },  // 触ります (さわる)
  "23.6": { pos: "verb", group: 2 },  // 出ます[お釣りが~] (でる)
  "23.7": { pos: "verb", group: 1 },  // 歩きます (あるく)
  "23.8": { pos: "verb", group: 1 },  // 渡ります (わたる)
  "23.9": { pos: "verb", group: 1 },  // 曲がります (まがる)
  "23.10": { pos: "i-adj" },          // 寂しい
  "23.11": { pos: "noun" },
  "23.12": { pos: "noun" },
  "23.13": { pos: "noun" },
  "23.14": { pos: "noun" },
  "23.15": { pos: "noun" },
  "23.16": { pos: "noun" },
  "23.17": { pos: "noun" },
  "23.18": { pos: "noun" },
  "23.19": { pos: "noun" },
  "23.20": { pos: "noun" },
  "23.21": { pos: "noun" },
  "23.22": { pos: "adverb" },
  "23.23": { pos: "other" },          // －目
  "23.24": { pos: "noun" },
  "23.25": { pos: "noun" },
  "23.26": { pos: "noun" },
  "23.27": { pos: "noun" },
  "23.28": { pos: "noun" },
  "23.29": { pos: "verb", group: 1 }, // 動きます[時計が~]
  "23.30": { pos: "phrase" },         // 気を つけます[車に~]
  "23.31": { pos: "verb", group: 3 }, // 引っ越しします
  "23.32": { pos: "noun" },
  "23.33": { pos: "other" },
  "23.34": { pos: "noun" },
  "23.35": { pos: "noun" },
  "23.36": { pos: "noun" },
  "23.37": { pos: "phrase" },
  "23.38": { pos: "noun" },

  // ---------- LESSON 24 ----------
  "24.1": { pos: "verb", group: 2 },  // くれます (くれる)
  "24.2": { pos: "verb", group: 1 },  // 直します (なおす)
  "24.3": { pos: "phrase" },          // 連れて 行きます
  "24.4": { pos: "phrase" },          // 連れて 来ます
  "24.5": { pos: "verb", group: 1 },  // 送ります[人を~]
  "24.6": { pos: "verb", group: 3 }, // 紹介します
  "24.7": { pos: "verb", group: 3 }, // 案内します
  "24.8": { pos: "verb", group: 3 }, // 説明します
  "24.9": { pos: "noun" },
  "24.10": { pos: "noun" },
  "24.11": { pos: "noun" },
  "24.12": { pos: "noun" },
  "24.13": { pos: "noun" },
  "24.14": { pos: "noun" },
  "24.15": { pos: "noun" },
  "24.16": { pos: "adverb" },
  "24.17": { pos: "adverb" },
  "24.18": { pos: "noun" },
  "24.19": { pos: "verb", group: 2 }, // いれます[コーヒーを~]
  "24.20": { pos: "noun" },
  "24.21": { pos: "noun" },
  "24.22": { pos: "noun" },

  // ---------- LESSON 25 ----------
  "25.1": { pos: "verb", group: 2 },  // 考えます (かんがえる)
  "25.2": { pos: "verb", group: 1 },  // 着きます (つく — arrive, G1)
  "25.3": { pos: "verb", group: 1 },  // 取ります[年を~]
  "25.4": { pos: "verb", group: 2 },  // 足ります (たりる)
  "25.5": { pos: "noun" },
  "25.6": { pos: "noun" },
  "25.7": { pos: "noun" },
  "25.8": { pos: "adverb" },          // もし[〜たら]
  "25.9": { pos: "noun" },
  "25.10": { pos: "phrase" },
  "25.11": { pos: "noun" },
  "25.12": { pos: "noun" },           // こと (abstract noun)
  "25.13": { pos: "noun" },           // 暇 — as noun "free time"
  "25.14": { pos: "phrase" },
  "25.15": { pos: "verb", group: 1 }, // 頑張ります (がんばる)
  "25.16": { pos: "phrase" },
  "25.17": { pos: "noun" },
  "25.18": { pos: "verb", group: 3 }, // 留学します
  "25.19": { pos: "noun" },
  "25.20": { pos: "noun" },
  "25.21": { pos: "other" },          // いくら[〜でも]
  "25.22": { pos: "phrase" },
};
