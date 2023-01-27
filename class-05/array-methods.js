'use strict';

///              0     1      2        3       4
let months = ['March', 'April', 'May', 'June', 'July'];

// months[8] = 'November';
console.log(months);
//console.log(months[5]);

// array methods

// .pop()
// remove the last item on an array
let poppedItem = months.pop();
console.log('poppedItem: ', poppedItem);
console.log(months);

// .shift()
// remove the first item on an array
let shiftedValue = months.shift();
console.log('shiftedValue: ', shiftedValue);
console.log(months);

// .push()
// Add a value to the end of an array
months.push('July');
console.log(months);
months.push('August', 'September', 'October');
console.log(months);

// .unshift()
// Add a value to the beginning of an array
months.unshift('February');
console.log(months);

// .splice()
// change the values in the middle of an array
// it takes in at 2 arguments
// the first is the index of the first item you want removed
// and then the number of total items you want removed
months.splice(1, 0, 'March');
console.log(months);

months.unshift('January');
console.log(months);

months.push('November', 'December');
console.log(months);
