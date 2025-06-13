let x;

const name = "John";
const age = 30;

x = "Hello, my name is " + name + " and I am " + age + " years old";

// Template literals
x = `Hello, my name is ${name} and I am ${age} years old`;

// String properties and methods
const s = new String("Hello world");

x = typeof s;

x = s.length; // Property

// Access value bu key
x = s[1];

// prot
x = s.__proto__;

// Si hacemos console.log de un objeto primeor nos da el objeto y luego el prototipo
// console.log(s);

x = s.toUpperCase();
x = s.toLowerCase();

x = s.charAt(0);

x = s.indexOf("H");

x = s.substring(0, 5); // Hello

x = s.substring(7); // orld (from index 7 to the end)

x = s.slice(-11, -6); // Hello (starts counting from the end)

x = "     Hello world";
x = x.trim();

x = s.replace("world", "John"); // Replaces the first word with the second

x = s.includes("Hell"); // true return a boolean indicating if the string contains that word

x = s.valueOf();

x = s.split(" ") // ["Hello", "world"];
x = s.split("") // ['H', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd'];

console.log(x);
