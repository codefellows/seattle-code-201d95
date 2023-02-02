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

// invoke their methods to render them to the DOM
let kittenArray = [jumper, frankie, serena];
frankie.render();
jumper.render();
serena.render();


// GET DATA FROM A FORM

// 1 - Get element from the dom
let kittenForm = document.querySelector('form');

// 3 - Define our event handler

let handleSubmit = function(event) {
  event.preventDefault();
  // event.target.<name on your HTML input>.value
  console.log(`hello ${event.target.kittenName.value}`);
  let kittenName = event.target.kittenName.value;
  let ageInMonths = parseInt(event.target.ageInMonths.value);
  let aboutKitten = event.target.aboutKitten.value;
  let imageURL = event.target.imageURL.value;
  let imageAlt = event.target.imageAlt.value;

  console.log(typeof ageInMonths);

  let favorites = [
    event.target.fav1.value,
    event.target.fav2.value,
    event.target.fav3.value
  ]
  // let's create an instance of Kitten using the information from the form
  // Kitten(name, arrayOfLikes, about, photoURL, photoAlt)
  let newKitten = new Kitten(kittenName, favorites, aboutKitten, imageURL, imageAlt);
  kittenArray.push(newKitten);
  newKitten.render();
}

// 2 - Add the event listener
kittenForm.addEventListener('submit', handleSubmit);
