let teaFlavors = ["green tea", "black tea", "lemon tea"];
const favTea = teaFlavors[2];

let cities = ["london", "paris", "america", "japan"];
const favCity = cities[3];
let citiesVisited = ["Toronto", "Sydney"];
console.log(citiesVisited.length);
citiesVisited[2] = "UK";
console.log(citiesVisited);
console.log(citiesVisited.length);
citiesVisited.push("Asia");
console.log(citiesVisited);

let teaOrder = ["chai", "iced tea", "capaccino"];
const poppedOrder = teaOrder.pop();
console.log(poppedOrder);

let topCities = ["Berlin", "Singapore", "New-york"];
let hardCopyCities = [...topCities];
topCities.pop();
console.log(topCities);
console.log(hardCopyCities);

let europeanCity = ["France", "Berlin"];
let asianCity = ["India", "Pakistan"];
let worldCity = europeanCity.concat(asianCity);
console.log(worldCity);

let cityBucketList = ["Jamshedpur", "Agra", "Mayapur"];
let isMayapurinList = cityBucketList.includes("mayapur");
console.log(isMayapurinList);
