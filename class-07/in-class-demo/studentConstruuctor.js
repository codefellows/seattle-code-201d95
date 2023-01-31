'use strict';

let oneStudent = {
  name: 'Steve',
  codeClass: 201,
  inPerson: true
}

let twoStudent = {
  name: 'Sara',
  codeClass: 201,
  inPerson: true
}
console.log(oneStudent);

// constructor function - a function that will create objects
// capitalize the name of function

function Student(name, pronouns) {
  // "this" refers to the object that WILL BE created
  this.studentName = name;
  this.pronouns = pronouns;
  this.codeClass = 201;
  this.inPerson = true;
  this.introduce = function() {
    console.log(`Hi, my name is ${this.studentName}`);
  }
}

// create "instances" of Student
// we use the keyword "new"
let sara = new Student('Sara', 'She/Her');
let steve = new Student('Steve', 'They/Them');
console.log(sara);
console.log(steve);

// sara.hairColor = 'black';
// console.log(sara.hairColor);


// Prototype gives a value to all instance Students
Student.prototype.hairColor = 'black';
console.log(steve.hairColor);
console.log(sara.hairColor);

console.log(sara.studentName);
// steve.introduce();
// sara.introduce();

let studentArray = [steve, sara];

for (let i = 0; i < studentArray.length; i++) {
  studentArray[i].introduce();
  // I have access to values from each object in my array
  // maybe I could add some stuff together
}

console.log(studentArray);
