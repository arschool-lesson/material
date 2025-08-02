// #1 例題
// id=schoolに学校名を追加する
$('#q1-sample').on('click', function () {
    let materials = ['Scratch', '3Dプリンタ', 'JavaScript', 'Unity']
    for (let material of materials) {
        $('#kyouzai').append('<p>' + material + '</p>')
    }
})


// #1 演習
// id=gameに下記の人気タイトルを追加してください
// マインクラフト, Roblox, フォートナイト, スマブラ
let isQ1Show = false
$('#q1-button').on('click', function () {
    if(isQ1Show) return
    let gameTitle = [
        'マインクラフト',
        'Roblox',
        'フォートナイト',
        'スマブラ'
    ]

// text を #postに pタグで追加する
    for (let title of gameTitle) {
        $('#game').append('<li>' + title + '</li>')
    }
    isQ1Show = true
})


$('#q2-sample').on('click', function () {
    // 校舎とその説明を追加する
    let school = $('<div></div>')
    school.append('<h3>オンライン</h3>')
    school.append('<p>全国どこからでも参加できる</p>')
    $('#school').append(school)

    school = $('<div></div>')
    school.append('<h3>自由が丘</h3>')
    school.append('<p>アルスクール最大の校舎</p>')
    $('#school').append(school)

    school = $('<div></div>')
    school.append('<h3>中野</h3>')
    school.append('<p>アルスクール発祥の地</p>')
    $('#school').append(school)
})


$('#q2-button').on('click', function () {
    let areaList = ['北海道', '東北', '関東', '中部', '近畿', '中国', '四国', '九州']
    let areaText = [
        '北海道は日本の最北端に位置し、日本最大の面積を持つ都道府県です。',
        '東北地方は本州の北部に位置し、自然が豊かで冬は雪が多く、夏は祭りが盛んです。',
        '関東地方は東京を中心に日本の政治・経済の中心地で、大都市が多く人口も集中しています。',
        '中部地方は本州の中央に位置し、多様な地形があり、伝統文化や工芸が盛んです。',
        '関西地方は古くから日本の文化や歴史の中心地として栄え、大阪のような大都市もあります。',
        '中国地方は本州の西部に位置し、山陰と山陽に分かれ、歴史的な街並みや自然景観が魅力です。',
        '四国地方は本州の南にあり、自然が豊かで、四国八十八ヶ所巡りなどの伝統文化があります。',
        '九州地方は日本の南西部にあり、温暖な気候で歴史的に海外との交流も盛んでした。'
    ]

    // 各地方についてのエリア名と説明を追加する
    // id=japanに下記のエリア名と説明を追加してください
    // 北海道, 東北, 関東, 中部, 関西, 中国, 四国, 九州
    for (let i = 0; i < areaList.length; i++) {
        let area = $('<div class="area"></div>')
        // エリア名を追加
        area.append('<h3>' + areaList[i] + '</h3>')
        // 説明を追加
        area.append('<p>' + areaText[i] + '</p>')
        // #japanに追加
        $('#japan').append(area)
    }

})


// #演習3
// オンライン校の時間割を作成する
$('#q3-button').on('click', function () {
    let lessonTime = [
        '火曜 16:30-18:00', '火曜 17:00-18:00', '火曜 18:30-19:30',
        '水曜 9:00-10:30', '水曜 16:00-17:30', '水曜 20:00-21:00',
        '木曜 17:30-19:00', '木曜 19:30-20:30',
        '金曜 16:00-17:30', '金曜 18:00-19:30',
        '土曜 8:00-9:30', '土曜 10:00-11:30', '土曜 13:00-14:30', '土曜 15:00-16:30', '土曜 18:30-19:30',
        '日曜 8:00-9:30', '日曜 10:00-11:30', '日曜 13:00-14:30', '日曜 15:00-16:30', '日曜 17:00-18:30',
    ]

    let lessonCourse = [
        'プログラミング', 'プログラミング', 'エキスパート',
        'プログラミング', 'プログラミング', 'エキスパート',
        'プログラミング', 'イノベーター',
        'プログラミング', 'プログラミング',
        'プログラミング', 'プログラミング', 'プログラミング', 'プログラミング', 'エキスパート',
        'プログラミング', 'プログラミング', 'プログラミング', 'プログラミング', 'プログラミング',
    ]

    //平日のコースを id=weekday のtableに追加する
    for (let i = 0; i < lessonTime.length; i++) {
        let lesson = $('<tr></tr>')
        lesson.append('<td>' + lessonTime[i] + '</td>')
        lesson.append('<td>' + lessonCourse[i] + '</td>')

        // 対象学年を追記
        // コースがプログラミングの場合は 小2-中3、エキスパートの場合は小5-高3、イノベーターは小5-大学生
        let grade = ''
        if (lessonCourse[i] === 'プログラミング') {
            grade = '小2-中3'
        } else if (lessonCourse[i] === 'エキスパート') {
            grade = '小5-高3'
        } else if (lessonCourse[i] === 'イノベーター') {
            grade = '小5-大学生'
        }
        lesson.append('<td>' + grade + '</td>')

        //土曜日、日曜日で追加する表を分ける
        if (lessonTime[i].indexOf('土曜') > -1 || lessonTime[i].indexOf('日曜') > -1) {
            $('#weekend').append(lesson)
        } else {
            $('#weekday').append(lesson)
        }
    }
})

