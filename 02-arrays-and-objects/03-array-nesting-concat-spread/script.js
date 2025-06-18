let x;

const fruits = ['apple', 'pear', 'orange'];
const berries = ['strawberry', 'blueberry', 'raspberry'];

/* -------------------- NESTING ---------------------------*/
// Añadir un array dentro de un array
// fruits.push(berries);

x = fruits[3];

const allFruits = [fruits, berries];

x = allFruits[0][3];

/* -------------------- CONCAT ---------------------------*/

x = fruits.concat(berries);

/* -------------------- SPREAD ---------------------------*/

// Saca todos los elementos de un array y los añade de manera individual al nuevo array

x = [...fruits, ...berries];

/* -------------------- FLAT ---------------------------*/

const arr = [1, 2, [3, 4], 5, [6, 7], 8];

x = arr.flat(); // Extrae todos los elementos de cualquier array interno que tenga el array arr

/* ----------- STATIC METHODS ON ARRAY OBJECT -------------*/

x = Array.isArray(fruits);

x = Array.from('12345'); // Crea un array a partir de otra variable

const a = 1;
const b = 2;
const c=  3;

x = Array.of(a, b, c); // Array a partir de varias variables

console.log(x);