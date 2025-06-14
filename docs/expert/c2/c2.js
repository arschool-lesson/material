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
    },
    {
        id: 3,
        name: "からあげ弁当",
        image: "img/karaage.jpg",
        price: 500,
        stock: 3
    },
    {
        id: 4,
        name: "お茶",
        image: "img/tea.jpg",
        price: 130,
        stock: 7
    },
    {
        id: 5,
        name: "ジュース",
        image: "img/juice.jpg",
        price: 150,
        stock: 10
    },
    {
        id: 6,
        name: "シュークリーム",
        image: "img/cream.jpg",
        price: 100,
        stock: 5
    }
];

// カートの初期化
let cart = [];

// 商品一覧を表示する関数
function displayProducts() {
    let shopping = $("#shopping");
    shopping.empty();

    // 商品一覧を表示
    for (let i=0; i<products.length; i++) {
        let product = products[i];
        let card = $('<div class="card"></div>');
        card.append('<img src="'+product.image+'">');
        card.append('<h3 class="name">'+product.name+'</h3>')
        card.append('<p class="price">'+product.price+'円</p>');
        card.append('<p class="stock">在庫: '+product.stock+'個</p>');
        if(product.stock <= 0) {
            card.append('<button data-id="'+product.id+'" class="add-cart" disabled>在庫切れ</button>');
        } else {
            card.append('<button data-id="'+product.id+'" class="add-cart">カートに追加</button>');
        }
        shopping.append(card);
    }
}

// カートに商品を追加する関数
function addCart(productId) {
    // 商品を検索
    let product = null;
    for (let i=0; i<products.length; i++) {
        if (products[i].id === productId) {
            product = products[i];
            break;
        }
    }

    // 商品の存在確認
    // この処理はなくてもよい
    if (product == null) {
        alert("不正な商品です");
        return;
    }

    // カート内に既に存在するか確認
    let exist = false
    for(let i=0; i<cart.length; i++) {
        if (cart[i].id === productId) {
            // 既存の商品なら、まだ在庫量があるか確認
            if(cart[i].quantity >= product.stock) {
                alert("在庫がありません");
                return;
            } else {
                // 在庫があるなら数量を増やす
                cart[i].quantity++;
                exist = true
                break;
            }
        }
    }

    if (exist === false) {
        // 新規商品ならカートに追加
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1
        });
    }

    // カート表示を更新
    updateCart();
}

// カートから商品を削除する関数
function removeFromCart(index) {
    // 指定されたインデックスの商品をカートから削除
    cart.splice(index, 1);

    // カート表示を更新
    updateCart();
}

// カート表示を更新する関数
function updateCart() {
    const carts = $("#cart-items");
    carts.html('');

    let subtotal = 0;

    for(let i=0; i<cart.length; i++) {
        let item = cart[i];
        let itemTotal = item.price * item.quantity;
        subtotal += itemTotal;

        let cartItem = $('<div class="cart-item"></div>');
        cartItem.append('<div class="item-name">'+item.name+' × '+item.quantity+'</div>');
        cartItem.append('<div class="item-price">'+itemTotal+'円</div> ');
        cartItem.append('<button class="delete-item" data-index="'+i+'">削除</button>');

        carts.append(cartItem);
    }

    // 小計、消費税、合計を計算して表示
    let tax = Math.round(subtotal * 0.1);
    let total = subtotal + tax;

    $("#subtotal").text(subtotal);
    $("#tax").text(tax);
    $("#total").text(total);
}

// 商品一覧を表示
displayProducts()

// カートに追加ボタンのイベント処理
$(document).on("click", ".add-cart", function() {
    const id = parseInt($(this).attr("data-id"))
    addCart(id)
})

// 削除ボタンのイベント処理
$(document).on("click", ".delete-item", function() {
    const index = parseInt($(this).attr("data-index"))
    removeFromCart(index)
})

// 購入ボタンのイベント処理
$("#checkout").on('click', function() {
    checkout()
})
