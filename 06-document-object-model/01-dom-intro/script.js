/*------------------------------- DOM Intro --------------------------------------- */
/*

¿Qué es el DOM?
-Interfaz de programación para elementos web / HTML
-Estructura con la que podemos interactuar via JavaScript
-Incluye etiquetas, atributos, nodos de texto, etc
-Se representa como una estructura en árbol

Tenemos el objeto Window que es la raíz del árbol, luego el document y luego el html

*/

console.dir(window.document);

console.log(document.body.innerHTML);

console.log(document.links[0]); // Devuelve una colección HTML que es como un array accesible por índice

// document.body.innerHTML = "<h1>Hello world</h1>";

// document.write("Hello from JS");

console.log(document.getElementById("main"));

// Guardamos en main una referencia al objeto main y podemos modificarlo directamente desde esa referencia que guardamos en la variable 
const main = document.getElementById("main");
// main.innerHTML = "<h1>Hello from main<h1/>";

// Podemos seleccionar elementos también usando selectores como si fuese CSS y modificar su contenido directamente también con innerText desde JS directamente
document.querySelector("#main h1").innerText = "Hello";