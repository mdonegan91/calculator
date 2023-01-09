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

// user interface logic 
const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"));

window.alert("The sum of those two numbers: " + add(number1, number2));
window.alert("The subtraction of those two numbers is: " + subtract(number1, number2));
window.alert("Multiplying these two numbers results in: " + multiply(number1, number2));
