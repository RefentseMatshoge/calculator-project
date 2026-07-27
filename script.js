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

function calculate() {

    let secondNumber = display.value;
    let result;

    if (operator === "+") {
        result = Number(firstNumber) + Number(secondNumber);
    }

    display.value = result;
}
