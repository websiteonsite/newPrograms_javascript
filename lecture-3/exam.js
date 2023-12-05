// function factorial(n){
//     if(n==0){
//         return 1;
//     }
//     return n*factorial(n-1);
// }

// console.log(factorial(5));

// function foo(){
//     console.log("Hello from fool!");
// }

// function bar(){
//     foo();
//     console.log("Hello from bar!");
// }

// function baz(){
//     bar();
//     console.log("Hello from baz!");
// }

// baz();

// function  foo() {
//     'use strict'; 
//     x=10;
// }
// undefined
// foo();

// function outer(){
//     let x=10;
//     if(true){
//         let y =20;
//         var z=30;
//         console.log(x+y+z);
//     }
//     console.log(x+y+z);
// }
// outer();

// function cart(){
//     let items = 0;
//     return{
//         addItem: function(){
//             items++;
//         },
//         getItem: function(){
//             return items;
//         }
//     };
// }

// const closure = cart();
// closure.addItem();
// closure.addItem();
// closure.addItem();
// console.log(closure.getItem());

var a=1;
function b(){
    a=10;
    return;
    function a(){}
}

b();
console.log(a);