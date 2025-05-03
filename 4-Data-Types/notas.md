# Tipos de Datos en JavaScript

JavaScript es un lenguaje dinámico y flexible, lo que significa que las variables pueden contener diferentes tipos de datos a lo largo de su vida. Comprender los tipos de datos y cómo funcionan en JavaScript es esencial para escribir código eficiente y seguro.

## Tipos de Datos Primitivos

Los **tipos primitivos** son los más básicos en JavaScript. Son inmutables, lo que significa que no pueden ser modificados después de su creación. Lo que sí se puede es reasignarlos, es decir si hago 
```javascript
let nombre = "Juan Carlos";
nombre = "Gonzalo";
```
Lo que ocurre es que al asignarle a nombre "Gonzalo" ahora nombre es "Gonzalo", "Juan Carlos" no se modifica, se cambia lo que tiene asignado la variable pero no el valor de la variable en sí.

Estos son:

### 1. **`undefined`**
- Representa una variable que ha sido declarada pero no inicializada.
- Ejemplo:
  ```javascript
  let x;
  console.log(x); // undefined
  ```

### 2. **`null`**
- Representa la ausencia intencional de cualquier valor.
- Es un tipo especial que denota un valor "vacío" o "nulo".
- Ejemplo:
  ```javascript
  let y = null;
  console.log(y); // null
  ```

### 3. **`boolean`**
- Representa valores lógicos: `true` o `false`.
- Ejemplo:
  ```javascript
  let isActive = true;
  console.log(isActive); // true
  ```

### 4. **`number`**
- Representa valores numéricos, incluidos enteros y números de punto flotante.
- Puede incluir valores especiales como `Infinity`, `-Infinity` y `NaN` (Not-a-Number).
- Ejemplo:
  ```javascript
  let num = 42;
  let pi = 3.14;
  console.log(num, pi); // 42, 3.14
  ```

### 5. **`bigint`**
- Introducido en ECMAScript 2020, `BigInt` es usado para representar números enteros de gran tamaño, más allá de los límites del tipo `number`.
- Se crea añadiendo una `n` al final de un literal entero.
- Ejemplo:
  ```javascript
  let big = 123456789012345678901234567890n;
  console.log(big); // 123456789012345678901234567890n
  ```

