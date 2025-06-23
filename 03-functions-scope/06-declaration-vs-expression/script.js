// Function declaration
function addDollarSign(value) {
	return '$' + value;
}

console.log(addDollarSign(100));

// Function expression
const addPlusSign = function (value) {
	return '+' + value;
};

console.log(addPlusSign(200));

/*

La principal diferencia entre las dos es que si las declaramos de la primera forma la función está disponible en partes del código antes de ser declarada, porque es "elevada" (hoisting)

Si las declaramos de la segunda forma entonces no es posible hacer esto, solo podemos usar las funciones una vez que han sido declaradas y no antes

*/