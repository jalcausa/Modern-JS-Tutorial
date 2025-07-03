/*-------------------------- For...of ----------------------------- */
// Se usa para iterar sobre objetos que son iterables como arrays pero no sobre objetos literales.

// Se usa sobre todo para iterar sobre arrays, strings y maps (iterables)

const items = ["book", "table", "chair", "kite"];
const users = [
	{name: "Brad"},
	{name: "Kate"},
	{name: "Steve"}
];


for (const item of items) {
	console.log(item);
}

for (const user of users) {
	console.log(user);
}

const str = "Hello world";

for (const l of str) {
	console.log(l);
}

const map = new Map();
map.set("name", "John");
map.set("age", 30);

for (const [key, value] of map) {
	console.log(key, value);
}