// Create a new string called "myNewString" that holds the value of "Developer", using the value from "myString"
const myString = 'developer';

let firstLetter = myString.charAt(0).toUpperCase();

let tail = myString.substring(1);

let res = firstLetter + tail;

console.log(res);