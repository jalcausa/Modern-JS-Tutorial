let x;

// Otras dos fromas de crear un objeto
// const todo = {};
const todo = new Object();

todo.id = 1;
todo.name = "Buy Milk";
todo.completed = false;

x = todo;

const person = {
	address: {
		coords: {
			lat: 42.9384,
			lng: -71.3232
		},
	},
};

x = person.address.coords.lat;

const obj1 = {a: 1, b: 2};
const obj2 = {c: 3, d: 4};

// const obj3 = {obj1, obj2};
const obj3 = {...obj1, ...obj2}; // Combina todas las propiedades
const obj4 = Object.assign({}, obj1, obj2); // Añade al objeto del primer argumento las propiedades del resto

const toDos = [
	{id: 1, name: "Buy milk"},
	{id: 2, name: "Pick up kids"},
	{id: 1, name: "Take out trash"},
];

x = toDos[0].name;

x = Object.keys(todo); // Array con las claves de un objeto

x = Object.keys(todo).length; // Para obtener el tamaño de un objeto, es decir el número de propiedades que tiene

x = Object.values(todo); // Array con los valores de un objeto

x = Object.entries(todo); // Array de arrays con los pares clave/valor

x = todo.hasOwnProperty("name"); // Devuelve booleano indicando si tiene alguna propiedad con ese nombre

console.log(x);