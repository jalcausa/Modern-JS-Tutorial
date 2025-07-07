/*---------------------------------- Reduce --------------------------------------- */
/*

Sirve para reducir un array a un único valor, es equivalente a foldLeft de Scala o Haskell
Toma tres argumentos:
-Previous value / Accumulator : resultado de la llamada anterior a la función
-Current value: elemento actual por el que vamos
- Initial value (elemento inicial, opcional, si no se pone se empieza con el primero)

const sumWithInitial = array.reduce(
	(previousValue, currentValue) => previousValue + currentValue,
	initialValue
);

*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const sum = numbers.reduce(function(acc, currentValue) {
// 	return acc + currentValue;
// }, 0);

const sum = numbers.reduce((acc, cur) => acc + cur, 0);

console.log(sum);

// Using a for loop
// Usando for...in lo que devuelve es un string
// const sum2 = () => {
// 	let res = 0;
// 	for (n in numbers)
// 		res += n;
// 	return res;
// }

// Usando for...of lo que devuelve es un número
const sum2 = () => {
	let res = 0;
	for (n of numbers)
		res += n;
	return res;
}

console.log(sum2());

/* IMPORANTE

for...in itera sobre ÍNDICES 
for...of itera sobre VALORES (numbers)

*/

const cart = [
	{id: 1, name: "Product 1", price: 130},
	{id: 2, name: "Product 2", price: 150},
	{id: 3, name: "Product 3", price: 175},
];

const total = cart.reduce((acc, cur) => acc + cur.price, 0);
console.log(total);