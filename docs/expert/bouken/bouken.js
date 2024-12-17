
$('#step1').hide()
$('#step2').hide()
$('#step3').hide()
$('#step4').hide()

$('.answer').hide()
$('.result').hide()

$('#gameover').hide()

let player = ''

// レッスン0
// ボタン0-1をクリック
$('#btn0').on('click', function(){
    player = $('#playerName').val()
    if(player === '') return ''

    
    $('#player').text(player)
    $('#step0 .question').hide()
    $('#step0 .result').show()

    $('.name-area').text(player)
    $('#step1').show()
})

// ステップ1の回答
$('.step1btn').on('click', function(){
    let answer = $(this).val()

    $('#step1 form').hide()
    $('#step1 .answer').show()
    $('#a1').text(answer)
    
    if(answer === '虫除けスプレー') {
        $('#step1 .result').show()
    } else {
        gameover('虫に刺されて' + player + 'さんの冒険は終わりました。')
    }
})

// ステップ1正解後の次の問題へ
$('#q1next').on('click', function(){
    $('#step2').show()
    $(this).hide()
})

// ステップ2の回答
$('.step2btn').on('click', function(){
    let answer = $(this).val()

    $('#step2 form').hide()
    $('#step2 .answer').show()
    $('#a2').text(answer)
    
    if(answer === '砂漠用バギー') {
        $('#step2 .result').show()
    } else {
        gameover('砂漠で水がなくなり' + player + 'さんの冒険は終わりました。')
    }
})

// ステップ2正解後の次の問題へ
$('#q2next').on('click', function(){
    $('#step3').show()
    $(this).hide()
})


function gameover(message) {
    $('#gameover-text').text(message)
    $('#gameover').show()
}

$('#restartBtn').on('click', function(){
    location.reload()
})








