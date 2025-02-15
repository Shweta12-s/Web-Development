const Username = {
  firstName: "Shweta",
  isLoggedIn: true,
  "last name": "Kumari",
};
Username.firstName = "Pranav";
Username.lastName = "Raj";
console.log(Username.firstName);
console.log(Username.lastName);
console.log(typeof Username);
console.log(Username["last name"]);

let tuesday = new Date();
console.log(tuesday.getDate());

let studentData = ["Arushi", 45, true];
console.log(studentData[1]);

console.log("1" + 1);

let num = true;
console.log(Number(num));
