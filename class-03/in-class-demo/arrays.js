'use strict';

/*

WHAT IS AN ARRAY?
- A container that holds values
- A list
- A collection

An array is made up of elements / items
Each element has an index in that array

The first index is 0.

*/

let strName = '';
let arrName = []; // square bracks let us know this is an array
  /// just like how '' let us know something is a string

//                 0           1      2       3      4      5
let parksNRec = ['Leslie', 'April', 'Ron', 'Andy', 'Ann', 'Tom'];

console.log(parksNRec);
console.log(`parksNRec: ${parksNRec}`);

let waffles = ['JJ\'s', true, [228, 343], 'bacon'];

console.log(parksNRec.length);

parksNRec[6] = 'Donna';

// adds and element to the end of the array
parksNRec.push('Tammy', 'Chris', 'Jerry');

// adds an element to the front of the array
// it also shifts all the other indexes to adjust for it
parksNRec.unshift('Tim');

// FOR LOOPS

// a condition that determines if the loop continues to run.
// loop code that runs as long as a condition is true

/*

1 - intantiate the variable (in this case a counter)
let i = 0;
The "i" stands for iterator

2 - evaludate the varialbe (the condition)
i < parksNRec.length;

3 - increment our counter variable
i++
shorter version of this:
i = i + 1;

*/


//               1     <    6
for (let i = 0; i < parksNRec.length; i++) {
  // this code that runs as long as the condition evaluated to true
  console.log(parksNRec[i]);
}
