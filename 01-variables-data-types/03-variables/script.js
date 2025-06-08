// Ways to declare a variable
// var, let, const

// Naming Conventions
// - Only letters, numbers, underscores and dollar signs
// - Can't start with a number

// Multi-Word Formatting
// firstName     camelCase
// first_name    underscore
// FirstName     PascalCase
// firstname     owercase

const arr = [1, 2, 3, 4, 5];
arr.push(5);

console.log(arr);

//Se pueden declarar y asignar variables en la misma línea

let a, b, c;

console.log(a, b, c); // Sale undefined porque no están inicializadas

let x =1, y=2, z=3;
console.log(x, y, z);