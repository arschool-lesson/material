let arukun = {
    id: "arukun",
    name: "アルくん",
    image: "https://arspark.jp/expert/sample/arukun1.png",
    origin: "恐竜またはドラゴン",
    types: ["恐竜", "ドラゴン", "メインキャラ"],
    description: "アルスクールのメインキャラクター。サイやトカゲと間違えられるが、恐竜またはドラゴンをイメージしてデザインした。"
}

let characters = [
    {
        id: "arugon",
        name: "アルゴン",
        image: "https://arspark.jp/expert/sample/arugon.png",
        origin: "ドラゴン",
        types: ["ドラゴン", "ファンタジー"],
        description: "アルスクールのサブキャラクター。アルくん募集のデザインコンペで2位になった。当初は緑色だったがアルくんとかぶるため変更した。"
    },
    {
        id: "hegel",
        name: "ヘーゲル",
        image: "https://arspark.jp/expert/sample/he-geru.png",
        origin: "イチゴと哲学者",
        types: ["ファンタジー", "食べ物"],
        description: "イチゴに絵文字の目などをくっつけた謎のキャラ。スタッフが作成した。名前の由来はドイツの哲学者。"
    },
    {
        id: "surabo",
        name: "スラボー",
        image: "https://arspark.jp/expert/sample/surabo.png",
        origin: "スライム",
        types: ["軟体", "ゲームキャラ"],
        description: "子どもがデザインしたキャラクター。スライムをイメージしている。"
    }
]


/**
 * 引数のidを元に、<div id="id" class="card">を作成し、<div id="cards">に追加する
 * @param id
 */
function addCard(id) {
    // 新しいカードを追加
    let card = $('<div id="' + id + '" class="card"></div>')
    card.append('<h2 class="name"></h2>')
    card.append('<img src="">')
    card.append('<p class="origin"></p>')
    card.append('<p class="types"></p>')
    card.append('<p class="description"></p>')
    $('#cards').append(card)
}

// アルくんのカードを追加
addCard(arukun.id)
// アルくんの名前をセット
$('#' + arukun.id + ' .name').html(arukun.name)

// この後に続けて、アルくんの画像などをセット
// 画像をセット
$('#' + arukun.id + ' img').attr('src', arukun.image)
// originをセット
$('#' + arukun.id + ' .origin').html(arukun.origin)
// typesをセット
$('#' + arukun.id + ' .types').html(arukun.types.join(','))
// descriptionをセット
$('#' + arukun.id + ' .description').html(arukun.description)



for (let i = 0; i < characters.length; i++) {
    let id = characters[i].id
    // characters[i]のidを元に、<div id="id" class="card">を作成し、<div id="cards">に追加する
    addCard(id)

    // 名前をセット
    $('#' + id + ' .name').html(characters[i].name)
    // 画像をセット
    $('#' + id + ' img').attr('src', characters[i].image)
    // originをセット
    $('#' + id + ' .origin').html(characters[i].origin)
    // typesをセット
    $('#' + id + ' .types').html(characters[i].types.join(','))
    // descriptionをセット
    $('#' + id + ' .description').html(characters[i].description)
}
