"use strict";
let fname;
// fname=10;
fname = "Garima";
let lname = fname.toUpperCase();
console.log(lname);
let dob = "25";
let result = parseInt(dob);
console.log(result);
let isValid = true;
console.log(isValid);
let arr;
let depList;
let numList;
numList = [1, 2, 3, 4, 5, 6];
let ans = numList.filter((num) => num > 2);
console.log(ans);
let num = numList.find((num) => num === 2);
console.log(num);
let sum = numList.reduce((acc, num) => acc + num);
console.log(sum);
let c = 2 /* Color.blue */;
let swapNumbs;
function swapNumbers(num1, num2) {
    return [num1, num2];
}
swapNumbs = swapNumbers(10, 20);
const sub = (num1, num2) => num1 - num2;
const mul = (num1, num2, num3) => num1 * num2;
console.log(mul(8, 9));
function add(num1, num2, num3) {
    return num3 ? num1 + num2 + num3 : num1 + num2;
}
function add2(num1, num2, ...num3) {
    return num1 + num2 + num3.reduce((a, b) => a + b, 0);
}
let numbers = [4, 5, 6, 7, 8];
console.log(add2(2, 3, ...numbers));
function getItems(items) {
    return new Array().concat(items);
}
let concatResult = getItems([1, 2, 3, 4, 5]);
console.log(concatResult);
