// スマホとかで横幅がせまいとき、サブタイトルを削除する
const width = window.screen.width;
if (width < 700) {
    const right_elements = document.getElementsByClassName("right_element");
    for (element of right_elements) {
        element.remove();
    }
}