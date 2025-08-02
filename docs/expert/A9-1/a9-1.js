let a1 = 'ア'
let b1 = 'あ'
if (a1 > b1) {
    console.log(a1 + 'の方が ' + b1 + 'より大きい')
} else {
    console.log(b1 + 'の方が ' + a1 + 'より大きい')
}


console.log('スタート')
let a = 9
console.log(9+'10')

/**
 * ランダムな数値を取得
 */
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
