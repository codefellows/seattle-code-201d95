'use strict';


console.log('hi');

// our window into the DOM
let profileContainer = document.getElementById('kittenProfiles');
console.log(profileContainer);

// kitten table windows into the DOM
let kittenTableBody = document.querySelector('tbody');
let kittenTableHead = document.querySelector('thead');

// create one kitten constructor function

function Kitten(name, arrayOfLikes, about, photoURL, photoAlt) {
  this.name = name;
  this.likes = arrayOfLikes;
  this.about = about;
  this.photoURL = photoURL;
  this.photoAlt = photoAlt;
  this.id = `${this.name}Profile`;
  this.renderList = function () {
    // functional logic
    let kittenArticle = document.getElementById(this.id);
    let ul = document.createElement('ul');

    for (let i = 0; i < this.likes.length; i++) {
      let li = document.createElement('li');
      li.textContent = this.likes[i];
      ul.appendChild(li);
    }
    kittenArticle.appendChild(ul);
  }
  this.render = function () {
    // create and append the article
    let kittenArticle = document.createElement('article');
    kittenArticle.setAttribute('id', this.id);
    profileContainer.appendChild(kittenArticle);

    // h3
    let kittenH3 = document.createElement('h3');
    kittenH3.textContent = this.name;
    kittenArticle.appendChild(kittenH3);

    // p
    let p = document.createElement('p');
    p.textContent = this.about;
    kittenArticle.appendChild(p)

    // img
    let img = document.createElement('img');
    img.src = this.photoURL;
    img.alt = this.photoAlt;
    kittenArticle.appendChild(img);

    this.renderList();
    this.renderTable();
  }
}

Kitten.prototype.renderTable = function() {
  let tr = document.createElement('tr');
  let thName = document.createElement('th');
  thName.textContent = this.name;
  tr.appendChild(thName);
  for (let i = 0; i < this.likes.length; i++) {
    let td = document.createElement('td');
    td.textContent = this.likes[i];
    tr.appendChild(td);
  }
  kittenTableBody.appendChild(tr);
}

// create Kitten instances

// Kitten(name, arrayOfLikes, about, photoURL, photoAlt)
let jumper = new Kitten(
  'Jumper',
  ['catnip', 'food', 'string'],
  'Jumper the cat is wonderful!',
  'images/jumper.jpeg',
  'Jumper is very cute here.'
);
let serena = new Kitten(
  'Serena',
  ['string', 'feathers', 'soft beds'],
  'Serena is a sweet kitty',
  'images/serena.jpeg',
  'adopt Serena'
);
let frankie = new Kitten(
  'Frankie',
  ['naps', 'treats', 'cat tree'],
  'Frankie is adorable, and is 12 months old.',
  'images/frankie.jpeg',
  'Frankie is available for adoption'
);

let kittenArray = [jumper, frankie, serena];
frankie.render();
jumper.render();
serena.render();


// invoke their methods to render them to the DOM








// we want to store kitten data in a JS object

/*
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
*/
