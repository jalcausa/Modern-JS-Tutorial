/*------------ Truthy and Falsy Values --------------------*/
/*

FALSY VALUES

1) false
2) 0
3) "" or '' (Empty string)
4) null
5) undefined
5) NaN

TRUTHY VALUES (todo lo que no es falsy es truthy): ejemplos que pueden resultar confusos:

1) "0" (0 en un String)
2) " " (espacio en un String)
3) "false" (false en un String)
4) [] (Array vacío)
5) {} (Objeto vacío)
6) function () {} (Función vacía)

*/

const x = function () {};

console.log(Boolean(x));

if (x) {
  console.log("This is truthy");
} else {
  console.log("This is falsy");
}

// Advertencias sobre truthy y falsy
/*

1) Comprobar si un campo numérico es undefined o null directamente como si fuese falsy puede dar problemas si su valor es 0, para arreglarlo podemos hacer children != undefined o !isNaN(children) para verificar si no tiene un valor numérico la variable en vez de comprobar si es falsy

*/
const children = 0;

if (!isNaN(children)) {
	console.log(`You have ${children} children`);
} else {
	console.log("Please enter number of children");
}

/*

2) Verificar arrays vacíos usando length no falsy

*/

const posts = ["Post One"];

if (posts.length > 0) {
	console.log("List Posts");
} else {
	console.log("No Posts To Lists");
}

/*

2) Verificar objetos vacíos usando Object.keys(objeto).length

*/

const user = {
	name: "Juan Carlos"
};

if (Object.keys(user).length > 0) {
	console.log("List User");
} else {
	console.log("No user");
}


/*

3) Igualdad con ==

*/

console.log(false == 0); // true
console.log(" " == 0); // true
console.log(null == undefined); // true

// Usar siempre === para evitar estos problemas