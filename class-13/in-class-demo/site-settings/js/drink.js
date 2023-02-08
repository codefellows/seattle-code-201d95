'use strict';

function Drink(drinkType, milk, size) {
  this.drinkType = drinkType;
  this.milk = milk;
  this.size = size;
  this.report = function() {
    console.log(`This is a ${this.drinkType} with ${this.milk} milk`);
  }
}

function storeDrink(drinkToStore) {
  let stringifiedDrink = JSON.stringify(drinkToStore);
  localStorage.setItem('drink', stringifiedDrink);
}

function getDrink() {
  let potentialDrinkFromStorage = localStorage.getItem('drink');
  if (potentialDrinkFromStorage) {
    let parsedDrink = JSON.parse(potentialDrinkFromStorage);
    return parsedDrink
  }
}
