// function greet() {
//   console.log("Good night!!");
// }

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }
// function Car(model, power) {
//   this.model = model;
//   this.power = power;
// }
// let myCar = new Car("Nano", "400");
// console.log(myCar);
// let myNewCar = new Car("Tata Nexon", "1500");
// console.log(myNewCar);

// function Tea(type) {
//   this.type = type;
//   this.describe = function () {
//     return `this is a cup of ${this.type};`;
//   };
// }
// let lemonTea = new Tea("lemon tea");
// console.log(lemonTea.describe());

// function Cat(color) {
//   this.color = color;
// }
// Cat.prototype.special = function () {
//   return `This ${this.color} color cat of has a beautiful smile`;
// };
// let newColor = new Cat("Greyish");
// console.log(newColor.special());
// let newColor1 = new Cat("Yellowish");
// console.log(newColor1.special());

// function Lipstick(name) {
//   if (!new.target) {
//     throw new Error("Your lipstick must be combined with a lip balm!!");
//   }
//   this.name = name;
// }

// let first = new Lipstick("maybelline+ lip balm");
// let second = Lipstick("elle 18");
