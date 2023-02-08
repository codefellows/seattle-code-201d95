'use strict';

function Drink(drinkType, milk, size) {
  this.drinkType = drinkType;
  this.milk = milk;
  this.size = size;
}

Drink.prototype.report = function() {
  console.log(`This is a ${this.drinkType} with ${this.milk} milk`);
}

function storeDrink(drinkToStore) {
  let stringifiedDrink = JSON.stringify(drinkToStore);
  localStorage.setItem('drink', stringifiedDrink);
}

function getDrink() {
  let potentialDrinkFromStorage = localStorage.getItem('drink');
  if (potentialDrinkFromStorage) {
    let parsedDrink = JSON.parse(potentialDrinkFromStorage);
    return parsedDrink;
  }
}

let myDrink = new Drink('tea', 'half and half', 'grande');
console.log(myDrink);
myDrink.report();

storeDrink(myDrink);

let myDrinkBackFromLocalStorage = getDrink();
console.log(myDrinkBackFromLocalStorage);

// reinstanciation - turn it back into an instance of the constructor
let backIntoDrink = new Drink(
  myDrinkBackFromLocalStorage.drinkType,
  myDrinkBackFromLocalStorage.milk,
  myDrinkBackFromLocalStorage.size
);

backIntoDrink.report();
