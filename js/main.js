// スマホとかで横幅がせまいとき、サブタイトルを削除する
const width = window.screen.width;
if (width < 700) {
    const pc_elements = document.getElementsByClassName("only-pc");
    for (element of pc_elements) {
        element.remove();
    }
}

// 現在時刻を表示
const indicate_time = () => {
    const time = document.getElementById("now-time");
    const zfill2 = (num) => {
        let sn = String(num);
        if (sn.length === 1) {
            sn = '0' + sn;
        }
        return sn;
    }
    let now = new Date();
    let month = zfill2(now.getMonth() + 1);
    let date = zfill2(now.getDate());
    let hour = zfill2(now.getHours());
    let minute = zfill2(now.getMinutes());
    let second = zfill2(now.getSeconds());
    time.textContent = `${month}/${date} ${hour}:${minute}:${second}`;
}
setInterval(indicate_time, 1000);