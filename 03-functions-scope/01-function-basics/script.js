/*----------------- FUNCTION BASICS --------------------- */

function sayHello() {
	console.log("Hello World");
}

sayHello();

function add(num1, num2) {
	console.log(num1 + num2);
}

add(1, 2);

function substract(num1, num2) {
	return num1 - num2;
}

const res = substract(10, 2);

console.log(res, substract(20, 5));