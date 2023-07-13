// Create a new string called "myNewString" 
// that holds the value of "Developer", 
// using the value from "myString"
const myString = 'developer';

// 1
let myNewString = myString[0].toUpperCase() + myString.slice(1);
console.log(myNewString);

// 2
myNewString = myString.charAt(0).toUpperCase() + myString.slice(1);
console.log(myNewString);

// 3
myNewString = myString.substring(0,1).toUpperCase() + myString.slice(1);
console.log(myNewString);

// 4
myNewString = myString.slice(0,1).toUpperCase() + myString.slice(1);
console.log(myNewString);