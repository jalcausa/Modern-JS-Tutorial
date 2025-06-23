// function add(a, b) {
//   return a + b;
// }

// Arrow function syntax
const add = (a, b) => {
  return a + b;
};

// Forma más concisa cuando solo hay una expresión
const substract = (a, b) => a - b;

// Si solo hay un parámetro no hace falta el paréntesis
// const double = a => 2 * a;
const double = (a) => 2 * a; // Al hacer save Prettier le pone el paréntesis

// Returning an object: se pone entre paréntesis el objeto que vamos a devolver
const createObject = () => ({
  name: "Juan Carlos",
});

const numbers = [1, 2, 3, 4, 5];

// Primera forma de hacer un forEach
numbers.forEach(function (n) {
  console.log(n);
});

// Manera más corta
numbers.forEach(n => console.log(n));

console.log(add(1, 2));
console.log(substract(10, 5));
console.log(double(10));
console.log(createObject());