### 6. **`string`**
- Representa una secuencia de caracteres.
- Se puede definir usando comillas simples (`'`), dobles (`"`) o backticks (`` ` ``) para plantillas de cadena.
- Ejemplo:
  ```javascript
  let message = "Hola, mundo";
  let template = `El resultado es ${2 + 2}`;
  console.log(message, template); // Hola, mundo, El resultado es 4
  ```

### 7. **`symbol`**
- Introducido en ECMAScript 2015, `Symbol` es un tipo único e inmutable que se utiliza como identificador único.
- Ejemplo:
  ```javascript
  let sym = Symbol("descripcion");
  console.log(sym); // Symbol(descripcion)
  ```

---

## Tipos de Datos Complejos (Objetos)

Los **objetos** son un tipo de dato no primitivo que permite almacenar colecciones de datos y funcionalidades.

### 1. **Objetos Literales**
- Almacenan pares clave-valor.
- Ejemplo:
  ```javascript
  let persona = {
    nombre: "Juan",
    edad: 30
  };
  console.log(persona.nombre); // Juan
  ```

### 2. **Arrays**
- Almacenan listas ordenadas de elementos.
- Son un tipo especial de objeto.
- Ejemplo:
  ```javascript
  let numeros = [1, 2, 3, 4];
  console.log(numeros[2]); // 3
  ```

### 3. **Funciones**
- Las funciones en JavaScript son objetos de primera clase, lo que significa que pueden ser almacenadas en variables, pasadas como argumentos y devueltas como valores.
- Ejemplo:
  ```javascript
  function saludar() {
    return "Hola";
  }
  console.log(saludar()); // Hola
  ```

### 4. **Map y Set**
- **`Map`**: Almacena pares clave-valor con claves únicas.
  ```javascript
  let mapa = new Map();
  mapa.set("clave", "valor");
  console.log(mapa.get("clave")); // valor
  ```
- **`Set`**: Almacena valores únicos.
  ```javascript
  let conjunto = new Set([1, 2, 2, 3]);
  console.log(conjunto); // Set(3) {1, 2, 3}
  ```

---

## Coerción de Tipos

La **coerción de tipos** en JavaScript es el proceso mediante el cual el lenguaje convierte automáticamente (**implícita**) o manualmente (**explícita**) un valor de un tipo de dato a otro. Esto sucede porque JavaScript es un lenguaje de **tipado débil** y **dinámico**, lo que significa que las variables no tienen un tipo fijo y los valores pueden transformarse para satisfacer las necesidades de una operación.

### Ejemplo de Coerción Implícita:
```javascript
console.log("5" + 5); // "55" (concatena como string)
```

### Ejemplo de Coerción Explícita:
```javascript
console.log(Number("5") + 5); // 10 (convierte "5" a número)
```

## Ejemplos Comunes de Coerción Implícita

### 1. **Concatenación de Cadenas**
Cuando se usa el operador `+` y uno de los operandos es una cadena, los demás valores se convierten automáticamente a cadenas:
```javascript
let result = "El número es: " + 42;
console.log(result); // "El número es: 42"
```

### 2. **Operaciones Matemáticas**
Cuando se usan operadores como `-`, `*`, `/`, los valores se convierten a números si es posible:
```javascript
console.log("5" - 2); // 3 (cadena convertida a número)
console.log("10" / "2"); // 5 (ambas cadenas convertidas a números)
```

### 3. **Comparación con Doble Igual (`==`)**
El operador de igualdad `==` realiza coerción de tipos para comparar valores:
```javascript
console.log(5 == "5"); // true (cadena convertida a número)
console.log(false == 0); // true (booleano convertido a número)
console.log(null == undefined); // true (regla especial)
```

### 4. **Comparación Estricta con Triple Igual (`===`)**
El operador `===` no realiza coerción de tipos, por lo que también verifica que los tipos sean iguales:
```javascript
console.log(5 === "5"); // false (distintos tipos)
console.log(false === 0); // false (distintos tipos)
```

---

## Ejemplos de Coerción Explícita

### 1. **Conversión a Cadena**
- Usando `String()` o concatenando con una cadena vacía:
  ```javascript
  let num = 100;
  console.log(String(num)); // "100"
  console.log(num + "");    // "100"
  ```

### 2. **Conversión a Número**
- Usando `Number()` o el operador unario `+`:
  ```javascript
  let str = "123";
  console.log(Number(str)); // 123
  console.log(+str);        // 123
  ```

### 3. **Conversión a Booleano**
- Usando `Boolean()`:
  ```javascript
  let val = 0;
  console.log(Boolean(val)); // false
  console.log(!!val);        // false (doble negación)
  ```

---

## Valores "Falsos" y "Verdaderos" (Falsy y Truthy)

Al realizar coerción a booleano, algunos valores se evalúan como `false` y otros como `true`.

### Valores "Falsy" (evaluados como `false`):
- `false`
- `0` (y `-0`)
- `""` (cadena vacía)
- `null`
- `undefined`
- `NaN`

#### Ejemplo:
```javascript
if (0) {
  console.log("Esto no se ejecutará porque 0 es falsy");
}
```

### Valores "Truthy" (evaluados como `true`):
- Todos los demás valores, incluidos:
  - Números distintos de `0`
  - Cadenas no vacías (`"hello"`)
  - Objetos y arrays (incluso vacíos)

#### Ejemplo:
```javascript
if ("hola") {
  console.log("Esto se ejecutará porque 'hola' es truthy");
}
```

---

## Buenas Prácticas

1. **Usa Comparaciones Estrictas (`===`) Siempre que Sea Posible**
   - Reduce el riesgo de errores debido a la coerción implícita.
   - Ejemplo:
     ```javascript
     console.log(5 === "5"); // false
     console.log(5 == "5");  // true (puede ser confuso)
     ```

2. **Convierte Explícitamente los Tipos Cuando Sea Necesario**
   - Evita depender de la coerción implícita para mantener un código más claro.
   - Ejemplo:
     ```javascript
     let str = "123";
     let num = Number(str); // Mejor que confiar en coerción implícita
     ```

3. **Ten Cuidado con los Valores "Falsy"**
   - Asegúrate de manejar correctamente valores como `0`, `""` o `null` en condiciones:
     ```javascript
     let valor = 0;
     if (valor) {
       console.log("No se ejecutará porque 0 es falsy");
     }
     ```

---

## Comparaciones y Tipos

### Comparación de Igualdad
- **Doble Igual (`==`)**: Compara valores después de la coerción de tipos.
  ```javascript
  console.log(5 == "5"); // true
  ```
- **Triple Igual (`===`)**: Compara valores y tipos estrictamente.
  ```javascript
  console.log(5 === "5"); // false
  ```

---

## Mutabilidad e Inmutabilidad

- Los tipos primitivos son **inmutables**.
- Los objetos y arrays son **mutables**.

### Ejemplo de Mutabilidad:
```javascript
let arr = [1, 2, 3];
arr.push(4); // Modifica el array original
console.log(arr); // [1, 2, 3, 4]
```

---

## Operaciones Avanzadas con Tipos de Datos

### 1. **Detección de Tipos**
- Usar `typeof`:
  ```javascript
  console.log(typeof 42); // "number"
  console.log(typeof null); // "object" (comportamiento histórico)
  ```
- Usar `instanceof` para objetos complejos:
  ```javascript
  console.log([] instanceof Array); // true
  ```

### 2. **Conversión de Tipos**
- A Número:
  ```javascript
  let num = Number("123");
  console.log(num); // 123
  ```
- A Cadena:
  ```javascript
  let str = String(123);
  console.log(str); // "123"
  ```

---

# Prototipos en JavaScript y su Relación con Objetos

Los **prototipos** son un mecanismo fundamental en JavaScript para implementar la herencia y compartir propiedades o métodos entre objetos. A diferencia de otros lenguajes basados en clases (como Java), JavaScript utiliza una herencia basada en prototipos.

---

## ¿Qué es un Prototipo?

Un prototipo es un objeto del cual otro objeto puede heredar propiedades y métodos. En JavaScript, **cada objeto tiene un prototipo** que actúa como una "plantilla" o "modelo" para compartir comportamientos.

- Cuando accedes a una propiedad o método de un objeto, el motor de JavaScript busca primero en el objeto mismo. Si no lo encuentra, lo busca en el prototipo del objeto.

---

## El Prototipo de un Objeto

### Cómo acceder al prototipo
- **`Object.getPrototypeOf(obj)`**: Devuelve el prototipo del objeto.
- **`obj.__proto__`** (obsoleto, pero aún usado): Es una referencia al prototipo del objeto.

### Ejemplo básico:
```javascript
let obj = {};
console.log(Object.getPrototypeOf(obj)); // Devuelve el prototipo de `Object`
```

Por defecto, el prototipo de un objeto vacío `{}` es `Object.prototype`.

---

## La Cadena de Prototipos (Prototype Chain)

En JavaScript, los prototipos forman una **cadena de prototipos** (prototype chain). Si una propiedad o método no se encuentra en el objeto actual, el motor buscará en su prototipo, luego en el prototipo del prototipo, y así sucesivamente, hasta llegar a `null` (el final de la cadena).

### Ejemplo:
```javascript
let obj = {};
console.log(obj.toString()); // Función heredada de Object.prototype
```

En este caso:
1. `obj` no tiene un método `toString`.
2. El motor busca en `Object.prototype`, donde encuentra `toString`.

---

## Relación con Objetos

### Crear un Objeto con un Prototipo Específico

Puedes usar el método `Object.create()` para crear un objeto con un prototipo específico:
```javascript
let prototipo = {
  saludar: function() {
    console.log("Hola desde el prototipo");
  }
};

let obj = Object.create(prototipo);
obj.saludar(); // "Hola desde el prototipo"
```

En este caso:
1. `obj` hereda el método `saludar` del objeto `prototipo`.

---
## Prototipos y Constructores

Cuando creas un objeto usando una función constructora, el prototipo de ese objeto es el valor de la propiedad `prototype` de la función constructora.

### Ejemplo:
```javascript
function Persona(nombre) {
  this.nombre = nombre;
}

Persona.prototype.saludar = function() {
  console.log(`Hola, soy ${this.nombre}`);
};

let juan = new Persona("Juan");
juan.saludar(); // "Hola, soy Juan"
```

En este caso:
1. `juan` es un objeto creado por `Persona`.
2. La propiedad `saludar` está en `Persona.prototype`, y `juan` la hereda a través de la cadena de prototipos.

---

## Propiedades Directas vs. Propiedades Heredadas

Puedes determinar si una propiedad pertenece directamente al objeto o si ha sido heredada del prototipo usando el método `hasOwnProperty()`.

### Ejemplo:
```javascript
let obj = Object.create({ heredada: 42 });
obj.propia = "valor";

console.log(obj.hasOwnProperty("propia"));   // true
console.log(obj.hasOwnProperty("heredada")); // false
```

---

## Sobrescritura de Métodos del Prototipo

Es posible sobrescribir métodos heredados del prototipo en un objeto específico:

### Ejemplo:
```javascript
let obj = {
  toString: function() {
    return "Sobrescrito!";
  }
};

console.log(obj.toString()); // "Sobrescrito!"
```

En este caso:
1. El método `toString` en `obj` sobrescribe el método heredado de `Object.prototype`.

---

## Herencia Prototípica

### Ejemplo de Herencia:
```javascript
let animal = {
  caminar: function() {
    console.log("Estoy caminando");
  }
};

let perro = Object.create(animal);
perro.ladrar = function() {
  console.log("Guau");
};

perro.caminar(); // "Estoy caminando" (heredado de `animal`)
perro.ladrar();  // "Guau" (propiedad propia de `perro`)
```

---

## Prototipos en Clases (Sugar Sintáctico)

A partir de ES6, JavaScript introdujo la sintaxis de **clases**, pero internamente sigue utilizando prototipos.

### Ejemplo:
```javascript
class Persona {
  constructor(nombre) {
    this.nombre = nombre;
  }

  saludar() {
    console.log(`Hola, soy ${this.nombre}`);
  }
}

let maria = new Persona("María");
maria.saludar(); // "Hola, soy María"
```

Internamente:
1. `Persona.prototype` contiene el método `saludar`.
2. `maria` hereda este método a través de la cadena de prototipos.

---

## Resumen

- Los prototipos son una forma de herencia en JavaScript.
- Cada objeto tiene un prototipo, que es otro objeto del cual puede heredar propiedades y métodos.
- La herencia en JavaScript funciona a través de la cadena de prototipos.
- Puedes definir métodos o propiedades en el prototipo de una función constructora o clase para compartirlos entre todas las instancias.
- Aunque JavaScript introdujo la sintaxis de clases en ES6, en el fondo sigue utilizando prototipos.