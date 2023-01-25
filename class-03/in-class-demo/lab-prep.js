'use strict';

/*
Add a 7th question that has multiple possible correct answers that are stored in an array.
Give the user 6 attempts to guess the correct answer.
The guesses will end once the user guesses a correct answer or they run out of attempts.
Display all the possible correct answers to the user.
Consider using a loop of some sort for this question.



*/
let score = 0;

let myFavColors = ['blue', 'gold', 'cream'];
let userResponse = 'cream';

// WHILE LOOP

let attemptsThatRemain = 3;

while (attemptsThatRemain) {
  attemptsThatRemain--;
  console.log(`I'm in the while loop. you have ${attemptsThatRemain} attemps remaining`);
  for (let i = 0; i < myFavColors.length; i++) {
    console.log(myFavColors[i]);
    if (myFavColors[i] === userResponse) {
      console.log('You are correct!')
    }
  }
}

// FOR LOOP

let attemptsToGo = 5;
let answeredCorrectly = false;

for (let i = 0; i < attemptsToGo; i++) {
  console.log(`the users has ${attemptsToGo - i - 1} attempts remaining`);
  for (let j = 0; j < myFavColors.length; j++) {
    console.log(myFavColors[j]);
    if (myFavColors[j] === userResponse) {
      console.log('You are correct!')
      score++;
    }
  }
}


/*
Add a 6th question to the guessing game that takes in a numeric input by prompting the user to guess a number.
Indicates through an alert if the guess is “too high” or “too low”.
It should give the user exactly four opportunities to get the correct answer.
After all attempts have been exhausted, tell the user the correct answer. Consider using a loop of some sort.

user is prompted to guess
save as a variable the user response

compare that variable. The following possible responses:

- too high
- too low
- correct answer
- not a num
- not a valid number in the range
- if they out of guess, give them the answer


*/



// WHILE LOOP

let attemptsRemaining = 4;

while (attemptsRemaining) {
  attemptsRemaining--;
  // code that runs as long as the condition is evaluated to true
  console.log(`the users has ${attemptsRemaining} attempts remaining`);
}

// FOR LOOP

let attempts = 7;

for (let i = 0; i < attempts; i++) {
  console.log(`the users has ${attempts - i - 1} attempts remaining`);
}
