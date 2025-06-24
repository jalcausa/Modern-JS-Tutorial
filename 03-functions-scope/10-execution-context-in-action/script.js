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
4. Se almacenan las funciones y variables en el contexto global de ejecución y se les asocia undefined (en la imagen salen ya con valores asociados pero en este punto estarían todos como undefined)


2) Fase de ejecución

1. Ejecuta el código línea a línea.
2. Crea un nuevo contexto de ejecución por cada llamada a función.



*/

/*------------------------- Contexto de ejecución en acción ----------------------------*/

