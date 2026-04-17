export const LESSONS = [
  {
    num: 1,
    title: "じこしょうかい",
    titleEn: "Self-introduction & です",
    grammar: [
      {
        structure: "N₁は N₂です",
        meaning: "N₁ is N₂",
        formation: "Noun₁ は Noun₂ です",
        examples: [
          { jp: "わたしは　マイクです。", rm: "Watashi wa Maiku desu.", en: "I am Mike." },
          { jp: "ミラーさんは　かいしゃいんです。", rm: "Mirā-san wa kaishain desu.", en: "Mr. Miller is a company employee." },
        ],
        note: "は is the topic particle — always written は but pronounced 'wa'. です is the polite copula.",
      },
      {
        structure: "N₁は N₂じゃありません",
        meaning: "N₁ is not N₂",
        formation: "Noun₁ は Noun₂ じゃ（では）ありません",
        examples: [
          { jp: "わたしは　がくせいじゃありません。", rm: "Watashi wa gakusei ja arimasen.", en: "I am not a student." },
          { jp: "かれは　せんせいでは　ありません。", rm: "Kare wa sensei de wa arimasen.", en: "He is not a teacher." },
        ],
        note: "じゃありません is informal-polite; ではありません is more formal. Both mean 'is not'.",
      },
      {
        structure: "〜か",
        meaning: "Yes/no question marker",
        formation: "Sentence ＋ か (rising intonation)",
        examples: [
          { jp: "たなかさんは　がくせいですか。", rm: "Tanaka-san wa gakusei desu ka.", en: "Is Mr. Tanaka a student?" },
          { jp: "はい、がくせいです。", rm: "Hai, gakusei desu.", en: "Yes, he is." },
          { jp: "いいえ、がくせいじゃありません。", rm: "Iie, gakusei ja arimasen.", en: "No, he is not." },
        ],
        note: "Just add か at the end. No question mark needed (though casually you'll see 「？」too).",
      },
      {
        structure: "N₁の N₂",
        meaning: "Possessive / belonging の",
        formation: "Noun₁ の Noun₂",
        examples: [
          { jp: "わたしの　ほんです。", rm: "Watashi no hon desu.", en: "It's my book." },
          { jp: "ミラーさんは　IMCの　しゃいんです。", rm: "Mirā-san wa IMC no shain desu.", en: "Mr. Miller is an employee of IMC." },
        ],
        note: "の links two nouns — possession, affiliation, or descriptive relationship.",
      },
    ],
  },
  {
    num: 2,
    title: "これ・それ・あれ",
    titleEn: "Demonstratives & Noun Phrases",
    grammar: [
      {
        structure: "これ／それ／あれ は Nです",
        meaning: "This / that / that (over there) is N",
        formation: "これ・それ・あれ は Noun です",
        examples: [
          { jp: "これは　ほんです。", rm: "Kore wa hon desu.", en: "This is a book." },
          { jp: "それは　なんですか。", rm: "Sore wa nan desu ka.", en: "What is that?" },
          { jp: "あれは　とけいです。", rm: "Are wa tokei desu.", en: "That (over there) is a clock." },
        ],
        note: "これ = near me, それ = near you, あれ = away from both of us.",
      },
      {
        structure: "この／その／あの N",
        meaning: "This / that / that N (attributive)",
        formation: "この・その・あの ＋ Noun",
        examples: [
          { jp: "このほんは　わたしのです。", rm: "Kono hon wa watashi no desu.", en: "This book is mine." },
          { jp: "そのかばんは　ミラーさんのです。", rm: "Sono kaban wa Mirā-san no desu.", en: "That bag is Mr. Miller's." },
        ],
        note: "Use この／その／あの directly before a noun; use これ／それ／あれ as standalone pronouns.",
      },
      {
        structure: "N₁の N₂",
        meaning: "N₂ of / belonging to / made by N₁",
        formation: "Noun₁ の Noun₂",
        examples: [
          { jp: "これは　にほんの　くるまです。", rm: "Kore wa Nihon no kuruma desu.", en: "This is a Japanese car." },
          { jp: "それは　コンピューターの　ほんです。", rm: "Sore wa konpyūtā no hon desu.", en: "That's a book about computers." },
        ],
        note: "の is extremely versatile — possession, origin, topic, material, relationship.",
      },
      {
        structure: "そうです／そうじゃありません",
        meaning: "Yes (it is) / No (it isn't)",
        formation: "Affirmative: そうです. Negative: そうじゃありません / ちがいます.",
        examples: [
          { jp: "それは　じしょですか。ーはい、そうです。", rm: "Sore wa jisho desu ka. — Hai, sō desu.", en: "Is that a dictionary? — Yes, it is." },
          { jp: "これは　ノートですか。ーいいえ、ちがいます。", rm: "Kore wa nōto desu ka. — Iie, chigaimasu.", en: "Is this a notebook? — No, it isn't." },
        ],
        note: "ちがいます (lit. 'it differs') is the natural negative reply to a noun-identification question.",
      },
    ],
  },
  {
    num: 3,
    title: "ここ・そこ・あそこ",
    titleEn: "Places & Prices",
    grammar: [
      {
        structure: "ここ／そこ／あそこ は 〜です",
        meaning: "Here / there / over there is 〜",
        formation: "ここ・そこ・あそこ は Noun です",
        examples: [
          { jp: "ここは　じむしょです。", rm: "Koko wa jimusho desu.", en: "This (place) is the office." },
          { jp: "あそこは　しょくどうです。", rm: "Asoko wa shokudō desu.", en: "Over there is the cafeteria." },
        ],
        note: "こちら・そちら・あちら are the polite equivalents — common in shops and formal settings.",
      },
      {
        structure: "Nは どこですか",
        meaning: "Where is N?",
        formation: "Noun は どこ ですか",
        examples: [
          { jp: "トイレは　どこですか。", rm: "Toire wa doko desu ka.", en: "Where is the toilet?" },
          { jp: "ミラーさんは　どこですか。", rm: "Mirā-san wa doko desu ka.", en: "Where is Mr. Miller?" },
          { jp: "じむしょは　にかいです。", rm: "Jimusho wa nikai desu.", en: "The office is on the 2nd floor." },
        ],
      },
      {
        structure: "いくらですか",
        meaning: "How much is it?",
        formation: "Noun は いくら ですか",
        examples: [
          { jp: "このかばんは　いくらですか。", rm: "Kono kaban wa ikura desu ka.", en: "How much is this bag?" },
          { jp: "それは　せんえんです。", rm: "Sore wa sen'en desu.", en: "That's 1,000 yen." },
        ],
        note: "いくら only asks about price. For other quantities, use the appropriate counter (いくつ, なんこ, etc.)",
      },
    ],
  },
  {
    num: 4,
    title: "じかんと どうし",
    titleEn: "Time & Verbs",
    grammar: [
      {
        structure: "Verb ます／ません／ました／ませんでした",
        meaning: "Present, negative, past, past-negative polite verb forms",
        formation: "Verb stem ＋ ます／ません／ました／ませんでした",
        examples: [
          { jp: "まいにち　べんきょうします。", rm: "Mainichi benkyō shimasu.", en: "I study every day." },
          { jp: "きょうは　はたらきません。", rm: "Kyō wa hatarakimasen.", en: "I don't work today." },
          { jp: "きのう　にほんごを　べんきょうしました。", rm: "Kinō nihongo o benkyō shimashita.", en: "I studied Japanese yesterday." },
        ],
        note: "This is the four-way polite tense grid. Every Minna verb lives in this frame until plain forms arrive around L18-20.",
      },
      {
        structure: "Time に Verb",
        meaning: "Do [verb] at [specific time]",
        formation: "Time point に ＋ Verb",
        examples: [
          { jp: "まいあさ　６じに　おきます。", rm: "Maiasa rokuji ni okimasu.", en: "I get up at 6 every morning." },
          { jp: "にちようびに　えいがを　みました。", rm: "Nichiyōbi ni eiga o mimashita.", en: "I watched a movie on Sunday." },
        ],
        note: "に attaches to specific time points (o'clock, day, date). Don't use it with きょう, あした, いま, etc.",
      },
      {
        structure: "〜から 〜まで",
        meaning: "From 〜 to / until 〜",
        formation: "Start から End まで",
        examples: [
          { jp: "９じから　５じまで　はたらきます。", rm: "Kuji kara goji made hatarakimasu.", en: "I work from 9 to 5." },
          { jp: "げつようびから　きんようびまで　がっこうが　あります。", rm: "Getsuyōbi kara kin'yōbi made gakkō ga arimasu.", en: "School is from Monday to Friday." },
        ],
        note: "Works for time, dates, places. Either end can be omitted — '～から' alone = 'from ～'.",
      },
      {
        structure: "N₁と N₂",
        meaning: "N₁ and N₂",
        formation: "Noun₁ と Noun₂",
        examples: [
          { jp: "ぎんこうと　ゆうびんきょくに　いきます。", rm: "Ginkō to yūbinkyoku ni ikimasu.", en: "I'll go to the bank and the post office." },
        ],
        note: "と connects nouns in exhaustive lists. For non-exhaustive 'and others' use や (L10).",
      },
    ],
  },
  {
    num: 5,
    title: "いどう",
    titleEn: "Going, Coming, Returning",
    grammar: [
      {
        structure: "Placeへ いきます／きます／かえります",
        meaning: "Go to / come to / return to a place",
        formation: "Place へ ＋ Verb of motion",
        examples: [
          { jp: "きょうと　へ　いきます。", rm: "Kyōto e ikimasu.", en: "I'll go to Kyoto." },
          { jp: "らいねん　にほんへ　きます。", rm: "Rainen Nihon e kimasu.", en: "Next year I'll come to Japan." },
          { jp: "８じに　うちへ　かえります。", rm: "Hachiji ni uchi e kaerimasu.", en: "I'll return home at 8." },
        ],
        note: "へ is written へ but pronounced 'e'. に also works for direction but へ is the classic movement particle.",
      },
      {
        structure: "〜で Place-verb",
        meaning: "By (means of transportation)",
        formation: "Transport で Verb of motion",
        examples: [
          { jp: "でんしゃで　とうきょうへ　いきます。", rm: "Densha de Tōkyō e ikimasu.", en: "I'll go to Tokyo by train." },
          { jp: "あるいて　かいしゃへ　いきます。", rm: "Aruite kaisha e ikimasu.", en: "I walk to the office." },
        ],
        note: "あるいて ('on foot') is a set phrase and doesn't take で.",
      },
      {
        structure: "〜と いっしょに",
        meaning: "Together with 〜",
        formation: "Person と いっしょに Verb",
        examples: [
          { jp: "ともだちと　いっしょに　えいがを　みました。", rm: "Tomodachi to issho ni eiga o mimashita.", en: "I watched a movie with a friend." },
          { jp: "かぞくと　いっしょに　りょこうします。", rm: "Kazoku to issho ni ryokō shimasu.", en: "I'll travel with my family." },
        ],
      },
      {
        structure: "いつ〜ますか",
        meaning: "When will you 〜?",
        formation: "いつ Verb ますか",
        examples: [
          { jp: "いつ　にほんへ　きましたか。", rm: "Itsu Nihon e kimashita ka.", en: "When did you come to Japan?" },
          { jp: "らいげつ　かえります。", rm: "Raigetsu kaerimasu.", en: "I'll go back next month." },
        ],
        note: "いつ ('when') takes no particle. Specific time points take に (e.g. ３じに), but いつ does not.",
      },
    ],
  },
  {
    num: 6,
    title: "どうしの もくてきご",
    titleEn: "Verbs, Objects & Invitations",
    grammar: [
      {
        structure: "Nを Verb",
        meaning: "Direct object marker",
        formation: "Noun を Verb",
        examples: [
          { jp: "ごはんを　たべます。", rm: "Gohan o tabemasu.", en: "I eat a meal." },
          { jp: "みずを　のみます。", rm: "Mizu o nomimasu.", en: "I drink water." },
          { jp: "ほんを　よみます。", rm: "Hon o yomimasu.", en: "I read a book." },
        ],
        note: "を is written を but pronounced 'o'. Marks whatever the verb acts on.",
      },
      {
        structure: "Place で Verb",
        meaning: "Do [verb] at [place]",
        formation: "Place で Verb",
        examples: [
          { jp: "レストランで　ごはんを　たべます。", rm: "Resutoran de gohan o tabemasu.", en: "I eat at a restaurant." },
          { jp: "としょかんで　べんきょうします。", rm: "Toshokan de benkyō shimasu.", en: "I study at the library." },
        ],
        note: "Don't confuse で (action location) with に (existence location — L10) or へ (destination — L5).",
      },
      {
        structure: "〜を します",
        meaning: "Do / play 〜",
        formation: "Activity noun を します",
        examples: [
          { jp: "テニスを　します。", rm: "Tenisu o shimasu.", en: "I play tennis." },
          { jp: "しゅくだいを　します。", rm: "Shukudai o shimasu.", en: "I do homework." },
        ],
        note: "する attaches to many activity nouns to make them verbs.",
      },
      {
        structure: "〜ませんか／〜ましょう",
        meaning: "Won't you 〜? / Let's 〜",
        formation: "Verb ませんか (invitation) / Verb ましょう (suggestion)",
        examples: [
          { jp: "いっしょに　ひるごはんを　たべませんか。", rm: "Issho ni hirugohan o tabemasen ka.", en: "Won't you have lunch together?" },
          { jp: "ええ、たべましょう。", rm: "Ee, tabemashō.", en: "Yes, let's eat." },
        ],
        note: "〜ませんか is more polite / tentative (inviting); 〜ましょう assumes agreement.",
      },
    ],
  },
  {
    num: 7,
    title: "どうぐと じゅようしゃ",
    titleEn: "Tools, Giving & Receiving",
    grammar: [
      {
        structure: "〜で Verb",
        meaning: "With / by means of 〜 (tool or method)",
        formation: "Tool/method で Verb",
        examples: [
          { jp: "はしで　たべます。", rm: "Hashi de tabemasu.", en: "I eat with chopsticks." },
          { jp: "にほんごで　はなしましょう。", rm: "Nihongo de hanashimashō.", en: "Let's speak in Japanese." },
          { jp: "メールで　おくります。", rm: "Mēru de okurimasu.", en: "I'll send it by email." },
        ],
        note: "で covers tools, languages, methods, and means of transport (L5).",
      },
      {
        structure: "〜に あげます／もらいます",
        meaning: "Give to 〜 / receive from 〜",
        formation: "Recipient に あげます / Giver に（から） もらいます",
        examples: [
          { jp: "やまださんに　はなを　あげました。", rm: "Yamada-san ni hana o agemashita.", en: "I gave flowers to Mr. Yamada." },
          { jp: "ともだちに　プレゼントを　もらいました。", rm: "Tomodachi ni purezento o moraimashita.", en: "I received a present from a friend." },
        ],
        note: "に can switch with から for もらう when the source is a company/institution. Don't use あげる when the receiver is yourself — that's くれる (L24).",
      },
      {
        structure: "もう 〜ました／まだ",
        meaning: "Already done / not yet",
        formation: "もう Verb ました ↔ まだです / まだ Verb ていません",
        examples: [
          { jp: "もう　ひるごはんを　たべましたか。", rm: "Mō hirugohan o tabemashita ka.", en: "Have you already had lunch?" },
          { jp: "はい、もう　たべました。", rm: "Hai, mō tabemashita.", en: "Yes, I've already eaten." },
          { jp: "いいえ、まだです。", rm: "Iie, mada desu.", en: "No, not yet." },
        ],
        note: "まだ〜ていません (the full form) arrives properly after て-form (L14); for now まだです is the short answer.",
      },
      {
        structure: "N₁に N₂を おしえます／ならいます",
        meaning: "Teach N₂ to N₁ / learn N₂ from N₁",
        formation: "Person に Thing を おしえます／ならいます",
        examples: [
          { jp: "たなかさんに　にほんごを　ならいます。", rm: "Tanaka-san ni nihongo o naraimasu.", en: "I learn Japanese from Mr. Tanaka." },
          { jp: "こどもに　えいごを　おしえます。", rm: "Kodomo ni eigo o oshiemasu.", en: "I teach English to children." },
        ],
      },
    ],
  },
  {
    num: 8,
    title: "けいようし",
    titleEn: "Adjectives",
    grammar: [
      {
        structure: "い-adj / な-adj + です",
        meaning: "Predicate adjective (X is [adj])",
        formation: "い-adj ＋ です / な-adj ＋ です",
        examples: [
          { jp: "このラーメンは　おいしいです。", rm: "Kono rāmen wa oishii desu.", en: "This ramen is delicious." },
          { jp: "このへやは　しずかです。", rm: "Kono heya wa shizuka desu.", en: "This room is quiet." },
        ],
        note: "い-adj keep their い: あつい → あついです. な-adj drop the な before です: きれいな → きれいです.",
      },
      {
        structure: "Adjective negative & past",
        meaning: "Negative, past, and past-negative adjective forms",
        formation: "い-adj: 〜くないです / 〜かったです / 〜くなかったです. な-adj: 〜じゃありません / 〜でした / 〜じゃありませんでした.",
        examples: [
          { jp: "このほんは　おもしろくないです。", rm: "Kono hon wa omoshirokunai desu.", en: "This book isn't interesting." },
          { jp: "きのうは　あつかったです。", rm: "Kinō wa atsukatta desu.", en: "Yesterday was hot." },
          { jp: "テストは　かんたんじゃありませんでした。", rm: "Tesuto wa kantan ja arimasen deshita.", en: "The test wasn't easy." },
        ],
        note: "Irregular: いい → よくない / よかった / よくなかった. Never conjugate it as *いくない.",
      },
      {
        structure: "Adjective + Noun (attributive)",
        meaning: "Describing a noun directly",
        formation: "い-adj ＋ Noun / な-adj ＋ な ＋ Noun",
        examples: [
          { jp: "あたらしい　くるまを　かいました。", rm: "Atarashii kuruma o kaimashita.", en: "I bought a new car." },
          { jp: "しずかな　まちですね。", rm: "Shizuka na machi desu ne.", en: "It's a quiet town, isn't it?" },
          { jp: "ハンサムな　ひとですね。", rm: "Hansamu na hito desu ne.", en: "He's a handsome man, isn't he?" },
        ],
        note: "な-adjectives keep their な when modifying a noun directly.",
      },
      {
        structure: "とても / あまり",
        meaning: "Very / not very",
        formation: "とても ＋ adj (any polarity) / あまり ＋ neg. adj",
        examples: [
          { jp: "この　えいがは　とても　おもしろいです。", rm: "Kono eiga wa totemo omoshiroi desu.", en: "This movie is very interesting." },
          { jp: "この　しごとは　あまり　たいへんじゃありません。", rm: "Kono shigoto wa amari taihen ja arimasen.", en: "This job isn't very difficult." },
        ],
        note: "あまり always pairs with a negative.",
      },
    ],
  },
  {
    num: 9,
    title: "すきな もの",
    titleEn: "Likes, Abilities & Because",
    grammar: [
      {
        structure: "Nが すき／きらい／じょうず／へた です",
        meaning: "Likes / dislikes / is good at / is bad at N",
        formation: "Noun が Adj (な-adj) です",
        examples: [
          { jp: "にほんりょうりが　すきです。", rm: "Nihon ryōri ga suki desu.", en: "I like Japanese food." },
          { jp: "うたが　じょうずです。", rm: "Uta ga jōzu desu.", en: "(They) are good at singing." },
          { jp: "うんどうが　きらいです。", rm: "Undō ga kirai desu.", en: "I dislike exercise." },
        ],
        note: "These な-adjectives take が (not を), even when the English uses a direct object.",
      },
      {
        structure: "〜が わかります／あります",
        meaning: "I understand 〜 / I have 〜",
        formation: "Noun が わかります / Noun が あります",
        examples: [
          { jp: "にほんごが　わかります。", rm: "Nihongo ga wakarimasu.", en: "I understand Japanese." },
          { jp: "じかんが　ありません。", rm: "Jikan ga arimasen.", en: "I don't have time." },
          { jp: "こどもが　ふたり　います。", rm: "Kodomo ga futari imasu.", en: "I have two children." },
        ],
        note: "わかる, ある, いる, できる — all 'stative' — take が to mark what you understand/possess.",
      },
      {
        structure: "〜から、〜",
        meaning: "Because 〜 (reason)",
        formation: "Reason clause から、 Main clause",
        examples: [
          { jp: "あしたは　やすみですから、こうえんへ　いきます。", rm: "Ashita wa yasumi desu kara, kōen e ikimasu.", en: "Because tomorrow is a holiday, I'll go to the park." },
          { jp: "いそがしいですから、いきません。", rm: "Isogashii desu kara, ikimasen.", en: "Because I'm busy, I won't go." },
        ],
        note: "The reason comes first. Different from English order — 'because' clause precedes the result.",
      },
      {
        structure: "どうして？ー〜からです",
        meaning: "Why? — Because 〜",
        formation: "どうして〜か → 〜からです",
        examples: [
          { jp: "どうして　きのう　やすみましたか。", rm: "Dōshite kinō yasumimashita ka.", en: "Why did you take yesterday off?" },
          { jp: "びょうきでしたから。", rm: "Byōki deshita kara.", en: "Because I was sick." },
        ],
        note: "The answer often drops です and ends with just 〜から in casual speech.",
      },
    ],
  },
  {
    num: 10,
    title: "あります と います",
    titleEn: "Existence & Location",
    grammar: [
      {
        structure: "〜に 〜が あります",
        meaning: "There is [inanimate thing] at [place]",
        formation: "Place に Thing が あります",
        examples: [
          { jp: "へやに　テレビが　あります。", rm: "Heya ni terebi ga arimasu.", en: "There is a TV in the room." },
          { jp: "つくえの うえに　ほんが　あります。", rm: "Tsukue no ue ni hon ga arimasu.", en: "There is a book on the desk." },
        ],
        note: "あります is for non-living things (objects, plants, events).",
      },
      {
        structure: "〜に 〜が います",
        meaning: "There is [living thing] at [place]",
        formation: "Place に Living thing が います",
        examples: [
          { jp: "にわに　ねこが　います。", rm: "Niwa ni neko ga imasu.", en: "There is a cat in the garden." },
          { jp: "きょうしつに　がくせいが　います。", rm: "Kyōshitsu ni gakusei ga imasu.", en: "There are students in the classroom." },
        ],
        note: "います is for people, animals — anything that moves by its own will.",
      },
      {
        structure: "〜は 〜に あります／います",
        meaning: "[Thing] is at [place]",
        formation: "Thing は Place に あります／います",
        examples: [
          { jp: "ゆうびんきょくは　えきの　ちかくに　あります。", rm: "Yūbinkyoku wa eki no chikaku ni arimasu.", en: "The post office is near the station." },
          { jp: "ミラーさんは　じむしょに　います。", rm: "Mirā-san wa jimusho ni imasu.", en: "Mr. Miller is in the office." },
        ],
        note: "Use は when the topic (thing/person) is already known, and you're telling where it is.",
      },
      {
        structure: "うえ・した・まえ・うしろ・なか・そと・みぎ・ひだり・となり・あいだ",
        meaning: "On, under, in front, behind, inside, outside, right, left, next to, between",
        formation: "Noun の Position word",
        examples: [
          { jp: "はこの　なかに　りんごが　あります。", rm: "Hako no naka ni ringo ga arimasu.", en: "There are apples inside the box." },
          { jp: "ぎんこうと　びょういんの　あいだに　はなやが　あります。", rm: "Ginkō to byōin no aida ni hanaya ga arimasu.", en: "There is a flower shop between the bank and the hospital." },
        ],
      },
    ],
  },
  {
    num: 11,
    title: "じょすうし",
    titleEn: "Counters & Quantities",
    grammar: [
      {
        structure: "Counter words",
        meaning: "Counting things with specific counters",
        formation: "Number ＋ Counter",
        examples: [
          { jp: "りんごを　３つ　ください。", rm: "Ringo o mittsu kudasai.", en: "Please give me 3 apples." },
          { jp: "きってを　５まい　かいました。", rm: "Kitte o gomai kaimashita.", en: "I bought 5 stamps." },
        ],
        note: "Common counters: 〜つ (general), 〜にん (people), 〜まい (flat things), 〜だい (machines/vehicles), 〜ほん (long things), 〜はい (cups/glasses), 〜かい (times), 〜ひき (small animals).",
      },
      {
        structure: "どのくらい",
        meaning: "How long / how much (duration)",
        formation: "どのくらい ＋ Verb",
        examples: [
          { jp: "どのくらい　かかりますか。", rm: "Dono kurai kakarimasu ka.", en: "How long does it take?" },
          { jp: "１じかんぐらい　かかります。", rm: "Ichijikan gurai kakarimasu.", en: "It takes about 1 hour." },
        ],
      },
      {
        structure: "〜だけ",
        meaning: "Only [quantity]",
        formation: "Number Counter だけ",
        examples: [
          { jp: "１かいだけ　いきました。", rm: "Ikkai dake ikimashita.", en: "I went only once." },
        ],
      },
    ],
  },
  {
    num: 12,
    title: "ひかく",
    titleEn: "Past Tense & Comparisons",
    grammar: [
      {
        structure: "〜は 〜より ＋ Adj",
        meaning: "A is more [adj] than B",
        formation: "A は B より Adjective です",
        examples: [
          { jp: "にほんは　タイより　さむいです。", rm: "Nihon wa Tai yori samui desu.", en: "Japan is colder than Thailand." },
          { jp: "でんしゃは　バスより　はやいです。", rm: "Densha wa basu yori hayai desu.", en: "Trains are faster than buses." },
        ],
      },
      {
        structure: "〜と 〜と どちらが ＋ Adj",
        meaning: "Which is more [adj], A or B?",
        formation: "A と B と どちらが Adj ですか",
        examples: [
          { jp: "にくと　さかなと　どちらが　すきですか。", rm: "Niku to sakana to dochira ga suki desu ka.", en: "Which do you prefer, meat or fish?" },
          { jp: "にくの　ほうが　すきです。", rm: "Niku no hō ga suki desu.", en: "I prefer meat." },
        ],
        note: "Answer with 〜のほうが… or どちらも (both).",
      },
      {
        structure: "〜のなかで 〜が いちばん ＋ Adj",
        meaning: "[A] is the most [adj] among [group]",
        formation: "Group のなかで A が いちばん Adj です",
        examples: [
          { jp: "くだものの　なかで　なにが　いちばん　すきですか。", rm: "Kudamono no naka de nani ga ichiban suki desu ka.", en: "What fruit do you like the most?" },
          { jp: "りんごが　いちばん　すきです。", rm: "Ringo ga ichiban suki desu.", en: "I like apples the most." },
        ],
      },
      {
        structure: "Past tense: な-adj / Noun",
        meaning: "Past forms of な-adjectives and nouns",
        formation: "な-adj → 〜でした / 〜じゃありませんでした",
        examples: [
          { jp: "きょうとは　しずかでした。", rm: "Kyōto wa shizuka deshita.", en: "Kyoto was quiet." },
          { jp: "きのうは　あめでした。", rm: "Kinō wa ame deshita.", en: "Yesterday was rainy." },
        ],
      },
    ],
  },
  {
    num: 13,
    title: "〜たい・〜にいく",
    titleEn: "Desire & Purpose",
    grammar: [
      {
        structure: "〜たいです",
        meaning: "I want to [verb]",
        formation: "Verb (ます-stem) ＋ たいです",
        examples: [
          { jp: "にほんへ　いきたいです。", rm: "Nihon e ikitai desu.", en: "I want to go to Japan." },
          { jp: "なにか　つめたい　ものが　のみたいです。", rm: "Nanika tsumetai mono ga nomitai desu.", en: "I want to drink something cold." },
        ],
        note: "〜たい conjugates like an い-adjective. The object particle を can become が. Only for the speaker's desires (or questions to the listener).",
      },
      {
        structure: "〜に いきます／きます／かえります",
        meaning: "Go/come/return to do [verb]",
        formation: "Verb (ます-stem) ＋ に ＋ いきます",
        examples: [
          { jp: "こうべへ　えいがを　みに　いきます。", rm: "Kōbe e eiga o mi ni ikimasu.", en: "I'm going to Kobe to see a movie." },
          { jp: "にほんへ　にほんごを　べんきょうしに　きました。", rm: "Nihon e nihongo o benkyō shi ni kimashita.", en: "I came to Japan to study Japanese." },
        ],
      },
      {
        structure: "〜ませんか",
        meaning: "Won't you…? / Would you like to…? (invitation)",
        formation: "Verb (ます) → ませんか",
        examples: [
          { jp: "いっしょに　ひるごはんを　たべませんか。", rm: "Issho ni hirugohan o tabemasen ka.", en: "Won't you have lunch together?" },
        ],
      },
      {
        structure: "〜ましょう",
        meaning: "Let's [verb]",
        formation: "Verb (ます) → ましょう",
        examples: [
          { jp: "ちょっと　やすみましょう。", rm: "Chotto yasumimashō.", en: "Let's take a break." },
        ],
      },
    ],
  },
  {
    num: 14,
    title: "てけい",
    titleEn: "Te-form & Requests",
    grammar: [
      {
        structure: "て-form のつくりかた",
        meaning: "The connective verb form used in many grammar patterns",
        formation: "Group I: various rules / Group II: 〜て / Group III: して・きて",
        examples: [
          { jp: "かく→かいて、のむ→のんで、たべる→たべて、する→して", rm: "kaku→kaite, nomu→nonde, taberu→tabete, suru→shite", en: "write→writing, drink→drinking, eat→eating, do→doing" },
        ],
        note: "Group I rules: く→いて, ぐ→いで, す→して, む/ぶ/ぬ→んで, う/つ/る→って. Exception: いく→いって.",
      },
      {
        structure: "〜てください",
        meaning: "Please do [verb]",
        formation: "Verb (て-form) ＋ ください",
        examples: [
          { jp: "ここに　なまえを　かいてください。", rm: "Koko ni namae o kaite kudasai.", en: "Please write your name here." },
          { jp: "すみませんが、しゃしんを　とってください。", rm: "Sumimasen ga, shashin o totte kudasai.", en: "Excuse me, please take a photo." },
        ],
      },
      {
        structure: "〜ています",
        meaning: "Is doing [verb] / Is in a state of [verb]",
        formation: "Verb (て-form) ＋ います",
        examples: [
          { jp: "いま　ほんを　よんでいます。", rm: "Ima hon o yonde imasu.", en: "I'm reading a book now." },
          { jp: "たなかさんは　けっこんしています。", rm: "Tanaka-san wa kekkon shite imasu.", en: "Mr. Tanaka is married." },
        ],
        note: "Two main uses: (1) ongoing action, (2) resulting state. Context tells you which.",
      },
      {
        structure: "〜てもいいですか",
        meaning: "May I…? / Is it okay to…?",
        formation: "Verb (て-form) ＋ も いいですか",
        examples: [
          { jp: "ここで　しゃしんを　とっても　いいですか。", rm: "Koko de shashin o totte mo ii desu ka.", en: "May I take photos here?" },
        ],
      },
    ],
  },
  {
    num: 15,
    title: "〜ています（じょうたい）",
    titleEn: "Permission, Prohibition & States",
    grammar: [
      {
        structure: "〜てもいいです",
        meaning: "You may / It's okay to…",
        formation: "Verb (て-form) ＋ も いいです",
        examples: [
          { jp: "かえっても　いいですよ。", rm: "Kaette mo ii desu yo.", en: "You may go home." },
        ],
      },
      {
        structure: "〜てはいけません",
        meaning: "You must not / You may not…",
        formation: "Verb (て-form) ＋ は いけません",
        examples: [
          { jp: "ここで　タバコを　すっては　いけません。", rm: "Koko de tabako o sutte wa ikemasen.", en: "You must not smoke here." },
          { jp: "しゃしんを　とっては　いけません。", rm: "Shashin o totte wa ikemasen.", en: "You must not take photos." },
        ],
      },
      {
        structure: "〜ています (しごと / じょうたい)",
        meaning: "Describing states, occupations, habitual actions",
        formation: "Verb (て-form) ＋ います",
        examples: [
          { jp: "IMCで　はたらいています。", rm: "IMC de hataraite imasu.", en: "I work at IMC." },
          { jp: "おおさかに　すんでいます。", rm: "Ōsaka ni sunde imasu.", en: "I live in Osaka." },
          { jp: "ミラーさんを　しっていますか。", rm: "Mirā-san o shitte imasu ka.", en: "Do you know Mr. Miller?" },
        ],
        note: "The negative of しっています is しりません (not しっていません). すんでいます and もっています also express states.",
      },
    ],
  },
  {
    num: 16,
    title: "てけいの せつぞく",
    titleEn: "Connecting Actions & Descriptions",
    grammar: [
      {
        structure: "V₁て、V₂て、V₃",
        meaning: "Do V₁, then V₂, then V₃ (sequential actions)",
        formation: "Verb (て-form) ＋ Verb (て-form) ＋ Verb",
        examples: [
          { jp: "あさ　おきて、ごはんを　たべて、かいしゃへ　いきます。", rm: "Asa okite, gohan o tabete, kaisha e ikimasu.", en: "I wake up, eat breakfast, and go to work." },
        ],
        note: "The final verb carries the tense for the whole sentence.",
      },
      {
        structure: "〜てから",
        meaning: "After doing [verb]",
        formation: "Verb (て-form) ＋ から",
        examples: [
          { jp: "えいがを　みてから、しょくじを　しました。", rm: "Eiga o mite kara, shokuji o shimashita.", en: "After watching the movie, I had a meal." },
          { jp: "くにへ　かえってから、ちちの　かいしゃで　はたらきます。", rm: "Kuni e kaette kara, chichi no kaisha de hatarakimasu.", en: "After returning to my country, I'll work at my father's company." },
        ],
      },
      {
        structure: "い-adj → 〜くて",
        meaning: "Connecting い-adjectives",
        formation: "い → くて",
        examples: [
          { jp: "このへやは　ひろくて、あかるいです。", rm: "Kono heya wa hirokute, akarui desu.", en: "This room is spacious and bright." },
        ],
      },
      {
        structure: "な-adj / Noun → 〜で",
        meaning: "Connecting な-adjectives and nouns",
        formation: "な-adj ＋ で / Noun ＋ で",
        examples: [
          { jp: "ミラーさんは　しんせつで、おもしろいです。", rm: "Mirā-san wa shinsetsu de, omoshiroi desu.", en: "Mr. Miller is kind and interesting." },
          { jp: "ワットさんは　ぎんこういんで、どくしんです。", rm: "Watto-san wa ginkōin de, dokushin desu.", en: "Mr. Watt is a banker and is single." },
        ],
      },
    ],
  },
  {
    num: 17,
    title: "ないけい",
    titleEn: "Nai-form & Obligation",
    grammar: [
      {
        structure: "ない-form のつくりかた",
        meaning: "The plain negative verb form",
        formation: "Group I: う→あない / Group II: る→ない / Group III: しない・こない",
        examples: [
          { jp: "かく→かかない、のむ→のまない、たべる→たべない", rm: "kaku→kakanai, nomu→nomanai, taberu→tabenai", en: "write→not write, drink→not drink, eat→not eat" },
        ],
        note: "Exception: ある→ない (not あらない). Verbs ending in う→わない (e.g. あう→あわない).",
      },
      {
        structure: "〜ないでください",
        meaning: "Please don't [verb]",
        formation: "Verb (ない-form) ＋ で ください",
        examples: [
          { jp: "ここで　しゃしんを　とらないでください。", rm: "Koko de shashin o toranai de kudasai.", en: "Please don't take photos here." },
          { jp: "わすれないでください。", rm: "Wasurenai de kudasai.", en: "Please don't forget." },
        ],
      },
      {
        structure: "〜なければなりません",
        meaning: "Must / Have to [verb]",
        formation: "Verb (ない-form) → ない → なければなりません",
        examples: [
          { jp: "くすりを　のまなければなりません。", rm: "Kusuri o nomanakereba narimasen.", en: "I must take medicine." },
          { jp: "まいにち　べんきょうしなければなりません。", rm: "Mainichi benkyō shinakereba narimasen.", en: "I have to study every day." },
        ],
        note: "Drop ない, add なければなりません. Long but very common!",
      },
      {
        structure: "〜なくてもいいです",
        meaning: "Don't have to / It's okay not to…",
        formation: "Verb (ない-form) → ない → なくてもいいです",
        examples: [
          { jp: "あした　こなくてもいいです。", rm: "Ashita konakute mo ii desu.", en: "You don't have to come tomorrow." },
          { jp: "いそがなくてもいいです。", rm: "Isoganakute mo ii desu.", en: "You don't have to hurry." },
        ],
      },
    ],
  },
  {
    num: 18,
    title: "じしょけい",
    titleEn: "Dictionary Form & Ability",
    grammar: [
      {
        structure: "じしょけい（dictionary form）",
        meaning: "The base/plain present affirmative form",
        formation: "Group I: ます→u-ending / Group II: ます→る / Group III: します→する",
        examples: [
          { jp: "かきます→かく、のみます→のむ、たべます→たべる", rm: "kakimasu→kaku, nomimasu→nomu, tabemasu→taberu", en: "write, drink, eat (plain form)" },
        ],
      },
      {
        structure: "〜ことができます",
        meaning: "Can / Be able to [verb]",
        formation: "Verb (dictionary form) ＋ ことが できます",
        examples: [
          { jp: "かんじを　よむことが　できます。", rm: "Kanji o yomu koto ga dekimasu.", en: "I can read kanji." },
          { jp: "にほんごを　はなすことが　できますか。", rm: "Nihongo o hanasu koto ga dekimasu ka.", en: "Can you speak Japanese?" },
        ],
      },
      {
        structure: "しゅみは 〜ことです",
        meaning: "My hobby is [verb]-ing",
        formation: "しゅみは Verb (dictionary form) ＋ ことです",
        examples: [
          { jp: "しゅみは　えいがを　みることです。", rm: "Shumi wa eiga o miru koto desu.", en: "My hobby is watching movies." },
          { jp: "しゅみは　おんがくを　きくことです。", rm: "Shumi wa ongaku o kiku koto desu.", en: "My hobby is listening to music." },
        ],
        note: "こと nominalizes the verb (turns it into a noun).",
      },
      {
        structure: "〜まえに",
        meaning: "Before [verb]-ing",
        formation: "Verb (dictionary form) ＋ まえに / Noun の まえに",
        examples: [
          { jp: "ねるまえに、ほんを　よみます。", rm: "Neru mae ni, hon o yomimasu.", en: "Before sleeping, I read a book." },
          { jp: "しょくじのまえに、てを　あらいます。", rm: "Shokuji no mae ni, te o araimasu.", en: "Before the meal, I wash my hands." },
        ],
      },
    ],
  },
  {
    num: 19,
    title: "たけい",
    titleEn: "Ta-form & Experience",
    grammar: [
      {
        structure: "た-form のつくりかた",
        meaning: "The plain past affirmative form",
        formation: "Same sound changes as て-form, but て→た, で→だ",
        examples: [
          { jp: "かく→かいた、のむ→のんだ、たべる→たべた、する→した", rm: "kaku→kaita, nomu→nonda, taberu→tabeta, suru→shita", en: "wrote, drank, ate, did" },
        ],
        note: "If you know the て-form, you know the た-form! Just swap て→た, で→だ.",
      },
      {
        structure: "〜たことがあります",
        meaning: "Have [verb]-ed before (experience)",
        formation: "Verb (た-form) ＋ ことが あります",
        examples: [
          { jp: "ほっかいどうへ　いったことが　あります。", rm: "Hokkaidō e itta koto ga arimasu.", en: "I have been to Hokkaido before." },
          { jp: "なっとうを　たべたことが　ありません。", rm: "Nattō o tabeta koto ga arimasen.", en: "I have never eaten natto." },
        ],
      },
      {
        structure: "〜たり〜たりします",
        meaning: "Do things like [verb] and [verb]",
        formation: "Verb₁ (た-form) ＋ り、Verb₂ (た-form) ＋ り します",
        examples: [
          { jp: "にちようびは　ほんを　よんだり、えいがを　みたり　します。", rm: "Nichiyōbi wa hon o yondari, eiga o mitari shimasu.", en: "On Sundays I do things like read books and watch movies." },
        ],
        note: "Implies a non-exhaustive list — 'among other things.'",
      },
      {
        structure: "〜く／〜に なります",
        meaning: "Become [adjective]",
        formation: "い-adj: 〜く なります / な-adj: 〜に なります",
        examples: [
          { jp: "にほんごが　じょうずに　なりました。", rm: "Nihongo ga jōzu ni narimashita.", en: "My Japanese has gotten better." },
          { jp: "さむく　なりました。", rm: "Samuku narimashita.", en: "It has become cold." },
        ],
      },
    ],
  },
  {
    num: 20,
    title: "ふつうけい",
    titleEn: "Plain / Casual Form",
    grammar: [
      {
        structure: "ふつうけい（Plain form）overview",
        meaning: "The informal/casual speech style",
        formation: "Verbs, い-adj, な-adj, and Nouns each have plain forms",
        examples: [
          { jp: "いきます→いく、いきません→いかない、いきました→いった、いきませんでした→いかなかった", rm: "ikimasu→iku, ikimasen→ikanai, ikimashita→itta, ikimasen deshita→ikanakatta", en: "go (present/negative/past/past negative)" },
        ],
        note: "ふつうけい is used in casual speech and as a building block for many advanced grammar patterns.",
      },
      {
        structure: "い-adjective plain forms",
        meaning: "Casual conjugation of い-adjectives",
        formation: "Present: 〜い / Neg: 〜くない / Past: 〜かった / Past Neg: 〜くなかった",
        examples: [
          { jp: "おいしい → おいしくない → おいしかった → おいしくなかった", rm: "oishii → oishikunai → oishikatta → oishikunakatta", en: "delicious → not delicious → was delicious → wasn't delicious" },
        ],
      },
      {
        structure: "な-adjective / Noun plain forms",
        meaning: "Casual conjugation of な-adjectives and nouns",
        formation: "Present: だ / Neg: じゃない / Past: だった / Past Neg: じゃなかった",
        examples: [
          { jp: "げんきだ → げんきじゃない → げんきだった → げんきじゃなかった", rm: "genki da → genki ja nai → genki datta → genki ja nakatta", en: "healthy → not healthy → was healthy → wasn't healthy" },
        ],
      },
      {
        structure: "カジュアルな かいわで つかう",
        meaning: "Dropping です/ます in informal speech",
        formation: "Replace ます-form with dictionary/ない/た/なかった",
        examples: [
          { jp: "あした　どこへ　いく？", rm: "Ashita doko e iku?", en: "Where are you going tomorrow?" },
          { jp: "うん、もう　たべた。", rm: "Un, mō tabeta.", en: "Yeah, I already ate." },
          { jp: "このえいが、おもしろかった！", rm: "Kono eiga, omoshirokatta!", en: "This movie was interesting!" },
        ],
        note: "In casual questions, か is usually dropped and intonation rises instead.",
      },
    ],
  },
  {
    num: 21,
    title: "おもいます・いいました",
    titleEn: "Thoughts, Quotes & Probability",
    grammar: [
      {
        structure: "〜と 思います",
        meaning: "I think that 〜",
        formation: "Plain-form clause ＋ と 思います",
        examples: [
          { jp: "あした　あめが　ふると　おもいます。", rm: "Ashita ame ga furu to omoimasu.", en: "I think it will rain tomorrow." },
          { jp: "この　えいがは　おもしろいと　おもいます。", rm: "Kono eiga wa omoshiroi to omoimasu.", en: "I think this movie is interesting." },
          { jp: "たなかさんは　げんきじゃないと　おもいます。", rm: "Tanaka-san wa genki ja nai to omoimasu.", en: "I don't think Mr. Tanaka is well." },
        ],
        note: "The clause before と must be in plain form — even for な-adj (〜だ) and nouns (〜だ). You're quoting a thought, so the inner sentence uses its plain shape.",
      },
      {
        structure: "〜と 言いました",
        meaning: "Said that 〜 (quotation)",
        formation: "「Quote」 と 言いました (direct) / Plain-form clause と 言いました (indirect)",
        examples: [
          { jp: "ミラーさんは「あしたは やすみます」と　いいました。", rm: "Mirā-san wa 'ashita wa yasumimasu' to iimashita.", en: "Mr. Miller said, 'I'll take tomorrow off.'" },
          { jp: "たなかさんは　くると　いいました。", rm: "Tanaka-san wa kuru to iimashita.", en: "Mr. Tanaka said he would come." },
        ],
        note: "Direct quotes are wrapped in 「」; indirect quotes use a plain-form clause. Both use と.",
      },
      {
        structure: "〜でしょう？",
        meaning: "Isn't it? / Probably 〜, right?",
        formation: "Plain-form clause (drop だ for nouns & な-adj) ＋ でしょう",
        examples: [
          { jp: "あした　あめが　ふるでしょう。", rm: "Ashita ame ga furu deshō.", en: "It'll probably rain tomorrow." },
          { jp: "この　えいがは　おもしろいでしょう？", rm: "Kono eiga wa omoshiroi deshō?", en: "This movie is good, isn't it?" },
          { jp: "かれは　がくせいでしょう？", rm: "Kare wa gakusei deshō?", en: "He's a student, right?" },
        ],
        note: "Rising intonation → seeking agreement ('right?'). Falling intonation → guessing ('probably'). Drop だ for nouns and な-adj before でしょう.",
      },
      {
        structure: "〜について",
        meaning: "About 〜 / concerning 〜",
        formation: "Noun について Verb",
        examples: [
          { jp: "にほんの　れきしに　ついて　べんきょうしています。", rm: "Nihon no rekishi ni tsuite benkyō shite imasu.", en: "I'm studying about Japanese history." },
          { jp: "この　もんだいに　ついて　どう　おもいますか。", rm: "Kono mondai ni tsuite dō omoimasu ka.", en: "What do you think about this problem?" },
        ],
        note: "Attach に ついて to any topic noun to mean 'regarding that noun'. Pairs naturally with はなす, かく, しらべる, おもう.",
      },
    ],
  },
  {
    num: 22,
    title: "めいしの しゅうしょく",
    titleEn: "Modifying Nouns (Relative Clauses)",
    grammar: [
      {
        structure: "Plain-form verb + Noun",
        meaning: "A noun that (clause) — Japanese relative clause",
        formation: "Plain-form Verb ＋ Noun",
        examples: [
          { jp: "きのう　かった　ほんです。", rm: "Kinō katta hon desu.", en: "It's the book I bought yesterday." },
          { jp: "あした　あう　ひとは　たなかさんです。", rm: "Ashita au hito wa Tanaka-san desu.", en: "The person I'm meeting tomorrow is Mr. Tanaka." },
          { jp: "にほんで　うっている　くるまです。", rm: "Nihon de utte iru kuruma desu.", en: "It's a car sold in Japan." },
        ],
        note: "No 'that/which/who' — the verb attaches directly to the noun. The subject of a relative clause takes が (not は).",
      },
      {
        structure: "い-adj / な-adj / N + N",
        meaning: "Attributive adjectives and noun-modifier phrases",
        formation: "い-adj ＋ Noun / な-adj + な ＋ Noun / Noun + の ＋ Noun",
        examples: [
          { jp: "あたらしい　車が　ほしいです。", rm: "Atarashii kuruma ga hoshii desu.", en: "I want a new car." },
          { jp: "しずかな　ところに　すみたいです。", rm: "Shizuka na tokoro ni sumitai desu.", en: "I want to live in a quiet place." },
          { jp: "ともだちの　ミラーさんは　アメリカじんです。", rm: "Tomodachi no Mirā-san wa Amerikajin desu.", en: "My friend Mr. Miller is American." },
        ],
        note: "These stack — you can chain multiple modifiers before a noun: 「きのう ミラーさんに　もらった　おいしい ケーキ」.",
      },
      {
        structure: "Plain-form + 〜時間／約束／予定",
        meaning: "The time / promise / plan to 〜",
        formation: "Plain-form Verb ＋ 時間 / 約束 / 予定",
        examples: [
          { jp: "あした　ともだちに　あう　やくそくが　あります。", rm: "Ashita tomodachi ni au yakusoku ga arimasu.", en: "I have an appointment to meet a friend tomorrow." },
          { jp: "えいがを　みる　じかんが　ありません。", rm: "Eiga o miru jikan ga arimasen.", en: "I don't have time to watch a movie." },
        ],
        note: "A common noun-modification pattern. Always use plain form before the noun.",
      },
    ],
  },
  {
    num: 23,
    title: "とき・と",
    titleEn: "Time Clauses & Consequences",
    grammar: [
      {
        structure: "〜とき、〜",
        meaning: "When 〜 / at the time of 〜",
        formation: "Plain-form clause ＋ とき、Main clause",
        examples: [
          { jp: "にほんへ　いくとき、パスポートを　もって　いきます。", rm: "Nihon e iku toki, pasupōto o motte ikimasu.", en: "When I go to Japan, I take my passport with me." },
          { jp: "にほんへ　いったとき、きょうとへ　いきました。", rm: "Nihon e itta toki, Kyōto e ikimashita.", en: "When I went to Japan, I went to Kyoto." },
          { jp: "さむいとき、コートを　きます。", rm: "Samui toki, kōto o kimasu.", en: "When it's cold, I wear a coat." },
        ],
        note: "The tense of the clause before とき is relative: 〜く とき = before the action, 〜た とき = after/at completion. い-adj and な-adj both work directly (な-adj + な とき).",
      },
      {
        structure: "〜と、〜",
        meaning: "When/if X happens, Y naturally follows",
        formation: "Plain-present clause ＋ と、Result clause",
        examples: [
          { jp: "このボタンを　おすと、おつりが　でます。", rm: "Kono botan o osu to, otsuri ga demasu.", en: "If you press this button, change comes out." },
          { jp: "はるに　なると、さくらが　さきます。", rm: "Haru ni naru to, sakura ga sakimasu.", en: "When it becomes spring, the cherries bloom." },
        ],
        note: "〜と expresses inevitable or automatic consequences — instructions, natural phenomena, mechanisms. The main clause must use non-past tense.",
      },
      {
        structure: "Placeを Verb (cross / walk / pass)",
        meaning: "Move through / across a place",
        formation: "Place を Movement-verb (あるきます・わたります・まがります・とおります)",
        examples: [
          { jp: "こうえんを　さんぽします。", rm: "Kōen o sanpo shimasu.", en: "I take a walk through the park." },
          { jp: "はしを　わたって　ください。", rm: "Hashi o watatte kudasai.", en: "Please cross the bridge." },
          { jp: "この　かどを　みぎへ　まがります。", rm: "Kono kado o migi e magarimasu.", en: "I turn right at this corner." },
        ],
        note: "The を here marks the path traversed, not a direct object. Pairs with motion-through verbs.",
      },
    ],
  },
  {
    num: 24,
    title: "あげる・くれる・もらう",
    titleEn: "Giving & Receiving Actions",
    grammar: [
      {
        structure: "〜てあげます",
        meaning: "Do 〜 for someone (I → other)",
        formation: "Verb (て-form) ＋ あげます",
        examples: [
          { jp: "ともだちに　ほんを　かして　あげました。", rm: "Tomodachi ni hon o kashite agemashita.", en: "I lent a book to my friend (as a favor)." },
          { jp: "おばあさんに　みちを　おしえて　あげました。", rm: "Obāsan ni michi o oshiete agemashita.", en: "I showed an old lady the way." },
        ],
        note: "Use sparingly with 目上 (superiors) — it can sound patronising. Safer in 3rd-person narration or downward to juniors/peers.",
      },
      {
        structure: "〜てくれます",
        meaning: "Someone does 〜 for me / my in-group",
        formation: "Subject は／が Verb (て-form) ＋ くれます",
        examples: [
          { jp: "たなかさんは　にほんごを　おしえて　くれました。", rm: "Tanaka-san wa nihongo o oshiete kuremashita.", en: "Mr. Tanaka taught me Japanese (as a favor)." },
          { jp: "ちちが　じしょを　かって　くれました。", rm: "Chichi ga jisho o katte kuremashita.", en: "My father bought me a dictionary." },
        ],
        note: "くれる implies the action benefits the speaker (or their in-group). The speaker is never the subject of くれる.",
      },
      {
        structure: "〜てもらいます",
        meaning: "Have / get someone to do 〜 (for me)",
        formation: "Giver に Verb (て-form) ＋ もらいます",
        examples: [
          { jp: "ミラーさんに　しゃしんを　とって　もらいました。", rm: "Mirā-san ni shashin o totte moraimashita.", en: "I had Mr. Miller take a photo (for me)." },
          { jp: "せんせいに　にほんごを　なおして　もらいます。", rm: "Sensei ni nihongo o naoshite moraimasu.", en: "I'll have the teacher correct my Japanese." },
        ],
        note: "Same scenario as くれる but from the recipient's angle. 「AがBに〜てもらう」 ≈ 「BがAに〜てくれる」.",
      },
      {
        structure: "〜てくれませんか",
        meaning: "Could you do 〜 for me? (polite request)",
        formation: "Verb (て-form) ＋ くれませんか / いただけませんか (more polite)",
        examples: [
          { jp: "すみません、しゃしんを　とって　くれませんか。", rm: "Sumimasen, shashin o totte kuremasen ka.", en: "Excuse me, could you take a photo (for me)?" },
          { jp: "もう　いちど　いって　いただけませんか。", rm: "Mō ichido itte itadakemasen ka.", en: "Could you please say it one more time?" },
        ],
        note: "A softer request than 〜てください. いただけませんか is the most polite variant.",
      },
    ],
  },
  {
    num: 25,
    title: "たら・ても",
    titleEn: "Conditionals: If & Even If",
    grammar: [
      {
        structure: "〜たら、〜",
        meaning: "If / when 〜 (hypothetical or completed condition)",
        formation: "Plain-past Verb / Adj ＋ ら、Main clause",
        examples: [
          { jp: "あめが　ふったら、いきません。", rm: "Ame ga futtara, ikimasen.", en: "If it rains, I won't go." },
          { jp: "１０じに　なったら、でかけましょう。", rm: "Jūji ni nattara, dekakemashō.", en: "Once it becomes 10 o'clock, let's go out." },
          { jp: "やすかったら、かいます。", rm: "Yasukattara, kaimasu.", en: "If it's cheap, I'll buy it." },
        ],
        note: "〜たら is formed from the plain-past (た-form) + ら. Works for verbs, adjectives, and nouns (〜だったら). The most flexible conditional — covers hypothetical, temporal, and one-off 'once X happens' cases.",
      },
      {
        structure: "もし〜たら",
        meaning: "If (for hypothetical / unlikely situations)",
        formation: "もし ＋ plain-past ＋ ら、Main clause",
        examples: [
          { jp: "もし　おかねが　あったら、せかいじゅうを　りょこうしたいです。", rm: "Moshi okane ga attara, sekaijū o ryokō shitai desu.", en: "If I had money, I'd want to travel the world." },
          { jp: "もし　ひまだったら、てつだって　ください。", rm: "Moshi hima dattara, tetsudatte kudasai.", en: "If you're free, please help me." },
        ],
        note: "もし signals that the speaker regards the condition as hypothetical or uncertain. Often paired with 〜たら.",
      },
      {
        structure: "〜ても、〜",
        meaning: "Even if / even though 〜",
        formation: "Verb (て-form) / Adj + くても / な-adj + でも / N + でも、Main clause",
        examples: [
          { jp: "あめが　ふっても、いきます。", rm: "Ame ga futte mo, ikimasu.", en: "Even if it rains, I'll go." },
          { jp: "たかくても、かいます。", rm: "Takakute mo, kaimasu.", en: "Even if it's expensive, I'll buy it." },
          { jp: "にちようびでも、はたらきます。", rm: "Nichiyōbi de mo, hatarakimasu.", en: "Even on Sunday, I work." },
        ],
        note: "〜ても expresses concession — the main clause happens regardless of the condition.",
      },
      {
        structure: "いくら〜ても",
        meaning: "No matter how much / however 〜",
        formation: "いくら ＋ Verb-て / Adj-く ＋ ても、Main clause",
        examples: [
          { jp: "いくら　たべても、ふとりません。", rm: "Ikura tabete mo, futorimasen.", en: "No matter how much I eat, I don't gain weight." },
          { jp: "いくら　せつめいしても、わかりません。", rm: "Ikura setsumei shite mo, wakarimasen.", en: "No matter how much I explain, they don't understand." },
        ],
        note: "Emphasises that the condition is maxed out but the result doesn't change. A strong form of concession.",
      },
    ],
  },
];
