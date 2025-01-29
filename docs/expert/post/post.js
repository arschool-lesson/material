// コメントボタンを押した時の処理
$('#commentBtn').on('click', function(){
    // 投稿された名前とコメントを取得
    let name = $('#name').val()
    let comment = $('#comment').val()

    // 名前が入力されていない場合はアラートを表示
    if(name === '' ) {
        alert('名前を入力してください')
        return
    }

    // コメントが入力されていない場合はアラートを表示
    if(comment === '' ) {
        alert('コメントを入力してください')
        return
    }

    // コメントのHTMLを作成
    let $comment = $('<div class="comment"><h3>' + name + '</h3><p>' + comment + '</p></div>')

    // コメントを表示
    $('#comments').append($comment)

    // 名前とコメントの入力欄を空にする
    $('#name').val('')
    $('#comment').val('')

})
