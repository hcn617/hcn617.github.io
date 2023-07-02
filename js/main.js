
let number = document.getElementById("number");
let up_button = document.getElementById("up_button");
let down_button = document.getElementById("down_button");

const up_func = () => {
    let n = parseInt(number.textContent);
    n += 1;
    number.textContent = n;
};

up_button.addEventListener("click", up_func);

const down_func = () => {
    let n = parseInt(number.textContent);
    n -= 1;
    number.textContent = n;
};

down_button.addEventListener("click", down_func);
