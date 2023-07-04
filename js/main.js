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