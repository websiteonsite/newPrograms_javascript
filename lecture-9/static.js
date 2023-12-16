//Static

class Vehicle {
  static vName = 'Arjun Rampal';
  //constructor
  constructor(name, color, wheels) {
    this.name = name;
    this.color = color;
    this.wheels = wheels;
  }
  //methods
  getDetails() {
    console.log(`
        The ${this.name} is ${this.color} in color.
        It has ${this.wheels} wheels.
        `);
  }
  //static method
  static showMsg() {
    console.log(
      'This is the static method of the class'
    );
  }
}

const v1 = new Vehicle('Bus', 'red', 4);
console.log(v1);
Vehicle.showMsg();
console.log(Vehicle.vName);
