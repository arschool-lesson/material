// 商品マスタ
const products = [
    {
        id: 1,
        name: "高級腕時計",
        image: "https://picsum.photos/id/175/300/200",
        price: 25000,
        stock: 5
    },
    {
        id: 2,
        name: "スマートフォン",
        image: "https://picsum.photos/id/160/300/200",
        price: 60000,
        stock: 10
    },
    {
        id: 3,
        name: "ノートパソコン",
        image: "https://picsum.photos/id/0/300/200",
        price: 120000,
        stock: 3
    },
    {
        id: 4,
        name: "ワイヤレスイヤホン",
        image: "https://picsum.photos/id/3/300/200",
        price: 15000,
        stock: 15
    },
    {
        id: 5,
        name: "デジタルカメラ",
        image: "https://picsum.photos/id/250/300/200",
        price: 45000,
        stock: 7
    },
    {
        id: 6,
        name: "ゲーム機",
        image: "https://picsum.photos/id/96/300/200",
        price: 35000,
        stock: 8
    }
];

// カートの初期化
let cart = [];

// 商品一覧を表示する関数
function displayProducts() {
    const productsContainer = $("#products");
    productsContainer.empty();
    
    products.forEach(product => {
        const productCard = $(`
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-price">${product.price.toLocaleString()}円</p>
                <p class="product-stock">在庫: ${product.stock}個</p>
                <button class="add-to-cart" data-id="${product.id}" ${product.stock <= 0 ? 'disabled' : ''}>
                    ${product.stock > 0 ? 'カートに追加' : '在庫切れ'}
                </button>
            </div>
        `);
        
        productsContainer.append(productCard);
    });
}

// カートに商品を追加する関数
function addToCart(productId) {
    // 商品を検索
    const product = products.find(p => p.id === productId);
    
    // 在庫確認
    if (!product || product.stock <= 0) {
        alert("在庫がありません");
        return;
    }
    
    // カート内に既に存在するか確認
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        // 既存の商品なら数量を増やす
        existingItem.quantity++;
    } else {
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

// カート表示を更新する関数
function updateCart() {
    const cartItemsContainer = $("#cart-items");
    cartItemsContainer.empty();
    
    if (cart.length === 0) {
        cartItemsContainer.html('<p class="empty-cart">カートは空です</p>');
        $("#subtotal").text("0");
        $("#tax").text("0");
        $("#total").text("0");
        return;
    }
    
    let subtotal = 0;
    
    cart.forEach(item => {
        const product = products.find(p => p.id === item.id);
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;
        
        const cartItemElement = $(`
            <div class="cart-item">
                <div>
                    <strong>${item.name}</strong> × ${item.quantity}
                </div>
                <div>${itemTotal.toLocaleString()}円</div>
            </div>
        `);
        
        cartItemsContainer.append(cartItemElement);
    });
    
    // 小計、消費税、合計を計算して表示
    const tax = Math.floor(subtotal * 0.1);
    const total = subtotal + tax;
    
    $("#subtotal").text(subtotal.toLocaleString());
    $("#tax").text(tax.toLocaleString());
    $("#total").text(total.toLocaleString());
}

// 購入処理を行う関数
function checkout() {
    if (cart.length === 0) {
        alert("カートに商品がありません");
        return;
    }
    
    // 在庫を減らす
    cart.forEach(item => {
        const product = products.find(p => p.id === item.id);
        if (product) {
            product.stock -= item.quantity;
        }
    });
    
    // Thank youメッセージ
    alert("ご購入ありがとうございました！");
    
    // カートをクリア
    cart = [];
    updateCart();
    
    // 商品表示を更新（在庫数の変更を反映）
    displayProducts();
}

// ページ読み込み時の処理
$(document).ready(function() {
    // 商品一覧を表示
    displayProducts();
    
    // カートに追加ボタンのイベント処理
    $(document).on("click", ".add-to-cart", function() {
        const productId = parseInt($(this).data("id"));
        addToCart(productId);
    });
    
    // 購入ボタンのイベント処理
    $("#checkout").click(function() {
        checkout();
    });
});
