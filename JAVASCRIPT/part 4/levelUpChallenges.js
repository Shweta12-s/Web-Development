// let teas = ["green tea", "black tea", "chai", "oolong tea"];
// let selectedTeas = [];
// for (let i = 0; i < teas.length; i++) {
//   if (teas[i] === "chai") {
//     break;
//   }
//   selectedTeas.push(teas[i]);
// }
// console.log(selectedTeas);

// let countries = ["London", "New-York", "Paris", "Berlin"];
// let visitedCities = [];

// for (let i = 0; i < countries.length; i++) {
//   if (countries[i] === "Paris") {
//     continue;
//   }
//   visitedCities.push(countries[i]);
// }
// console.log(visitedCities);

// let numbers = ["1", "2", "3", "4", "5"];
// let smallNumbers = [];
// for (const num of numbers) {
//   if (num === "4") {
//     break;
//   }
//   smallNumbers.push(num);
// }
// console.log(smallNumbers);

// let teas = ["chai", "green-tea", "herbal-tea", "black-tea"];
// let prefferedTea = [];
// for (const tea of teas) {
//   if (tea === "herbal-tea") {
//     continue;
//   }
//   prefferedTea.push(tea);
// }
// console.log(prefferedTea);

// let citiesPopulation = {
//   Dhanbad: 34000,
//   Ranchi: 45000,
//   Jamshedpur: 10000,
//   Giridih: 90322,
// };
// let cityNewPopulation = {};
// console.log(Object.keys(citiesPopulation));
// for (const city in citiesPopulation) {
//   // console.log(citiesPopulation[city]);
//   if (city === "Jamshedpur") {
//     break;
//   }
//   cityNewPopulation[city] = citiesPopulation[city];
// }
// console.log(cityNewPopulation);

// let indianTowns = {
//   Jaipur: 3402020,
//   Aligarh: 6702034,
//   Chhatisgarh: 8923021,
//   Durgapur: 2300101,
// };
// let largeCities = {};
// for (const city in indianTowns) {
//   if (indianTowns[city] < 3000000) {
//     continue;
//   }
//   largeCities[city] = indianTowns[city];
// }
// console.log(largeCities);

// let differentTeas = ["earl-tea", "green tea", "chai", "oolong tea"];
// let availableTeas = [];
// differentTeas.forEach(function (tea) {
//   if (tea === "chai") {
//     return;
//   }
//   availableTeas.push(tea);
// });
// console.log(availableTeas);

// let countries = ["Berlin", "Tokyo", "Sydney", "Paris"];
// let newCountries = [];
// countries.forEach(function (country) {
//   if (country === "Tokyo") {
//     return;
//   }
//   newCountries.push(country);
// });
// console.log(newCountries);

// let numbers = ["2", "5", "7", "9"];
// let newArray = [];
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] === "7") {
//     continue;
//   } else {
//     numbers[i] = numbers[i] * 10;
//   }
//   newArray.push(numbers[i]);
// }
// console.log(newArray);

let teas = ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"];
let shortTeas = [];
for (const tea of teas) {
  if (tea.length > 10) {
    continue;
  }
  shortTeas.push(tea);
}
console.log(shortTeas);
