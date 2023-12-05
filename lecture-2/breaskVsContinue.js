const inputs = [11,32,31,54,37,25,20,10,100,68,81,92,53,65];

const evenNumbers = [];

for(let i of inputs){
    if(i%2 !==0){
        continue;
    }
    evenNumbers.push(i);

    if(evenNumbers.length === 5){
        break;
    }

    console.log(evenNumbers);
}
console.log(evenNumbers);