let output;

output = document.all; // Deprecated
output = document.all[11]; // Deprecated
output = document.all.length; // Deprecated

output = document.documentElement; // Todo el HTML
output = document.head;
output = document.body;

output = document.head.children; // Colección HTML con todos los hijos directos de head
output = document.body.children;

output = document.doctype;
output = document.domain; // Deprecated: 127.0.0.1
output = document.URL; // domain + page
output = document.characterSet; // UTF-8
output = document.contentType; // text/html

output = document.forms;
output = document.forms[0];
output = document.forms[0].id; // item-form
output = document.forms[0].method; // get por defecto
output = document.forms[0].action; // la página actual por defecto

// document.forms[0].id = "new-id"; // item-form

output = document.links;
output = document.links[0];
// output = document.links[0].href;
// output = document.links[0].id
// output = document.links[0].className = "google-class" // Clase CSS
// output = document.links[0].classList; // Devuelve un DOMTokenList con todas las clases asociadas a ese elemento

output = document.images;
output = document.images[0];
output = document.images[0].src;

// No se pueden usar forEach sobre HTML Collection
// Si usamos un querySelector devuelve un NodeList que es diferente y sí se puede usar forEach en ese caso.
// Para usar forEach para HTML Collection tenemos que hacer:

const forms = Array.from(document.forms); // Convierte la HTML Collection en un Array
forms.forEach(form => console.log(form));

console.log(output);