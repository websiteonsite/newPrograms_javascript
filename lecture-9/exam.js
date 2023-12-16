// const Dog = class {
//     constructor(name) {
//         this.name = name;
//     }
//     speak() {
//         console.log(`${this.name} says woof!`);
//     }
// }

// const Cat = class {
//     constructor(name) {
//         this.name = name;
//     }
//     speak() {
//         console.log(`${this.name} says meow!`);
//     }
// }
// function createAnimal(type) {
//     if (type === "dog") {
//         return new Dog("Buddy");
//     } else if (type === "cat") {
//         return new cat("Whiskers");
//     } else {
//         return null;
//     }
// }

// const d = createAnimal("dog");
// d.speak();

// class Student {
//     name;
//     Sec;
//     #rollno;
//     constructor(name, Sec, rollno) {
//         this.name = name;
//         this.Sec = Sec;
//         this.rollno;
//     }
// }

// const ram = new Student("Ram", "b", 43353);
// console.log(ram);

// class Vehicle {
//     wheels = 4;
//     constructor(brand) {
//         this.brand;
//     }
//     startEngine() {
//         console.log("Engine started.");
//     }
// }
// class Car extends Vehicle {
//     constructor(brand, model) {
//         super(brand);
//         this.model = model;
//     }
//     getWheels() {
//         //Code to get wheels from the parent class
//     }
// }
// const myCar = new Car("Toyota", "Camry");
// console.log(myCar);

class Animal {
    constructor() {
        console.log("Animal constructor executed.");
    }
}

class Dog extends Animal {
    constructor() {
        super();
        console.log("Dog constructor executed.");
    }
}

const myDog = new Dog();