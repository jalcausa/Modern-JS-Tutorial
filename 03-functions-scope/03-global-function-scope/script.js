// alert("Hello");
// console.log(window.innerWidth);

const x = 100;

console.log(x, "in global");

function run() {
	console.log(window.innerHeight);
	console.log(x, "in function");
}

run();

if (true) {
	console.log(x, "in block");
}

function add() {
	const y = 50; // Accesible desde la función solo
	console.log(y);
}

add();