// 1問目の選択肢を設定
let choices = ["バックグラウンド", "ストライプ", "スプライト", "緑の旗"]
let $choices = $("#quiz1 .choices")
for (let i = 0; i < choices.length; i++) {
    let $radio = $('<label><input type="radio" name="q1" value="' + i + '">' + choices[i] + '</label>')
    $choices.append($radio)
}

// 2問目の選択肢を設定
choices = ["サイ", "恐竜", "ドラゴン", "トカゲ"]
$choices = $("#quiz2 .choices")
for (let i = 0; i < choices.length; i++) {
    let $radio = $('<label><input type="radio" name="q2" value="' + i + '">' + choices[i] + '</label>')
    $choices.append($radio)
}

// 3問目の選択肢を設定
choices = ["コスチュームを変える", "1秒待つ", "イベントを送る", "繰り返しの終わり"]
$choices = $("#quiz3 .choices")
for (let i = 0; i < choices.length; i++) {
    let $radio = $('<label><input type="radio" name="q3" value="' + i + '">' + choices[i] + '</label>')
    $choices.append($radio)
}


// 1問目のクイズの正解判定
$("#quiz1 .answer-button").on("click", function () {
    // ラジオで選択されている値を取得
    let select = $('input[name="q1"]:checked').val()

    if (select === "2") {
        $("#quiz1 .correct").show()
    } else {
        $("#quiz1 .miss").show()
    }
})

// 1問目のラジオボタンの選択時に正解・不正解を非表示にする
$(document).on('change', 'input[name="q1"]', function () {
    $("#quiz1 .correct").hide()
    $("#quiz1 .miss").hide()
})

// 2問目のクイズの正解判定
$("#quiz2 .answer-button").on("click", function () {
    // ラジオで選択されている値を取得
    let select = $('input[name="q2"]:checked').val()

    if (select === "1" || select === "2") {
        $("#quiz2 .correct").show()
    } else {
        $("#quiz2 .miss").show()
    }
})

// 2問目のラジオボタンの選択時に正解・不正解を非表示にする
$(document).on('change', 'input[name="q2"]', function () {
    $("#quiz2 .correct").hide()
    $("#quiz2 .miss").hide()
})

// 3問目のクイズの正解判定
$("#quiz3 .answer-button").on("click", function () {
    // ラジオで選択されている値を取得
    let select = $('input[name="q3"]:checked').val()

    if (select === "1" || select === "3") {
        $("#quiz3 .correct").show()
    } else {
        $("#quiz3 .miss").show()
    }
})

// 3問目のラジオボタンの選択時に正解・不正解を非表示にする
$(document).on('change', 'input[name="q3"]', function () {
    $("#quiz3 .correct").hide()
    $("#quiz3 .miss").hide()
})
