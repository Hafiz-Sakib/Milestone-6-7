// // function declaration
// function add(num1, num2) {
//     return num1 + num2;
// }
// // function expression
// const add2 = function add2(num1, num2) {
//     return num1 + num2;
// }
// // function expression (anonymous)
// const add3 = function (num1, num2) {
//     return num1 + num2;
// }
// //arrow function
// const add4 = (num1, num2) => num1 + num2;

// const sum1 = add(15, 17);
// const sum2 = add2(15, 17);
// const sum3 = add3(15, 17);
// const sum4 = add4(15, 17);
// console.log(sum1, sum2, sum3, sum4);
// // document.getElementById('my-btn').onclick = function handleEvent(){

// // }

//function Declaration
function add(num1, num2) {
  return num1 + num2;
}
const sum = add(10, 10);
console.log(sum);

//anonymous function with variable
const add2 = function (num1, num2) {
  return num1 + num2;
};
const sum2 = add2(15, 15);
console.log(sum2);

//Brand new Arrow Function

const add3 = (num1, num2) => num1 + num2;

const sum3 = add3(20, 20);
console.log(sum3);

//no parameter call

const add4 = (num1, num2) => num1 + (num2 = 30);

const sum4 = add4(20);
console.log(sum4);
