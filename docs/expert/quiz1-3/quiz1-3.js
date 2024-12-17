/**
 * クイズの選択肢を設定し、正解を判定する
 * @param num クイズ番号
 * @param choices 選択肢
 * @param correct1 正解1
 * @param correct2 正解2
 */
function createQuiz(num, choices, correct1, correct2 = null) {
    // 選択肢を設定
    let $choices = $("#quiz" + num + " .choices")
    for (let i = 0; i < choices.length; i++) {
        let $radio = $('<label><input type="radio" name="q' + num + '" value="' + i + '">' + choices[i] + '</label>')
        $choices.append($radio)
    }

    // クイズの正解判定
    $("#quiz" + num + " .answer-button").on("click", function () {
        // ラジオで選択されている値を取得
        let select = $('input[name="q' + num + '"]:checked').val()

        if (select === correct1 || select === correct2) {
            $("#quiz" + num + " .correct").show()
        } else {
            $("#quiz" + num + " .miss").show()
        }
    })

    // ラジオボタンの選択時に正解・不正解を非表示にする
    $(document).on('change', 'input[name="q' + num + '"]', function () {
        $("#quiz" + num + " .correct").hide()
        $("#quiz" + num + " .miss").hide()
    })
}

// クイズを作成
createQuiz(1, ["バックグラウンド", "ストライプ", "スプライト", "緑の旗"], "2")
createQuiz(2, ["サイ", "恐竜", "ドラゴン", "トカゲ"], "1", "2")
createQuiz(3, ["コスチュームを変える", "1秒待つ", "イベントを送る", "繰り返しの終わり"], "1", "3")
