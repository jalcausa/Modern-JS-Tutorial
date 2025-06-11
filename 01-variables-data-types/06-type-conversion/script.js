let amount = 100;

// Convert string to number
// amount = parseInt(amount);
// amount = +amount;
// amount = Number(amount);

// Convert string to decimal
// amount = parseFloat(amount);

// Convert number to string
// Aunque amount es un tipo primitivo al usar toString JS crea un Wrapper temporal para usar el método
// amount = amount.toString();
// amount = String(amount);

// Covert number to boolean
// amount = Boolean(amount);

// Si intentamos hacer un parseInt de algo que no es un número nos devuelve NaN que significa Not a Number, que es una propiedad no editable (non writable) del objeto global Window.

// Se devuelve NaN por ejemplo al hacer operaciones que no devuelven números reales (dividir entre 0, raíz de un número negativo, etc.) y en estos otros casos:

console.log(Math.sqrt(-1));
console.log(1 + NaN);
console.log(undefined + undefined);
console.log("foo" / 3);

console.log(amount, typeof amount);