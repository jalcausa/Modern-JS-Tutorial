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

Internamente realmente las dos hacen lo mismo, crear una función pero en el segundo caso es una función anónima y lo que obtenemos es una referencia a esa función a través del const mientras que en el primer caso tenemos acceso directamente a la función

Las funciones anónimas NO se elevan entonces hasta que no llegamos a donde está const no existe la función ya que esta se crea en tiempo de ejecución y se le asigna como referencia la variable

*/