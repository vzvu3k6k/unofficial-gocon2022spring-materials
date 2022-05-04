export function getSessions() {
  return sessions;
}

export function getSession(id) {
  return sessions.find((session) => session.id === id);
}

export function hasContent(session) {
  return !!(session.tweets || session.speakerdeck || session.links);
}

const sessions = [
  {
    id: "A1-C",
    title:
      "人間の直感に対応させた複雑度<Cognitive Complexity>の計測ツールをgo/astで実装してみよう",
    speaker: { id: "norinoriki0", name: "高橋典生" },
  },
  {
    id: "A2-C",
    title: "創業以来のPHPシステムが生み出した混沌をGoへの移行で乗り越えた話",
    speaker: { id: "yosuke_moriya", name: "森谷洋祐" },
    tweets: ["1519607933969235968"],
  },
  {
    id: "A3-L",
    title: "Dissecting Slices, Maps and Channels in Go",
    speaker: { id: "jespinog", name: "Jesús Espino" },
  },
  {
    id: "B3-L",
    title: "ゼロから作る Protocol Buffer のパーサーとレキサー",
    speaker: { id: "yoheimuta", name: "yoheimuta" },
    tweets: ["1517700169025818625", "1521677530834477058"],
  },
  {
    id: "A4-S",
    title: "GoのGC(garbage collector)について理解する",
    speaker: { id: "uji_rb", name: "uji" },
    tweets: ["1518104665036312576"],
  },
  {
    id: "B4-S",
    title:
      "lock free な doubly linked list を実装していたらいつのまにか concurrent skip list map を実装していたでござる",
    speaker: { id: "kazuhisa_takei", name: "Kazuhisa TAKEI" },
    tweets: [
      "1517710901746761728",
      "1517714465579761664",
      "1517715372975456261",
      "1517715735032008704",
    ],
  },
  {
    id: "A5-C",
    title: "レガシーシステムをGoにリプレースした一年間の振り返り",
    speaker: { id: "hideyuki_utsunomiya", name: "Hideyuki Utsunomiya" },
  },
  {
    id: "A6-C",
    title:
      "メタバースを支える技術 ～UGCに溢れる3D空間のリアルタイム同期を支えるGo〜",
    speaker: { id: "thara", name: "thara" },
    speakerdeck:
      "https://speakerdeck.com/player/a97d9b867eaa40e9ab120e68707c6b5e",
    // https://speakerdeck.com/clusterinc/gocon-2022-spring-sponsor-session
  },
  {
    id: "A7-L",
    title: "高速で統一的な自動生成ツールをprotocプラグインとして実装した話",
    speaker: { id: "hikyaru_suzuki", name: "鈴木 光" },
    tweets: ["1517765687892389888"],
  },
  {
    id: "B7-L",
    title: "Go で RDB に SQL でアクセスするためのライブラリ Kra の紹介",
    speaker: { id: "ryushi", name: "taichi" },
    tweets: ["1517748574066724865"],
  },
  {
    id: "A8-S",
    title: "database/sqlパッケージを理解する",
    speaker: { id: "sivchari", name: "sivchari" },
    tweets: ["1517745529031372801"],
  },
  {
    id: "B8-S",
    title: "「自動コード生成ツール」を20分で作れるようになろう",
    speaker: { id: "riita10069", name: "Ryota Yamada" },
  },
  {
    id: "A9-S",
    title: "GoでAPI クライアントの実装",
    speaker: { id: "yyoshiki41", name: "Yoshiki Nakagawa" },
    links: [
      {
        label: "スライド",
        url: "https://go-talks.appspot.com/github.com/yyoshiki41/Go-Conference-2022-Spring/main.slide#1",
      },
    ],
  },
  {
    id: "B9-S",
    title: "GoらしいAPIを求める旅路 並行処理編",
    speaker: { id: "lestrrat", name: "Daisuke Maki" },
    tweets: ["1518012244013252608"],
  },
  {
    id: "A10-S",
    title:
      "testingパッケージを使ったWebアプリケーションテスト（単体テストからE2Eテストまで）",
    speaker: { id: "budougumi0617", name: "Yoichiro Shimizu" },
    tweets: ["1518572525839474688"],
  },
  {
    id: "B10-S",
    title: "HTTP Tunneling in Go",
    speaker: { id: "hgsgtk", name: "Kazuki Higashiguchi" },
    tweets: ["1517755041071136768"],
  },
  {
    id: "A11-S",
    title:
      "GoとLambdaを使用した高パフォーマンスでサーバレスなマイクロサービスの開発と運用",
    speaker: { id: "saicologic", name: "Satoru Mikami" },
    tweets: ["1517760186869600256"],
  },
  {
    id: "B11-S",
    title:
      "Go Module with Microservices and Monorepo: Clear Dependencies with Ease of Development",
    speaker: { id: "rytswd", name: "Ryota Sawada" },
    tweets: ["1517806022114508801", "1517994552635842561"],
  },
  {
    id: "A12-S",
    title: "型パラメータが使えるようになったのでLINQを実装してみた",
    speaker: { id: "makki_d", name: "Daisuke Makiuchi (MakKi, makki_d)" },
    tweets: ["1517773647196278785", "1521805490711187458"],
  },
  {
    id: "B12-S",
    title: "IoT with TinyGo",
    speaker: { id: "sago35tk", name: "sago35" },
    tweets: ["1517767485164236800"],
  },
  {
    id: "A13-S",
    title: "Let's contribute to OSS with Go",
    speaker: { id: "rennnosuke_rk", name: "Ren Kanai" },
    speakerdeck:
      "https://speakerdeck.com/player/a2d5847403bc4b2d8733cb065632f3cc",
    // https://speakerdeck.com/rennnosuke/lets-contribute-to-oss-with-go-go-confenence-2022-spring
  },
  {
    id: "B13-S",
    title: "Go で始める将棋AI",
    speaker: { id: "mururururu", name: "Yuki Ito" },
    tweets: ["1517772891345272834"],
  },
  {
    id: "A14-S",
    title: "The introduction of my way to learn Go together with Go community.",
    speaker: { id: "nsega", name: "Naoki Sega" },
    tweets: ["1517782956458536961"],
  },
  {
    id: "B14-S",
    title:
      "Motto Go Forward Goを支える文化とコミュニティ 〜なぜ我々はコミュニティにコントリビュートするのか？〜",
    speaker: { id: "luccafort", name: "luccafort" },
    tweets: ["1520955517182824448"],
  },
  {
    id: "LT1",
    title: "Goの標準機能で簡易システムを低コストで作成するテクニック",
    speaker: { id: "yuji_shimada", name: "Yuji Shimada" },
    speakerdeck:
      "https://speakerdeck.com/player/cf0cf85c11644343949f77a8aa1c0e6b",
    // https://speakerdeck.com/qualiarts/gofalsebiao-zhun-ji-neng-dejian-yi-sisutemuwodi-kosutodezuo-cheng-surutekunituku
  },
  {
    id: "LT2",
    title: "Python製の姓名分割ライブラリをGoに移植した話",
    speaker: { id: "glassmonekey", name: "glassmonkey (Shunsuke Nagano)" },
    tweets: ["1517791272798662656"],
  },
  {
    id: "LT3",
    title: "外部コマンドの実行を含む関数のテスト",
    speaker: { id: "_pongzu", name: "pongzu" },
    tweets: ["1517793718346354689"],
  },
  {
    id: "LT4",
    title: "大規模ゲーム開発におけるContext活用パターン",
    speaker: { id: "8kka", name: "8kka" },
    speakerdeck:
      "https://speakerdeck.com/player/d3386e35f27d442db4369eafa02fec36",
    // https://speakerdeck.com/qualiarts/da-gui-mo-gemukai-fa-niokerucontexthuo-yong-patan
  },
  {
    id: "LT5",
    title: "GoとKubernetesを用いたバッチ開発のすすめ",
    speaker: { id: "awakot_56", name: "Toshiki Kawamura" },
    tweets: ["1517791637937696768"],
  },
  {
    id: "LT6",
    title: "Gopher, Chrome, Automation in 5min",
    speaker: { id: "yebis0942", name: "yebis0942" },
    tweets: ["1518169610402828288"],
  },
  {
    id: "LT7",
    title: "Go runtime の歩き方",
    speaker: { id: "convto", name: "convto" },
    tweets: ["1517788218481311744"],
  },
  {
    id: "LT8",
    title: "Go言語仕様輪読会の開催を通じた振り返り",
    speaker: { id: "__syumai", name: "syumai" },
    tweets: ["1517796597530501123"],
  },
];
