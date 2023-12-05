// let result = ( () =>{
//     let x = 5;
//     return () => {
//         x+=1;
//         return x;
//     }
// }) ();
// console.log(result);

console.log(greet("Alice"));
const greet = name => `Hello, ${name}!`;