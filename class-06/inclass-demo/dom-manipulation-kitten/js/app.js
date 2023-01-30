'use strict';


console.log('hi');

// our window into the DOM
let profileContainer = document.getElementById('kittenProfiles');
console.log(profileContainer);

// we want to store kitten data in a JS object

let jumper = {
  name: 'Jumper',
  likes: ['catnip', 'food', 'string'],
  renderList: function () {
    // '6am: 16 cookies'
    let ul = document.createElement('ul');

    // li.textContent = `6am: ${seattle.someValueInArray[i]}`;
    for (let i = 0; i < this.likes.length; i++) {
      let li = document.createElement('li');
      li.textContent = this.likes[i];
      ul.appendChild(li);
    }
    kittenArticle.appendChild(ul);
  }
}

// we want to render that data onto our HTML using JS

// 3 steps to render to the DOM
// - 1. create an element
// declare a varialbe and then call createElement and pass the html tag name as a string to createElement
let kittenArticle = document.createElement('article');

// - 2. give it content

// - 3. append it to the DOM
// parent element in the DOM to append this new element to. Pass appendChild() the new element by its variable name
// kittenArticle is the variable name of the DOM element we created
profileContainer.appendChild(kittenArticle);


// h3
let kittenH3 = document.createElement('h3');
kittenH3.textContent = 'Jumper';
kittenArticle.appendChild(kittenH3);

// p
let p = document.createElement('p');
p.textContent = 'Jumper the cat is wonderful!';
kittenArticle.appendChild(p)

// img
let img = document.createElement('img');
img.src = 'images/jumper.jpeg';
img.alt = 'Jumper is very cute here.'
kittenArticle.appendChild(img);

jumper.renderList();
