const x = 100;
var bar = 2; // Accesible desde el objeto window

if (true) {
	const y = 200; // Ámbito de bloque no accesible desde fuera
	console.log(x + y);
}

// console.log(x + y;);

for (let i = 0; i <= 10; ++i) {
	console.log(i);
}

// console.log(i); // i no es accesible desde fuera

if (true) {
	const a = 500;
	let b = 600;
	var c = 700; // Accesible desde el objeto window
}

// console.log(a); // NO accesible desde fuera del bloque
// console.log(b); // NO accesible desde fuera del bloque
console.log(c); // Ámbito global en este caso pero puede ser de función

function run() {
	var d = 100; // Ámbito de función en este caso
}

// console.log(d); NO accesible