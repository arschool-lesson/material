// 商品マスタ
const products = [
    {
        id: 1,
        name: "おにぎり",
        image: "img/onigiri.jpg",
        price: 140,
        stock: 8
    },
    {
        id: 2,
        name: "サンドイッチ",
        image: "img/sandwich.jpg",
        price: 250,
        stock: 6
    }
];

// カートの中身
let cart = [];

// 商品一覧を表示する関数
function displayProducts() {
    let shopping = $("#shopping");

    // 1. 商品一覧をクリアする

    // 2. 商品一覧を表示

}

// カートに商品を追加する関数
function addCart(productId) {
    // 1. 商品を商品マスタ(products)からIDで検索
    let product = null;

    // 2. カート内に既に存在するか確認
    // 2.1 存在する場合は数量を増やす
    // ただし、在庫が足りない場合はalertを表示して処理を終了

    // 3. 新規商品ならカートに追加

    // 4. カート表示を更新
}

// カートから商品を削除する関数
function removeFromCart(index) {
    // 指定されたインデックスの商品をカートから削除

    // カート表示を更新
}

// カート表示を更新する関数
function updateCart() {
    const carts = $("#cart-items");
    // 1. カートの内容をクリアする

    // 2. 小計、消費税、合計の変数を定義
    let subtotal = 0
    let tax = 0
    let total = 0

    // 3. カートの中身を繰り返して表示

    // 4. 小計、消費税、合計を表示
}

// ページ読み込み時の処理
$(document).ready(function() {
    // 商品一覧を表示
    displayProducts();

    // カートに追加ボタンのイベント処理
    // 商品ID(data-id)を引数に addCart関数を呼び出す
    $(document).on("click", ".add-cart", function() {

    });

    // 削除ボタンのイベント処理
    // data-index属性を使って、removeFromCart関数を呼び出す
    $(document).on("click", ".delete-item", function() {

    });

});
