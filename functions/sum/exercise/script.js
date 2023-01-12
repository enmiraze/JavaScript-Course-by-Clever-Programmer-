/* 
  TODO: Write a function that sums two numbers
  TODO: Write a function that subtracts two numbers
  TODO: Write a function that divides two numbers.
  TODO: Write a function that multiplies two numbers.
  *NOTE* be sure to handle dividing by zero 😉
  ES5 Syntax: function Add(){}
  ES6 Syntax (Arrow function): const add = () => {}
*/

// function add(a, b){
//   return a + b
// }

const add = (a, b) => a + b;

// function sub(a, b){
//   return a - b
// }

const sub = (a, b) => a - b;

// function div(a, b){
//   return a / b
// }

const div = (a, b) => a / b;

// function mul(a, b){
//   return a * b
// }

const mul = (a, b) => a * b;

console.log('hello from the SUM exercise')
/* 
  TODO: create a function that console logs the result of any of the above operations.
*/

let addResult = add(10, 5);
let subResult = sub(20, 7);
let divResult = div(10, 5);
let mulResult = mul(10, 5);

console.log(addResult);
console.log(subResult);
console.log(divResult);
console.log(mulResult);