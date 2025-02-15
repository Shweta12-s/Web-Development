// let computer = { cpu: 10 };
// let lenovo = { screen: "HD", __proto__: computer };
// let tomHardware = {};
// console.log(`lenovo`, lenovo.__proto__);

let bulletPower = { power: "500cc" };
let superBike = {
  feature: "fast",
};
Object.setPrototypeOf(bulletPower, superBike);
console.log(`bulletPower`, Object.getPrototypeOf(bulletPower));
