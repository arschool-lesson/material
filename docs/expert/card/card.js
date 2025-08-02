// オブジェクトの配列を作成、オブジェクトは name, image, description を持つ
let cards = [
    { name: 'アルくん', image: 'img/arukun.png', rare:'ノーマル', text: 'アルスクールのメインキャラ。ドラゴンと恐竜がモデル。決してトカゲではない。' },
    { name: 'アルごん', image: 'img/arugon.png', rare:'ノーマル',text: 'アルくんデザイン募集コンテストで惜しくも2位になったため主役になれなかった。' },
    { name: '棒人間', image: 'img/bouningen.png', rare:'レア', text: '自由が丘の生徒(当時)、Mちゃんが作成してくれたスプライト。' },
    { name: 'さわっち', image: 'img/sawacchi.png', rare:'激レア',text: 'オンライン校と福岡西新校の校長、左利き。東京ではレアキャラ。' },
    { name: 'むらっち', image: 'img/muracchi.png', rare:'ウルトラレア',text: 'アルスクールの創業者、自由が丘校の校長。ほんとはあまりレアではない。' },
]

// カードを作成
for (let i = 0; i < cards.length; i++) {
    let card = cards[i]
    let $card = $('<img src="'+card.image+'">')
    $('#gazou').append($card)
}

// カードをクリックした時の処理
$('#gazou img').on('click', function(){
    let src = $(this).attr('src')

    for(let i=0; i<cards.length; i++){
        let card = cards[i]
        if(card.image === src){
            $('#name').text(card.name)
            $('#img').attr('src', card.image)
            $('#rare').text(card.rare)
            $('#text').text(card.text)
            $('#info').show()
        }
    }
})
