/* ---------------- Logical Assignment ------------------*/

// ||= asigna el valor de la derecha solo si el de la izquierda es falsy

let a = false;

// if (!a) {
// 	a = 10;
// }

// a = a || 10;

a ||= 10; // Como a es falsy le asigna a 10


// &&= asigna el valor de la derecha sólo si el de la izquierda es truthy (no se usa tanto)

a &&= 20; // Como es truthy le asigna 20

console.log(a);

// ??= asigna el valor de la derecha sólo si el de la izquierda es null o undefined (nullish coalescing operator)
// DIFERENCIA con ||= no comprueba que sea falsy solo que sea null o undefined

let b;

b = undefined;

b ??= 10;

console.log(b);
