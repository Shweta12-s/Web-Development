// let Car = {
//   company: "Tata",
//   model: "Nexon",
//   year: "2020",
//   make: function start() {
//     return `This ${Car.company} ${Car.model} car  was started in ${Car.year};`;
//   },
// };
// console.log(Car.make());

// function person(name, age) {
//   this.name = name;
//   this.age = age;
// }
// let newPerson = new person("Shweta", 21);
// console.log(newPerson.name);

// function Animal(type) {
//   this.type = type;
// }
// Animal.prototype.speak = function () {
//   return `This animal ${Animal.type} makes a sound.`;
// };
// // console.log(Animal.speak());
// Array.prototype.try = function () {
//   return `trying some new methods ${this}`;
// };
// let newArray = [2, 4, 6];
// console.log(newArray.try());
// let myNewArray = [2, 4, 6, 8, 10];
// console.log(myNewArray.try());

class Vehicle {
  constructor(model, power) {
    this.model = model;
    this.power = power;
  }
  method() {
    return `This is a car of ${this.model} of power ${this.power}`;
  }
}

class Car extends Vehicle {
  function() {
    return `${this.model}: this is an example of inherited class!!`;
  }
}
let newCar = new Car("Tata", 2000);
console.log(newCar.function());
console.log(newCar.method());
console.log(newCar.power);

let vehicleOne = new Vehicle("Honda", 500);
console.log(vehicleOne.method());
