// content.js

// ページが読み込まれた時に実行する関数
function replaceWords() {
    // 単語aと単語bのリスト（あらかじめ定義されたもの）
    const wordPairs = [
        ['ざぁ～こ♡', 'メスガキ'],
        ['合意なし', 'レイプ'],
        ['つるぺた', 'ロリ'],
        ['閉じ込め', '監禁'],
        ['超ひどい', '鬼畜'],
        ['逆レ', '逆レイプ'],
        ['命令', '強制'],
        ['無理やり', '強制'],
        ['近親もの', '近親相姦'],
        ['責め苦', '拷問'],
        ['トランス', '催眠'],
        ['暗示', '催眠'],
        ['畜えち', '獣姦'],
        ['精神支配', '洗脳'],
        ['秘密さわさわ', '痴漢'],
        ['しつけ', '調教'],
        ['下僕', '奴隷'],
        ['屈辱', '凌辱'],
        ['回し', '輪姦'],
        ['虫えっち', '蟲姦'],
        ['モブおじさん', 'モブ姦'],
        ['異種えっち', '異種姦'],
        ['機械責め', '機械姦'],
        ['すやすやえっち', '睡眠姦'],
        ['トランス', '催眠音声'],
        ['暗示ボイス', '催眠音声']
        // 他の単語ペアも追加できます
    ];

    // ページ内のテキストノードを取得
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);

    // テキストノードごとに処理
    while (walker.nextNode()) {
        const textNode = walker.currentNode;
        let text = textNode.nodeValue;

        // 単語aと単語bのリストをループ
        wordPairs.forEach(pair => {
            const wordA = pair[0];
            const wordB = pair[1];

            // 単語aを単語bに置換
            const regex = new RegExp('\\b' + wordA + '\\b', 'g');
            text = text.replace(wordA, wordB);
        });

        // テキストを置換した後にテキストノードにセット
        textNode.nodeValue = text;

    }
    // URLに単語Bが含まれている場合は単語Aに置換して転送する
    const url = window.location.href;
    let originalUrl = url;

    // %ffなどの文字列を元に戻す
    originalUrl = decodeURIComponent(originalUrl);

    console.log("this url :"+originalUrl)

    wordPairs.forEach(pair => {
        const wordA = pair[0];
        const wordB = pair[1];
        if (originalUrl.includes(wordB)) {
            const newUrl = originalUrl.replace(wordB, wordA);
            console.log("new url :"+newUrl)
            window.location.replace(newUrl);
        }
    });
}

// ページが読み込まれた際に置換処理を実行
replaceWords();
