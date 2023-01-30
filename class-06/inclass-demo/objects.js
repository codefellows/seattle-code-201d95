'use strict';

// DataTypes
// string
// numbers
// array
// boolean (true false)

const axelArray = [
  'Axel',
  6,
  'yellow tabby',
  true,
  true
];

// console.log(`My cat ${axelArray[0]} is ${axelArray[1]} years old. He is a ${axelArray[2]}`);

let arr = [] // we know this is an array
// let varName = {} - we know this is an object

let axelObj = {
  // an object is made of key-value pair
  // 'name' is key and 'Axel' is its value
  name: 'Axel',
  age: 6,
  breed: 'yellow tabby',
  spayedOrNeutered: true,
  vaccinated: {
    rabies: true,
    felv: true
  },
  'favorite cat food': 'meow mix',
  // functional logic assigned to objects are "methods"
  speak: function() {
    console.log('meow!');
  },
  about: function() {
    console.log(`My cat ${this.name} is ${this.age} years old. He is a ${this.breed}`);
  },
  favThings: ['string', 'ball', 'lazer pointer']

}
console.log(axelObj.vaccinated.test);
// dot notiation
// <object-name>.<key-name>
console.log(axelObj.name);

// console.log(`My cat ${axelObj.name} is ${axelObj.age} years old. He is a ${axelObj.breed}`);

// bracket notation
// <object-name>['<key-name']
console.log(axelObj['breed']);

console.log(axelObj['favorite cat food']);

axelObj.speak();

console.log(typeof console);
//console.log(console);

let arr2 = [1,2,3]
console.log(typeof arr2);

// length is a property (a key from a key value pair on this object)
console.log(arr2.length);

console.log(typeof arr2.length);
console.log(axelObj.vaccinated.rabies);

axelObj.about();
