//Stack
const name = "John";
const age = 30;

// Heap
const person = {
	name: "Brad",
	age: 40,
};

let newName = name;
newName = "Johnathan";

console.log(name, newName);

let newPerson = person;
newPerson.name = "Bradley";

console.log(person, newPerson);