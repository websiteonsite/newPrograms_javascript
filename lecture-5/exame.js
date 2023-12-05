// let a = 10;
// let b =20;
// [a,b] = [b,a];
// console.log(a,b);

// let nestedArray = ["orange", ["apple","banana",
// ["grape","mango"]], "peach"];
// let [first, [,, [third]]] = nestedArray;
// console.log(third);

// let numbers = [5,10,15,20];
// let maxNumber = Math.max.apply(null, numbers);

let inventory = ["sword", "Health Potion","Mana Potion","Stamina Potion"];
let [weapon, ...potions] = inventory;
console.log(potions);