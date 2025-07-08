/*--------------------------------- Selector single element ----------------------------------------*/


// document.getElementById()

console.log(document.getElementById("app-title"));
console.log(document.getElementById("app-title").id);
console.log(document.getElementById("app-title").className);
console.log(document.getElementById("app-title").getAttribute("id"));

// Set attributes
document.getElementById("app-title").title = "Shopping List";
document.getElementById("app-title").setAttribute("class", "title");

const title = document.getElementById("app-title");
console.log(title.textContent);
title.textContent = "Hello World";
title.innerText = "Hello Again";
title.innerHTML = "<strong>Shopping List </strong>";

// Change styles
title.style.color = "red";
title.style.backgroundColor = "black";
title.style.padding = "10px";
title.style.borderRadius = "10px";

// document.querySelector(): Para poder elegir elementos sin que tengan que tener id o clase
console.log(document.querySelector("h1")); // Selecciona solo el primero si hay varios
console.log(document.querySelector("#app-title")); // Selecciona solo el primero si hay varios
console.log(document.querySelector(".container")); // Selecciona solo el primero si hay varios
console.log(document.querySelector('input[type="text"]')); // Te da los inputs que reciben texto
console.log(document.querySelector('li:nth-child(2)').innerText); // Te da el segundo elemento

const secondItem = document.querySelector("li:nth-child(2)");
secondItem.innerText = "Apple Juice";
secondItem.style.color = "red";

// Use these methods on other elements
const list = document.querySelector("ul"); // Se puede usar querySelector sobre algo que no sea el document tb
console.log(list);
const firstItem = list.querySelector("li");
firstItem.style.color = "blue";