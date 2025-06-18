const firstName = "John";
const lastName = "Doe";
const age = 30;

const person = {
	firstName: firstName,
	lastName : lastName,
	age: age,
};

// Cuando el valor de una propiedad de un objeto es una variable y coinciden en el nombre no hace falta ponerlo dos veces

const person2 = {
  firstName,
  lastName,
  age,
};

console.log(person2);

/*--------------------- Destructuring -------------------- */

const todo = {
	id: 1,
	title: "Take out trash",
	user: {
		name: "John",
	},
};

// const id = todo.id; // Equivalente a esto:
// const {id} = todo; // Estraer la variable id del objeto

const {id, title, user:{name}} = todo;

// Al desestructurar un objet podemos renombrar las variables

const{id: todoId} = todo;

console.log(id, title, name);

// Desestructurar arrays

const numbers =[23, 67, 33, 49]

const [first, second, ...rest] = numbers; // rest operator ... son tres puntos como el spread operator pero no tiene nada que ver, rest es el nombre de la variable se puede poner otro nombre

console.log(first, second, rest);