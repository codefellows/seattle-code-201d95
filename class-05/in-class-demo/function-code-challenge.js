'use strict';

let numbers = [3, 4, 5, 6, 7, 8, 9, 10];
let ages = [12, 24, 31, 46, 57];

// Code Challenge
// 1 - take in an array into a function
// 2 - function should add the first 3 elements of the array
// 3 - function should return a DIFFERENT array with 2 elements. The first element being a message (string), and the second will be the sum of the 3 numbers

function adder(arr) {
  let sum = arr[0] + arr[1] + arr[2];
  let message = `our sum is ${sum}`;
  return [message, sum];
}

let result1 = adder(numbers)[1];
let result2 = adder(ages)[1];
console.log(result1, result2);

let grandTotal = result1 + result2;
console.log(grandTotal);
