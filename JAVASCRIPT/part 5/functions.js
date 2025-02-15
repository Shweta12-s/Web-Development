// function makeTea(typeOfTea) {
//   return `Making ${typeOfTea}`;
// }
// let order = makeTea("Lemon-tea");
// console.log(order);
// makeTea("LemonTea");

// function orderTea(teaType) {
//   function confirmOrder() {
//     console.log("Order confirmed for chai!!");
//   }
//   return confirmOrder();
// }
// let order = orderTea("tea");
// console.log(order);

// const calculateTotal = (price, quantity) => {
//   return price * quantity;
// };
// let totalCost = calculateTotal(499, 2);
// console.log(totalCost);

// function makeTea(typeOfTea) {
//   return ` makeTea:  ${typeOfTea}`;
// }
// function processTeaOrder(teaFunction) {
//   return teaFunction("black tea");
// }
// let order = processTeaOrder(makeTea);
// console.log(order)

function createTeaMaker(name) {
  let score = 100;
  return function (typeOfTea) {
    return `Making ${typeOfTea} ${name} ${score}`;
  };
}
let teaMaker = createTeaMaker("Shweta");
console.log(teaMaker("green tea"));
