// スマホとかで横幅がせまいとき、only-pcクラスの要素を削除する
const width = window.screen.width;
if (width < 700) {
    const pc_elements = document.getElementsByClassName("only-pc");
    while (pc_elements.length > 0) {
        pc_elements[0].remove();
    }
}

// 現在時刻を表示
const indicate_time = () => {
    const time = document.getElementById("now-time");
    if (time == null) {
        return;
    }
    const zfill2 = (num) => {
        let sn = String(num);
        if (sn.length === 1) {
            sn = '0' + sn;
        }
        return sn;
    }
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let now = new Date();
    let month = zfill2(now.getMonth() + 1);
    let date = zfill2(now.getDate());
    let day = days[now.getDay()];
    let hour = zfill2(now.getHours());
    let minute = zfill2(now.getMinutes());
    let second = zfill2(now.getSeconds());
    time.textContent = `${month}/${date} (${day}) ${hour}:${minute}:${second}`;
}
setInterval(indicate_time, 1000);


// PythonEDのテーブルを作成
const PythonED_table = document.getElementById("PythonED_table");
const title = [
    "Pythonの環境",
    "コーディング規約",
    "Pythonの言語仕様",
    "Pythonのクラス",
    "型ヒント",
    "テキストの処理",
    "数値の処理",
    "日付と時刻の処理",
    "データ型とアルゴリズム",
    "汎用OS・ランタイムサービス",
    "ファイルとディレクトリへのアクセス",
    "データ圧縮、アーカイブと永続化",
    "特定のデータフォーマットを扱う",
    "インターネット上のデータを扱う",
    "HTML/XMLを扱う",
    "テスト",
    "デバッグ",
    "暗号関連",
    "並行処理、並列処理"
];
const page = [
    17 - 2,
    39 - 18,
    81 - 40,
    107 - 82,
    114 - 108,
    145 - 124,
    161 - 146,
    176 - 162,
    221 - 184 - (3 + 2),
    245 - 222,
    265 - 246,
    283 - 266,
    296 - 284,
    338 - 320 - 5,
    365 - 344,
    399 - 366,
    423 - 400,
    441 - 424,
    472 - 442
];
const question = [1, 2, 7, 3, 2, 4, 0, 2, 5, 2, 2, 0, 2, 2, 0, 3, 2, 1, 0];
for (let i = 0; i < 19; i++) {
    let new_row = document.createElement("tr");

    let col1 = document.createElement("td");
    col1.textContent = i + 1;
    new_row.append(col1);

    let col2 = document.createElement("td");
    col2.textContent = title[i];
    new_row.append(col2);

    let col3 = document.createElement("td");
    col3.textContent = page[i];
    new_row.append(col3);

    let col4 = document.createElement("td");
    col4.textContent = question[i];
    new_row.append(col4);

    let col5 = document.createElement("td");
    let priority_value = Math.round(1000 * question[i] / page[i]);
    col5.textContent = priority_value;
    new_row.append(col5);

    if (priority_value == 0) {
        new_row.style.backgroundColor = "silver";
    } else if (priority_value <= 100) {
        new_row.style.backgroundColor = "#66CC99";
    } else if (priority_value <= 150) {
        new_row.style.backgroundColor = "#FFFF44";
    } else {
        new_row.style.backgroundColor = "orange";
    }

    PythonED_table.append(new_row);
}