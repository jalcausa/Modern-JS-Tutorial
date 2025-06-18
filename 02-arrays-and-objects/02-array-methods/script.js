let x;
const arr = [34, 55, 95, 20, 15];

// Añadir un elemento al final
arr.push(100);

// Eliminar el último elemento
arr.pop();

// Añadir un elemento en la posición 0 y mover el resto
arr.unshift(99);

// Eliminar el elemento de la posición 0
arr.shift();

// Reverse
arr.reverse();

arr.reverse();

// Devuelve un booleano indicando si el array contiene ese valor
x = arr.includes(20);

// Devuelve el índice de la primera ocurrencia de un valor
x = arr.indexOf(15);

x = arr.indexOf(1); // -1 si no está

// Devuelve un trozo del aray si solo le paso un arg a partir de ese índice hasta el final. 
// Si le paso dos arg  el primero es el índice donde empiezo y el segundo al indice que llega sin incluirlo
x = arr.slice(1, 4);

// Slice no modifica el array original pero splice sí;
// Si le paso dos arg el primero es el índice donde empiezo y el segundo cuántos elementos quiero contando el primero: DIFERENCIA CON SLICE

// x = arr.splice(1, 4);
// x = arr.splice(3, 1); // Para quitar un único elemento del array

x = arr.splice(1, 4).reverse().length;

console.log(x);