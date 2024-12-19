/**
 * クイズの選択肢を設定し、正解を判定する
 * @param num クイズ番号
 * @param questionText 問題文
 * @param choices 選択肢
 * @param correct1 正解1
 * @param correct2 正解2
 */
function createQuiz(num, questionText, choices, correct1, correct2 = null) {
    //quizの枠を作成
    let $quiz = $('<div id="quiz' + num + '" class="quiz"></div>')
    $quiz.append('<h2>第' + num + '問</h2>')
    $quiz.append('<p>' + questionText + '</p>')
    $quiz.append('<form><div class="choices"></div></form>')


    $quiz.append('<button class="answer-button">回答</button>')
    $quiz.append('<div class="correct">正解！</div>')
    $quiz.append('<div class="miss">ざんねん...</div>')
    $("body").append($quiz)

    // formにラジオを足していく
    let $choices = $("#quiz" + num + " .choices")

    // 選択肢を設定
    for (let i = 0; i < choices.length; i++) {
        $radio = $('<label><input type="radio" name="q' + num + '" value="' + i + '">' + choices[i] + '</label>')
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
createQuiz(1, 'Scratchのキャラクターのことをなんというでしょう？', ["バックグラウンド", "ストライプ", "スプライト", "緑の旗"], "2")
createQuiz(2, 'アルスタジオのメインキャラであるアルくんは何の生き物でしょう？', ["サイ", "恐竜", "ドラゴン", "トカゲ"], "1", "2")
createQuiz(3, 'Scratchで描画のために他の処理を待つのはどれでしょう？', ["コスチュームを変える", "1秒待つ", "イベントを送る", "繰り返しの終わり"], "1", "3")
