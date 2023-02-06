'use strict';

/*

- collection of goat photos
- user is presented the photos in pairs — should be different photos
- votes for their fav
- app records the vote
- presents user with new pair of photos ...
- after 15 match-ups display results of the vote
  - both the number of votes for each image, also the number of times the user saw the image
*/


// GLOBAL VARIABLES

// window into the DOM

// querySelector takes in a CSS selector
let myContainer = document.querySelector('section');
// + is the adjacent (AKA next) sibling selector, will select any div that comes right after a section
let myButton = document.querySelector('section + div');

let image1 = document.querySelector('section img:first-child');
let image2 = document.querySelector('section img:nth-child(2)');

let numberOfMatchUps = 0;
let numberOfMatchUpsAllowed = 5;

let allGoats = [];



// CONSTUCTOR FUNCTION

/*
- objects
  constructor functions - goat constructor
    - name
    - image src
    - view
    - likes
*/

function Goat(name, fileExtension = 'jpg') {
  this.name = name;
  this.src = `images/${name}.${fileExtension}`;
  this.views = 0;
  this.likes = 0;
}

// create instances of Goat

let sweater = new Goat('sweater-goat');
let cruisin = new Goat('cruisin-goat', 'png');
let float = new Goat('float-your-goat');
let hand = new Goat('goat-out-of-hand');
let kissing = new Goat('kissing-goat');
let sassy = new Goat('sassy-goat');
let smile = new Goat('smiling-goat');

// put all the goats into an array
// - goat array (we need an index so we can randomly select goats)
allGoats = [sweater, cruisin, float, hand, kissing, sassy, smile];

/*

- function to get 2 random goats
    - Math.random()
    - check to confirm not the same goat
    - to load new images (increment the views)
    - increment the number of match ups

*/

// GLOBAL FUNCTIONS

function selectRandomGoat() {
  return Math.floor(Math.random() * allGoats.length); // The maximum is exclusive and the minimum is inclusive
}

function renderGoats() {
  let goat1 = selectRandomGoat();
  let goat2 = selectRandomGoat();
  console.log(goat1, goat2);
  // seriously consider using an array here
  // remember; how do you know if an array includes soemthing?
  // google it and find out
  while (goat1 === goat2) {
    goat2 = selectRandomGoat();
    console.log(goat1, goat2);
  }

  // change the images displayed in the DOM
  image1.src = allGoats[goat1].src;
  image2.src = allGoats[goat2].src;
  image1.alt = allGoats[goat1].name;
  image2.alt = allGoats[goat2].name;
  allGoats[goat1].views++;
  allGoats[goat2].views++;

  // note this as an addititional match up
  numberOfMatchUps++;
}

function renderResults() {
  let results = document.querySelector('ul');
  for (let i = 0; i < allGoats.length; i++) {
    let li = document.createElement('li');
    li.textContent = `${allGoats[i].name} had ${allGoats[i].views} views and ${allGoats[i].likes} likes.`;
    results.appendChild(li);
  }
}


// - event handler
function handleGoatClick(event) {
  // console.log(event);
  // which image got clicked?
  console.log(event.target.alt);
  let clickedGoat = event.target.alt;
  // find the goat in the array using the alt text
  for (let i = 0; i < allGoats.length; i++) {
    if (allGoats[i].name === clickedGoat) {
       // update value of likes on goat object
      allGoats[i].likes++;
    }
  }
  // - change image of goat
  if (numberOfMatchUps < numberOfMatchUpsAllowed) {
    renderGoats();
  } else {
    myContainer.removeEventListener('click', handleGoatClick);
    myButton.addEventListener('click', renderResults);
  }
}



/*
- event listener - click events
- event handler
  - record vote for goat - find the goat in the array and increment its likes
- DOM element to record record
    - vote for goat
    - change image of goat
- function
  - after 15 votes/match ups render results
  - if statement? for loop? while loop?
- function to render the results
  - DOM element
  - create/text-conent/append

*/



renderGoats();


// - event listener - click events

myContainer.addEventListener('click', handleGoatClick)
