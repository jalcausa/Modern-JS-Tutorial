/* ----------------- OBJECT LITERAL --------------------------*/

// Estructura de datos común que almacena pares clave/valor

let x;

const person = {
	name: "John Doe",
	age: 30,
	isAdmin: true,
	address: {
		street: "123 Main St",
		city: "Boston",
		state: "MA"
	},
	hobbies: ["music", "sports"]
};

// Dos formas de acceder a propiedades del objeto:
x = person.name;
x = person["age"];

x = person.address.state;
x = person["address"]["street"]

x = person.hobbies[0];

person.name = "Jane Doe";
person["isAdmin"] = false;

// Borrar una propiedad específica de un objeto
delete person.age;

// Añadir una nueva propiedad
person.hasChildren = false;

// Se pueden añadir funciones a objetos también

person.greet = function () {
	console.log(`Hello, my name is ${this.name}`);
}

person.greet();

// Se pueden crear propiedades que contengan espacios en su nombre pero no es recomendable:

const person2 = {
	"first name": "Brad",
	"last name": "Traversy"
};

x = person2["first name"];

console.log(x);

console.log(person);