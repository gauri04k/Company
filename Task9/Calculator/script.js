let selectedBox = "num1";
document.getElementById("num1").onclick = function() {
    selectedBox = "num1";
}
document.getElementById("num2").onclick = function() {
    selectedBox = "num2";
}
let numbers = document.querySelectorAll(".num");

numbers.forEach(function(button) {
    button.onclick = function() {
        document.getElementById(selectedBox).value += button.innerText;
    }
});

let operator = "";

let ops = document.querySelectorAll(".op");
ops.forEach(function(button) {
    button.onclick = function() {
        operator = button.innerText;
    }
});

document.getElementById("equal").onclick = function() {

    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);
    let ans = 0;

    if (operator === "+") ans = a + b;
    if (operator === "-") ans = a - b;
    if (operator === "*") ans = a * b;
    if (operator === "/") ans = b !== 0 ? a / b : "Error";

    document.getElementById("result").innerText = ans;

    document.getElementById("equal").onclick = function() {
        style
    }
}