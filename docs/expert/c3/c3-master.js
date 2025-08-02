const items = [
    {
        id: 1,
        name: "魔法の杖",
        price: 50,
        effect: 1,
        type: "click",
        owned: 0
    },
    {
        id: 2,
        name: "魔法書",
        price: 200,
        effect: 4,
        type: "click",
        owned: 0
    },
    {
        id: 3,
        name: "自動召喚",
        price: 500,
        effect: 1,
        type: "auto",
        owned: 0
    },
    {
        id: 4,
        name: "パワーブースト",
        price: 100,
        effect: 2,
        type: "boost",
        duration: 30,
        remaining: 0
    }
]

let gameState = {
    mana: 0,
    clickPower: 1,
    autoMana: 0,
    boostMultiplier: 1,
    boostTimer: null
}

function updateDisplay() {
    $("#mana").text(gameState.mana)
    $("#click-power").text(gameState.clickPower)
    $("#auto-mana").text(gameState.autoMana)
    
    for (let i = 0; i < items.length; i++) {
        let item = items[i]
        let card = $('[data-id="' + item.id + '"]')
        let buyBtn = card.find('.buy-btn')
        
        if (item.type === "boost") {
            card.find('.boost-time').text(item.remaining)
            if (item.remaining > 0) {
                buyBtn.prop('disabled', true).text('使用中')
            } else {
                buyBtn.prop('disabled', gameState.mana < item.price).text('購入')
            }
        } else {
            card.find('.owned-count').text(item.owned)
            buyBtn.prop('disabled', gameState.mana < item.price)
        }
    }
}

function clickCharacter() {
    let manaGain = gameState.clickPower * gameState.boostMultiplier
    gameState.mana += manaGain
    updateDisplay()
}

function buyItem(itemId) {
    let item = null
    for (let i = 0; i < items.length; i++) {
        if (items[i].id === itemId) {
            item = items[i]
            break
        }
    }
    
    if (item == null || gameState.mana < item.price) {
        return
    }
    
    if (item.type === "boost" && item.remaining > 0) {
        return
    }
    
    gameState.mana -= item.price
    
    if (item.type === "click") {
        gameState.clickPower += item.effect
        item.owned++
        item.price = Math.floor(item.price * 1.5)
        let card = $('[data-id="' + item.id + '"]')
        card.find('.item-price').text(item.price + '魔力')
    } else if (item.type === "auto") {
        gameState.autoMana += item.effect
        item.owned++
        item.price = Math.floor(item.price * 2)
        let card = $('[data-id="' + item.id + '"]')
        card.find('.item-price').text(item.price + '魔力')
    } else if (item.type === "boost") {
        activateBoost(item)
    }
    
    updateDisplay()
}

function activateBoost(item) {
    gameState.boostMultiplier = item.effect
    item.remaining = item.duration
    
    $("#character-section").addClass("boost-active")
    
    if (gameState.boostTimer) {
        clearInterval(gameState.boostTimer)
    }
    
    gameState.boostTimer = setInterval(function() {
        item.remaining--
        if (item.remaining <= 0) {
            gameState.boostMultiplier = 1
            $("#character-section").removeClass("boost-active")
            clearInterval(gameState.boostTimer)
            gameState.boostTimer = null
        }
        updateDisplay()
    }, 1000)
}

function autoGenerate() {
    if (gameState.autoMana > 0) {
        gameState.mana += gameState.autoMana
        updateDisplay()
    }
}

$("#character").on("click", function() {
    clickCharacter()
})

$(document).on("click", ".buy-btn", function() {
    let itemId = parseInt($(this).closest('.item-card').attr('data-id'))
    buyItem(itemId)
})

setInterval(autoGenerate, 1000)

updateDisplay()