console.log('starting gas.js');

// いじらない！！Google Apps Script の Web アプリの URL
const macroURL = 'https://script.google.com/macros/s/AKfycbymFNT7YbXZb8kGvOub6tSx5rMsPPGs8PvnK79MX156QdtYozl2Z-IBzcQOwmAihwcmmw/exec'
// シートのID
// https://docs.google.com/spreadsheets/d/13_jpNtKXkSriMesB0cbTEgpuoE2HP9tXt8tfzammMOo/edit?gid=0#gid=0
// の場合だと 13_jpNtKXkSriMesB0cbTEgpuoE2HP9tXt8tfzammMOo
const sheetID ='1rQ_-ezmjJsqycIW0x5L_OaAh1y3-28KVEffn-qPX4A8'

// シート名。sheet1, シート1など
// const sheetName = 'Sheet1'

// データを追加する
$('#add-button').on('click', function () {
    // ここにプログラミングしていこう
    // スプレッドシートのシート名。sheet1, シート1など
    let sheetName = 'Sheet1'

    let data = ['a', 'b', 'c', 'd', getDateTimeString()]
    // 下記は スプレッドシートに
    addData(sheetName, data)
})

function getDateTimeString() {
    const now = new Date();

    const yyyy = now.getFullYear();
    const mm = String(now.getMonth() + 1).padStart(2, '0'); // 月は0始まり
    const dd = String(now.getDate()).padStart(2, '0');
    const hh = String(now.getHours()).padStart(2, '0');
    const MM = String(now.getMinutes()).padStart(2, '0');
    const ss = String(now.getSeconds()).padStart(2, '0');

    return `${mm}-${dd} ${hh}:${MM}:${ss}`;
}

// すべてのデータを取得する
$('#get-all-button').on('click', function () {
    // ここにプログラミングしていこう
    // スプレッドシートのシート名。sheet1, シート1など
    let sheetName = 'Sheet1'
    // 下記は スプレッドシートに
    getAllData(sheetName)
        .then(function(data) {
            //ここに受け取ったあとの処理を書きます
            console.log(data)
        })
        .catch(function(error) {
            console.error("APIエラー:", error)
        })
})

// 1件のデータを取得する
$('#get-row-button').on('click', function () {
    // ここにプログラミングしていこう
    // スプレッドシートのシート名。sheet1, シート1など
    let sheetName = 'Sheet1'
    let rowId = $('#rowId').val()
    // 下記は スプレッドシートに
    getRowData(sheetName, rowId)
        .then(function(data) {
            //ここに受け取ったあとの処理を書きます
            console.log(data)
        })
        .catch(function(error) {
            console.error("APIエラー:", error)
        })
})

/**
 * スプレッドシートの全件を取得する関数
 * @param sheetName
 * @returns {*}
 */
function getAllData(sheetName) {
    console.log('スプレッドシートに接続します: getAllData')
    return $.ajax({
        url: macroURL, // GASのURL
        type: 'GET',
        dataType: 'jsonp', // JSONP を利用
        data: {
            action: 'get',
            sheetID: sheetID,
            sheetName: sheetName,
        },
    })
        .then(function (response) {
            console.log('APIレスポンス:', response);
            return response.data
        })
}

/**
 * スプレッドシートの1件を取得する関数
 * @param sheetName
 * @param rowId
 * @returns {*}
 */
function getRowData(sheetName, rowId) {
    console.log('スプレッドシートに接続します: getRowData')
    return $.ajax({
        url: macroURL, // GASのURL
        type: 'GET',
        dataType: 'jsonp', // JSONP を利用
        data: {
            action: 'get',
            sheetID: sheetID,
            sheetName: sheetName,
            row: rowId
        },
    })
        .then(function (response) {
            console.log('APIレスポンス:', response);
            return response.data
        })
}

/**
 * スプレッドシートにデータを追加する関数
 * @param sheetName
 * @param data
 */
function addData(sheetName, data = []) {
    let ajaxData = {
        action: 'add',
        sheetID: sheetID,
        sheetName: sheetName,
    }

    for (let i = 0; i < data.length; i++) {
        ajaxData['col' + i] = data[i]
    }
    ajaxData['count'] = data.length
    console.log('スプレッドシートに接続します: addData')
    console.log('送信データ:', ajaxData);

    $.ajax({
        url: macroURL, // GASのURL
        type: 'GET',
        dataType: 'jsonp', // JSONP を利用
        data: ajaxData,
    })
        .done(function (response) {
            console.log('APIレスポンス:', response);
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            console.error('APIエラー:', textStatus, errorThrown);
        });
}
