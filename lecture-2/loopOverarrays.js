/** Loop over Arrays */

const Students = [
    'Tina',
    'Raj',
    'Bobby',
    'Seema',
    'Alex',
    'Sita'
];

// for(let i = 0; i<Students.length; i++){
//     console.log(`Roll No ${i+1}: ${Students[i]}`);
// }

//for .. in loop
for(let i in Students){
    console.log(`Roll No ${Number(i)+1}: ${Students[i]}`);
}

//for .. of loop
for(let student of Students){
    console.log(student);
}