// Parámetros por defecto
function registerUser(user = "Bot") {
	// Manera antigua:
	// if (!user) {
	// 	user = "Bot";
	// }
	return user + " is registered";
}


console.log(registerUser());

// Rest params
function sum(...numbers) { // Transforma los argumentos en un array
	let total = 0;

	for (const num of numbers) {
		total += num;
	}
	return total;
}

console.log(sum(1,2,3));

// Objects as params
function loginUser(user) {
	return `The user ${user.name} with id ${user.id} is logged in`;
}

const user = {
	id: 1,
	name: "Juan Carlos",
}

console.log(loginUser(user));

console.log(loginUser({
	id: 2,
	name: "Cristian",
}));

console.log(Math.random()*100);

// Arrays as params
// Get a random position from an array
function getRandom(arr) {
	const i = Math.floor((Math.random()*arr.length));
	return (arr[i]);
}

/*
Si usamos el operador rest (...) lo que pasemos no tiene por que ser un array para que funciones

function getRandom(...arr) {
	const i = Math.floor((Math.random()*arr.length));
	return (arr[i]);
}

console.log(getRandom(1, 2, 3, 4, 5));

*/

console.log(getRandom(["Java", "C", "Haskell", "Scala", "Python"]));