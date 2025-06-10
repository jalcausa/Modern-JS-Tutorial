// String
const firstName = "Sara";

// Number
const age = 30;
const temp = 98.8;

// Boolean
const hasKids = true;

// Null
const aptNumber = null;

// undefined
let score;

// Symbol
const id = Symbol('id');

// Reference types

const numbers = [1, 2, 3, 4, 5]

const person = {
	name: "Brad",
}

function sayHello() {
	console.log("Hello");
}

const output = sayHello;

console.log(output, typeof output);
