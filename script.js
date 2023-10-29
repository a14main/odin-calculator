let number1;
let number2;
let operator;
let currentNum = 0;

const result = document.querySelector('#result');
const equation = document.querySelector('#equation');
const numbers = document.querySelectorAll('.number');
numbers.forEach(btn => {
  btn.addEventListener('click',() => handleNum(Number(btn.textContent)));
});
const operators = document.querySelectorAll('.operator');
operators.forEach(btn => btn.addEventListener('click', () => handleOperator(btn.textContent)));
const equals = document.querySelector('#equals');
const clear = document.querySelector('#clear');
equals.addEventListener('click',handleEquals);
clear.addEventListener('click',handleClear);

function handleNum(n) {
  currentNum = currentNum * 10 + n;
  updateDisplay(currentNum);
}

function handleOperator(op) {
  number1 = currentNum;
  currentNum = 0;
  operator = op;
  updateEquation();
  updateDisplay(0);
}

function handleEquals() {
  number2 = currentNum;
  currentNum = operate(operator,number1,number2);
  updateEquation();
  
  updateDisplay(currentNum);
}

function handleClear() {
  number1 = null;
  number2 = null;
  operator = null;
  currentNum = 0;
  updateEquation();
  updateDisplay(0);
}

function updateDisplay(num) {
  result.textContent = num.toString();
}

function updateEquation() {
  equation.textContent = `${number1 ?? '_'} ${operator ?? ''} ${number2 ?? ''}`;
}



function operate(op, a, b) {
  switch(op) {
    case '+':
      return add(a,b);
    case '-':
      return subtract(a,b);
    case '*':
      return multiply(a,b);
    case '/':
      return divide(a,b);
    default:
      return 'ERR';
  }
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}