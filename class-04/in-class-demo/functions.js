'use strict'

// varString
// this one works
// birthdayGreeting();

// can't invcoke a function expression before we declare it.
// birthdayGreetingAnotherWay();

// let varString = 'a value';
// let varName;


// Function declaration
function birthdayGreeting(name, cake = 'vanilla', from = 'the team at Dunder Mifflin') {
  console.log(`Happy Birthday ${name}`);
  console.log(`We hope that your day is filled with joy and lots of good ${cake} cake`);
  console.log(`${name}, you are the best!`);
  console.log(`Best wishes from ${from}`);
}

// envoke function
// call the function
// we need the () on the end to make this happen
birthdayGreeting('Pam', 'Chocolate', 'Jim');
birthdayGreeting('Jim', 'Pinapple');
birthdayGreeting('Michael', 'Vanilla');
birthdayGreeting('Dwight', 'Beat');


// function expression declaration
let birthdayGreetingAnotherWay = function() {
  console.log('Happy Birthday Another Way!')
}


// birthdayGreetingAnotherWay();
