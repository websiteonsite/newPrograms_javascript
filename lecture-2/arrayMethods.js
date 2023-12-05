/** Arrays in JS are Dynamic */

const cities = [
    'Mumbai',
    'Delhi',
    'Calcutta',
    'Jaipur',
    'Chennai',
];

console.log(cities.length);

cities[2] = 'Kolkata';
console.log(cities);

/** Adding an element */
//push()

const teams = ['CSK', 'RCB', 'MI', 'LSG'];
const pushArray = teams.push('GT');
console.log(pushArray);

//unshift
teams.unshift('KKR');
console.log(teams);

/** Removing an element */
//pop
teams.pop();
//teams.pop();
console.log(teams);

//shift
teams.shift();
console.log(teams);


/** Check if the element is present or not */
//indexOf()
const RCBIndex = teams.indexOf('RCB');
console.log(RCBIndex);

const gtIndex = teams.indexOf('GT');
console.log(gtIndex);

//includes()
const rcb = teams.includes('RCB');
console.log(rcb);

//slice() and splice()
console.log(teams);
console.log(teams.slice(-1));
console.log(teams);

//splice
teams.splice(2,2,"GTK","LG");
console.log(teams);

//concat()
const teams2 = ["India", "Aus", "New Zealand"];
const merged = teams.concat(teams2);
console.log(merged);