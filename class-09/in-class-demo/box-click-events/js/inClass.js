'use strict'

/*

EVENT HANDLING

Event — is FIRED or RAISED

When an event is fired
Code is TRIGGERED


EVENT TYPES

- click
- submit

Also
- input
- hover
- on change
- on page load
- on mouse over
- on key release

* Event listener
- code that is triggered when an event is fired

* Bind
- blind or tether an event listener to the event

* Event Handlers
- the code that runs in response to the event


There are lot of different ways of doing this.
Some are old - don't use thhem

What we will use:
****** DOM Level 2 Event Handlers ********

1 - I need an element from the DOM that I can attach an event to

use either
document.getElementById()
document.querySelector()

*/

let myContainer = document.getElementById('container');
let results = document.getElementById('results');

/*

3 -

Event handler
- the code that is envoked by the Event Listerner when an event is raised

*/

function handleClick(event) {
  console.log(event.target.id);
  let pTag = document.createElement('p');
  if (event.target.id) {
    pTag.textContent = `${event.target.id} was clicked.`
  } else {
    pTag.textContent = `Please click a box.`
  }
  results.appendChild(pTag);
}


/*
2 - Event Listener
- addEventListener take in 2 parameters
- 1 - the type of event as a string
- 2 - a callback function

elementName.addEventListener('typeOfEvent', functionName);

*/

myContainer.addEventListener('click', handleClick)

// addEventListener envokes the callback function when a click event occurs. It passing in an event object when it invokes the callback function
// handleClick(event)

/*

// CALLBACK FUNCTION EXAMPLE
function greeting(name) {
  console.log(`Hello ${name}`);
}

function capitalize(name) {
  let cap = name.toUpperCase();
  console.log(cap);
}

function processUserInput(callback) {
  let name = prompt('what is your name?');
  callback(name); // the function we passed gets invoked by this processUserInput function
}

processUserInput(greeting);
processUserInput(capitalize);

*/




/*


DO NOT DO THIS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
bad event listeners

older ways of doing this, that will only work 70% of the time.

- event listener in the HTML
Ex.:
<article onClick="handleClick">


- this type of event listener in the JavaScript
Ex:
button(document.getElementById('button')).onSubmit=handleEvent;

in HTML:
<div id="button"></div>
*/
