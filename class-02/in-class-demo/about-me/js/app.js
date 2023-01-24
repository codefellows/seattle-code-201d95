'use strict';

console.log('hi');


/*


&& — is the "logical and"
One false and it will not run

|| — is the "logical or" (double pipe)

! — the "logical not" (bang)


// basic format:

if (condition){
  // the code that should run if the condition is true
} 

*/

let doILikeStarWars = prompt("Do I like Star Wars? Yes or No?").toLowerCase();

if (doILikeStarWars === 'yes' || doILikeStarWars === 'y') {
  console.log('You are correct! I do like Star Wars')
} else if (doILikeStarWars === 'no' || doILikeStarWars === 'n') {
  console.log('You are wrong. I do like Star Wars');
} else {
  console.log('Please answer yes or no')
}
