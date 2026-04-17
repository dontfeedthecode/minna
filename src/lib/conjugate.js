// Conjugation engine scoped to Minna no Nihongo lessons 10-20.
//
// Input: a word entry from src/data/vocab.json with at least
//   { kana, pos, group?, irregular?, note? }
// Output: a structured table of forms, or null if the word isn't
// conjugable (noun/phrase/other) or is flagged irregular without a rule.

// Strip bracketed context such as "います［子どもが～］" → "います"
// and "いろいろ［な］" → "いろいろ".
const BRACKET_RE = /[［\[].*?[］\]]/g;

function cleanKana(kana) {
  return (kana || "").replace(BRACKET_RE, "").replace(/\s+/g, "").trim();
}

// Final い-row kana → う-row kana, for deriving Group I dictionary forms.
const I_TO_U = {
  "い": "う",
  "き": "く",
  "ぎ": "ぐ",
  "し": "す",
  "ち": "つ",
  "に": "ぬ",
  "ひ": "ふ",
  "び": "ぶ",
  "ぴ": "ぷ",
  "み": "む",
  "り": "る",
};

// Final う-row kana → あ-row kana, for deriving the ない-form root from
// the Group I dictionary form (う becomes わ, not あ).
const U_TO_A = {
  "う": "わ",
  "く": "か",
  "ぐ": "が",
  "す": "さ",
  "つ": "た",
  "ぬ": "な",
  "ふ": "は",
  "ぶ": "ば",
  "ぷ": "ぱ",
  "む": "ま",
  "る": "ら",
};

// Te-form / ta-form endings for Group I verbs, keyed by the final kana of
// the dictionary form.
const G1_TE = {
  "う": "って",
  "つ": "って",
  "る": "って",
  "む": "んで",
  "ぶ": "んで",
  "ぬ": "んで",
  "く": "いて",
  "ぐ": "いで",
  "す": "して",
};
const G1_TA = {
  "う": "った",
  "つ": "った",
  "る": "った",
  "む": "んだ",
  "ぶ": "んだ",
  "ぬ": "んだ",
  "く": "いた",
  "ぐ": "いだ",
  "す": "した",
};

// Called with a Group I dictionary form. Returns { te, ta }.
function g1TeTa(dict) {
  // Irregular: 行く → 行って / 行った
  if (dict === "いく" || dict === "行く") {
    return { te: "いって", ta: "いった" };
  }
  const last = dict.slice(-1);
  const stem = dict.slice(0, -1);
  const teEnd = G1_TE[last];
  const taEnd = G1_TA[last];
  if (!teEnd) return { te: null, ta: null };
  return { te: stem + teEnd, ta: stem + taEnd };
}

// Derive the dictionary form from a Group I ます-form.
function g1Dict(masuForm) {
  // masuForm ends in ます. Stem = masuForm without ます. The mora just
  // before ます is い-row; swap it to its う-row counterpart.
  const stem = masuForm.slice(0, -2); // drop "ます"
  const last = stem.slice(-1);
  const next = I_TO_U[last];
  if (!next) return null;
  return stem.slice(0, -1) + next;
}

// Derive the dictionary form from a Group II ます-form.
// たべます → たべる
function g2Dict(masuForm) {
  const stem = masuForm.slice(0, -2); // drop "ます"
  return stem + "る";
}

// Conjugate a suru-compound verb: "prefix + します" → set of forms built
// on "prefix + する".
function suruCompound(masuForm) {
  const prefix = masuForm.slice(0, -3); // drop "します"
  return {
    dict: prefix + "する",
    te: prefix + "して",
    ta: prefix + "した",
    nai: prefix + "しない",
    naiPast: prefix + "しなかった",
    tai: prefix + "したい",
    polite: {
      present: prefix + "します",
      neg: prefix + "しません",
      past: prefix + "しました",
      pastNeg: prefix + "しませんでした",
    },
  };
}

function kuruForms() {
  return {
    dict: "くる",
    te: "きて",
    ta: "きた",
    nai: "こない",
    naiPast: "こなかった",
    tai: "きたい",
    polite: {
      present: "きます",
      neg: "きません",
      past: "きました",
      pastNeg: "きませんでした",
    },
  };
}

export function conjugateVerb(word) {
  const masu = cleanKana(word.kana);
  if (!masu.endsWith("ます")) return null;

  const group = word.group;
  const stem = masu.slice(0, -2); // ます-stem (e.g. たべ, かき, し)

  // Group III first — disambiguate する vs くる and suru compounds.
  if (group === 3) {
    if (masu === "きます") return kuruForms();
    // Everything else that's G3 we treat as a suru-compound, including
    // plain "します".
    return suruCompound(masu);
  }

  if (group === 2) {
    const dict = g2Dict(masu);
    const bare = dict.slice(0, -1); // stem without る
    return {
      dict,
      te: bare + "て",
      ta: bare + "た",
      nai: bare + "ない",
      naiPast: bare + "なかった",
      tai: stem + "たい",
      polite: {
        present: masu,
        neg: stem + "ません",
        past: stem + "ました",
        pastNeg: stem + "ませんでした",
      },
    };
  }

  if (group === 1) {
    const dict = g1Dict(masu);
    if (!dict) return null;
    const { te, ta } = g1TeTa(dict);
    const dictLast = dict.slice(-1);
    const dictStem = dict.slice(0, -1);
    const naiBase = dictStem + (U_TO_A[dictLast] || "");
    return {
      dict,
      te,
      ta,
      nai: naiBase + "ない",
      naiPast: naiBase + "なかった",
      tai: stem + "たい",
      polite: {
        present: masu,
        neg: stem + "ません",
        past: stem + "ました",
        pastNeg: stem + "ませんでした",
      },
    };
  }

  return null;
}

export function conjugateIAdj(word) {
  const kana = cleanKana(word.kana);
  if (!kana.endsWith("い")) return null;

  // いい / よい is irregular — non-present forms are built on よ-.
  const isII = kana === "いい" || word.irregular;
  const stem = isII ? "よ" : kana.slice(0, -1);

  return {
    present: kana,
    neg: stem + "くない",
    past: stem + "かった",
    pastNeg: stem + "くなかった",
    te: stem + "くて",
    adverb: stem + "く",
    politePresent: kana + "です",
    politeNeg: stem + "くないです",
    politePast: stem + "かったです",
    politePastNeg: stem + "くなかったです",
  };
}

export function conjugateNaAdj(word) {
  const kana = cleanKana(word.kana);
  if (!kana) return null;

  return {
    present: kana + "だ",
    neg: kana + "じゃない",
    past: kana + "だった",
    pastNeg: kana + "じゃなかった",
    te: kana + "で",
    adverb: kana + "に",
    politePresent: kana + "です",
    politeNeg: kana + "じゃありません",
    politePast: kana + "でした",
    politePastNeg: kana + "じゃありませんでした",
  };
}

// Top-level dispatcher. Returns { kind, forms, note } or null.
export function conjugate(word) {
  if (!word) return null;
  switch (word.pos) {
    case "verb": {
      const forms = conjugateVerb(word);
      if (!forms) return null;
      return { kind: "verb", group: word.group, forms, note: word.note };
    }
    case "i-adj": {
      const forms = conjugateIAdj(word);
      if (!forms) return null;
      return { kind: "i-adj", forms, note: word.note };
    }
    case "na-adj": {
      const forms = conjugateNaAdj(word);
      if (!forms) return null;
      return { kind: "na-adj", forms, note: word.note };
    }
    default:
      return null;
  }
}
