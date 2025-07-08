// querySelectorAll(): es el que más se usa

const listItems = document.querySelectorAll("li"); // Selecciona todos los li
console.log(listItems); // Nos da un NodeList que es como un array accesible por índice
// Se pueden usar funciones de orden superior sobre una Node List pero no sobre una HTML Collection
console.log(listItems[1].innerText);

// listItems.style.color = "red"; MAL: una NodeList no tiene atributo style

listItems.forEach((item, index) => {
	item.style.color = "red";

	if (index === 1)
		item.remove();
	if (index === 0)
	{
		item.innerHTML = ` Oranges
		<button class="remove-item btn-link text-red">
			<i class="fa-solid fa-xmark"></i>
		</button>`;
	}
});

const listItems2 = document.getElementsByClassName("item");
console.log(listItems2); // HTML Collection a diferencia de cuando usamos querySelector

const listItemsArray = Array.from(listItems2); // Hay que pasarlo a Array para usar esos métodos

listItemsArray.forEach(item => {
	console.log(item.innerText);
});

const listItems3 = document.getElementsByTagName("li"); // HTML Collection
console.log(listItems3);