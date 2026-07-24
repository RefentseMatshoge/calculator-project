let display = document.getElementById("display");

let firstNumber = "";
let operator = "";

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function chooseOperator(op) {
    firstNumber = display.value;
    operator = op;
    display.value = "";
}
