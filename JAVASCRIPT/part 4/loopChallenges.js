// let sum = 0;
// let i = 1;
// while (i <= 5) {
//   sum = sum + i;
//   i++;
// }
// console.log(sum);

// let countdown = [];
// let j = 5;
// while (j >= 1) {
//   countdown.push(j);
//   j--;
// }
// console.log(countdown);

// let teaCollection = [];
// let tea;
// do {
//     tea = prompt(`Enter your favourite tea (Press STOP to exit)`)
// if(tea !== "stop"){
// teaCollection.push(tea);
// }
// } while (tea !== "stop");

// let multipliedNumbers = [];
// let numbers = [4, 8, 12];

// for (let l = 0; l < numbers.length; l++) {
//   const takeNumbers = numbers[l] * 2;
//   multipliedNumbers.push(takeNumbers);
// }
// console.log(multipliedNumbers);

let cities = ["Paris", "America", "UK", "Thailand"];
let newCity = [];
for (let c = 0; c < cities.length; c++) {
  const element = cities[c];
  newCity.push(element);
}
console.log(newCity);
