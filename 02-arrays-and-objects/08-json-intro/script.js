/* ------------------------ JSON ------------------------- */
// JSON tiene una sintaxis similar a los objetos literales de JavaScript

// Una diferencia es que las claves van entre comillas en JSON y en los objetos literales no

const post = {
	id: 1,
	title: "Post One",
	body: "This is the body"
};

// Convert object to JSON string
const str = JSON.stringify(post);

/*
Se usa sobre todo para almacenar cosas en localstorage ya que solo puede contener strings, si hacemos fetch a alguna API normalmente ya se hace por defecto esto
*/

// Parse JSON

const obj = JSON.parse(str);

const posts = [
  {
    id: 1,
    title: "Post One",
    body: "This is the body",
  },
  {
    id: 2,
    title: "Post two",
    body: "This is the second body",
  },
];

const str2 = JSON.stringify(posts);

// Cuando tenemos algo en modo string no podemos acceder a las proiedades como haríamos con objetos, tenemos que transformarlo en objeto primero

console.log(str2);