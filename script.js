let number = '0';
let oldNumber = '0';
let operator = null;

function updateDisplay() {
  document.getElementById('result').textContent = number;
  document.getElementById('oldResult').textContent = oldNumber;
}

function inputNumber(value) {
  if (number === '0') {
    number = value.toString();
  } else {
    number += value.toString();
  }
  updateDisplay();
}

function allClear() {
  number = '0';
  oldNumber = '0';
  operator = null;
  updateDisplay();
}

function percentage() {
  number = (parseFloat(number) / 100).toString();
  updateDisplay();
}

function changeSign() {
  number = (parseFloat(number) > 0 ? -parseFloat(number) : Math.abs(parseFloat(number))).toString();
  updateDisplay();
}

function operationHandler(op) {
  operator = op;
  oldNumber = number;
  number = '0';
  updateDisplay();
}

function calculate() {
  oldNumber = parseFloat(oldNumber);
  number = parseFloat(number);
  if (operator === "/") {
    if (number === 0) {
      number = 'impossível dividir por 0';
      oldNumber = '0';
      operator = null;
    } else {
      number = (oldNumber / number).toString();
    }
  } else if (operator === "*") {
    number = (oldNumber * number).toString();
  } else if (operator === "-") {
    number = (oldNumber - number).toString();
  } else if (operator === "+") {
    number = (oldNumber + number).toString();
  }
  oldNumber = '0';
  updateDisplay();
}