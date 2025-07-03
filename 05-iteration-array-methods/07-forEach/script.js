/*-------------------------- For...each Loop--------------------------- */

/*

Toma como argumento una función (callback function) e itera sobre el array aplicando la función a cada elemento, no devuelve nada

*/

const socials = ["Twitter", "LinkedIn", "Facebook", "Instagram"];

// console.log(socials.__proto__); Para ver todas las funciones de orden superior que hay con arrays

// socials.forEach(function(item) {
// console.log(item);
// });

socials.forEach(item => console.log(item));

/*

A la función forEach se le pueden pasar más argumentos como el índice del array por el que va así como el array completo sobre el que se ha aplicado la función 

*/

socials.forEach((item, index, arr) => console.log(`${index} - ${item}`, arr));

// También se puede pasar como argumento a forEach una función nombrada

function logSocials(social) {
	console.log(social);
};

socials.forEach(logSocials);

const socialObjs = [
	{name: "Twitter", url: "https://www.twitter.com"},
	{name: "Facebook", url: "https://www.facebook.com"},
	{name: "LinkedIn", url: "https://www.linkedin.com"},
	{name: "Instagram", url: "https://www.instagram.com"}
];

socialObjs.forEach(item => console.log(item));