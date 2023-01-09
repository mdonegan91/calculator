// business logic
function add(number1, number2){
  return number1 + number2;
}

function subtract( number1, number2){
  return number1 - number2;
}

function multiply (number1, number2){
  return number1 * number2;
}

function divide (number1, number2){
  return number1 / number2;
}

// user interface logic 
const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"));

window.alert("The sum " + number1 + " " + number2 + " of those two numbers: " + add(number1, number2) + 
"The subtraction  " + number1 + " " + number2 + " of those two numbers is: " + subtract(number1, number2) + 
"Multiplying  " + number1 + " " + number2 + " these two numbers results in: " + multiply(number1, number2) + 
"Dividing  " + number1 + " " + number2 + " these two numbers results in: " + divide(number1, number2));