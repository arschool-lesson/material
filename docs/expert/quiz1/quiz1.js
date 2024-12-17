// 1問目のクイズの正解判定
$("#quiz1 .answer-button").on("click", function () {
    // ラジオで選択されている値を取得
    let select = $('input[name="q1"]:checked').val()

    if (select === "3") {
        $("#quiz1 .correct").show()
    } else {
        $("#quiz1 .miss").show()
    }
})

// 1問目のラジオボタンの選択時に正解・不正解を非表示にする
$('input[name="q1"]').on('change', function () {
    $("#quiz1 .correct").hide()
    $("#quiz1 .miss").hide()
})

// 2問目のクイズの正解判定
$("#quiz2 .answer-button").on("click", function () {
    // ラジオで選択されている値を取得
    let select = $('input[name="q2"]:checked').val()

    if (select === "2" || select === "3") {
        $("#quiz2 .correct").show()
    } else {
        $("#quiz2 .miss").show()
    }
})

// 2問目のラジオボタンの選択時に正解・不正解を非表示にする
$('input[name="q2"]').on('change', function () {
    $("#quiz2 .correct").hide()
    $("#quiz2 .miss").hide()
})

// 3問目のクイズの正解判定
$("#quiz3 .answer-button").on("click", function () {
    // ラジオで選択されている値を取得
    let select = $('input[name="q3"]:checked').val()

    if (select === "2" || select === "4") {
        $("#quiz3 .correct").show()
    } else {
        $("#quiz3 .miss").show()
    }
})

// 3問目のラジオボタンの選択時に正解・不正解を非表示にする
$('input[name="q3"]').on('change', function () {
    $("#quiz3 .correct").hide()
    $("#quiz3 .miss").hide()
})
