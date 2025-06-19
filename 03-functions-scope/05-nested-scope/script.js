function first() {
	const x = 100;

	function second() {
		const y = 200;
		console.log(x + y);
	}

	second();
}

first();

/*

Desde la función hija second puedo acceder a variables del padre
pero no al contrario, es decir desde first no puedo acceder a 
variables locales de second.

Con bloques pasa lo mismo:

*/

if (true) {
	const x = 100;

	if (x === 100) {
		const y = 200;
		console.log(x + y);
	}
	// console.log(y); ERROR: no se puede acceder a y desde fuera
}