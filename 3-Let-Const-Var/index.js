/*
let rat = "radioactive subway rats";

rat = "GIANT WOLF RAT";

const ratConst = "RAT"

console.log("Yesterday on the subway in NYC I was bitten by a " + ratConst);

*/

// Accesible desde cualquier sitio con window.globalVar
var globalVar = "Hola mundo"

function ejemploScope() {
  
	// Solo accesible dentro de la función
	var prueba = "Hola desde dentro de una función"
	
	if (true) {
	var x = "var"; // Accesible en toda la función
	let y = "let"; // Solo accesible en este bloque if
	const z = "const"; // Solo accesible en este bloque if
	}

	console.log(x); // "var"
	console.log(y); // Error: y is not defined
	console.log(z); // Error: z is not defined
}

