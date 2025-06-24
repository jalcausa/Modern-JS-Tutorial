/*------------------------------- Contexto de ejecución ----------------------------*/
/*

- Es un entorno especial creado al ejecutar código JavaScript en el navegador o en Node.js

- Contiene el código actual en ejecución así como todo aquello que ayuda a la ejecución del mismo.

- Hay un contexto de ejecución global así como un contexto de ejecución de función cada vez que se invoca una función.

- JavaScript es single-threaded y síncrono (se ejecuta línea a línea, aunque hay maneras de darle funciones asíncronas)

1) Fase de creación de memoria

1. Se crea el objeto global (en el navegador es el window, en Node.js el global).
2. Se crea el objeto this y se le asocia el objeto global.
3. Se configura el heap para almacenar variables y referencias a funciones (parte izquierda de la imagen)
4. Se almacenan las funciones y variables en el contexto global de ejecución PERO no son accesibles aún  (en el vídeo dice que se les asocia undefined a las variables pero realmente creo que no es a´si, están en la TDZ (Temporal Dead Zone) en la que existen pero no se pueden acceder) y el código que ejecuta cada función a las funciones (en la imagen salen ya con valores asociados a las variables pero en este punto estarían todas como undefined)


2) Fase de ejecución

1. Ejecuta el código línea a línea.
2. Crea un nuevo contexto de ejecución por cada llamada a función.



*/

/*------------------------- Contexto de ejecución en acción ----------------------------*/

const x = 100;
const y = 50;

function getSum(n1, n2) {
	const sum = n1 + n2;
	return sum;
}

const sum1 = getSum(x, y);
const sum2 = getSum(10, 5);

/*

Desde las herramientas para desarrolladores de Chrome podemos darle a sources para ver el código y crear breakpoints pulsando en una línea para que el código se detenga ahí.

Podemos ir viendo como se crean los contextos de ejecución en la parte de scope y cómo al llamar a una función se crea una zona llamada local que representa el contexto de ejecución de esa función provocada por la llamada

*/