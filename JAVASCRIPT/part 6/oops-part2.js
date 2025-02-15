//INHERITANCE

// class bankAccount {
//   #balance = 3468;
//   deposit(amount) {
//     this.#balance += amount;
//     return this.#balance;
//   }
//   getBalance() {
//     return `Rs ${this.#balance}`;
//   }
// }
// let account = new bankAccount();
// console.log(account.getBalance());

//ABSTRACTION

// class coffeeMachine {
//   start() {
//     return `Making the coffee...`;
//   }
//   brewCoffee() {
//     return `Brewing coffee`;
//   }
//   pressStart() {
//     let msgOne = this.start();
//     let msgTwo = this.brewCoffee();
//     return `${msgOne} + ${msgTwo}`;
//   }
// }
// let machine1 = new coffeeMachine();
// console.log(machine1.start());
// console.log(machine1.brewCoffee());
// console.log(machine1.pressStart());

//POLYMORPHISM

// class Bird {
//   fly() {
//     return `flying...`;
//   }
// }
// class Penguin extends Bird {
//   fly() {
//     return `Penguins cannot fly...`;
//   }
// }
// let birds = new Bird();
// let penguins = new Penguin();
// console.log(birds.fly());
// console.log(penguins.fly());

//STATIC METHOD
// class Calculator {
//   static add(a, b) {
//     return a + b;
//   }
// }
// // let addition = new Calculator();
// // console.log(addition.add(3, 4));
// console.log(Calculator.add(4, 5));

class Employee {
  #salary;
  constructor(name, salary) {
    if (salary < 0) {
      throw new Error("Salary cannot be in negative");
    }
    this.name = name;
    this.#salary = salary;
  }
  get salary() {
    return `You are not allowed to see the salary`;
  }
  set salary(value) {
    if (value < 0) {
      console.error("Invalid salary");
    } else {
      this._salary = value;
    }
  }
}

let emp1 = new Employee("Raj", 85000);
console.log(emp1.salary);
emp1.salary = 34000;
