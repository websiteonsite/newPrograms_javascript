
// Classes in JS.. Class declaration
class VehicleCl {

    //private properties
    #regNumber;

    //constructor
    constructor(name, color, wheels, number) {
        this.name = name;
        this.color = color;
        this.wheels = wheels;
        this.#regNumber = number;
    }

    //private methods
    #getNumber(number) {
        return number;
    }

    //methods
    getDetails() {
        console.log(`
    The ${this.name} is ${this.color} in color.
    It has ${this.wheels} wheels.
    Registratio Number is : ${this.#regNumber}
    `);
    }
}

const veh1 = new VehicleCl(
    'Scooter',
    'Grey',
    2,
    8866
);

console.log(veh1);

veh1.name = 'Car';
//veh1.#regNumber = 2222;
veh1.getDetails();
veh1.#getnumber();

