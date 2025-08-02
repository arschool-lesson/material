let pet = {
    syurui: '犬',
    name: 'ポチ',
    age: '3歳'
}

for (let key in pet) {
    console.log('キーは' + key)
    console.log('値は' + pet[key])
}
