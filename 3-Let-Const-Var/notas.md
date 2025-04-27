

# Variables en JavaScript: `let`, `const` y `var`

## 1. Diferencias fundamentales entre `let`, `const` y `var`

### Ámbito (Scope)
- **`var`**: Tiene ámbito de función o global.
- **`let` y `const`**: Tienen ámbito de bloque (cualquier código entre llaves `{}`).

```javascript
function ejemploScope() {
    if (true) {
        var x = "var"; // Accesible en toda la función
        let y = "let"; // Solo accesible en este bloque if
        const z = "const"; // Solo accesible en este bloque if
    }
    
    console.log(x); // "var"
    console.log(y); // Error: y is not defined
    console.log(z); // Error: z is not defined
}
```

### Reasignación y mutabilidad
- **`var`**: Puede ser reasignada y redeclarada.
- **`let`**: Puede ser reasignada, pero no redeclarada en el mismo ámbito.
- **`const`**: No puede ser reasignada ni redeclarada.

```javascript
// Reasignación
var a = 1;
a = 2; // ✓ Válido

let b = 1;
b = 2; // ✓ Válido

const c = 1;
c = 2; // ❌ Error: Assignment to constant variable

// Redeclaración en el mismo ámbito
var a = 1;
var a = 3; // ✓ Válido

let b = 1;
let b = 3; // ❌ Error: Identifier 'b' has already been declared

const c = 1;
const c = 3; // ❌ Error: Identifier 'c' has already been declared
```

### Objetos con `const`
- Un objeto declarado con `const` no puede ser reasignado, pero sus propiedades sí pueden ser modificadas.

```javascript
const persona = { nombre: "Ana" };
persona.nombre = "Juan"; // ✓ Válido
persona = { nombre: "Pedro" }; // ❌ Error: Assignment to constant variable
```

## 2. Hoisting (Elevación)

- **`var`**: Es elevada (hoisted) y se inicializa con `undefined`.
- **`let` y `const`**: Son elevadas pero no se inicializan (quedan en la "zona muerta temporal").

```javascript
console.log(x); // undefined (hoisted)
var x = 5;

console.log(y); // ❌ Error: Cannot access 'y' before initialization
let y = 5;

console.log(z); // ❌ Error: Cannot access 'z' before initialization
const z = 5;
```

## 3. Zona Muerta Temporal (Temporal Dead Zone)

Es el período entre el inicio del bloque y donde se procesa la declaración de la variable.

```javascript
{
    // TDZ para x comienza aquí
    console.log(x); // ❌ Error: Cannot access 'x' before initialization
    let x = 3; // TDZ para x termina aquí
}
```

## 4. Variables Globales

- **`var`**: Cuando se declara fuera de una función, se convierte en propiedad del objeto global (`window` en navegadores).
- **`let` y `const`**: No se convierten en propiedades del objeto global.

```javascript
var globalVar = "Soy global con var";
let globalLet = "Soy global con let";

console.log(window.globalVar); // "Soy global con var"
console.log(window.globalLet); // undefined
```

## 5. Bucles y Closures

El comportamiento es diferente en bucles:

```javascript
// Con var:
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1000);
}
// Muestra: 3, 3, 3

// Con let:
for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1000);
}
// Muestra: 0, 1, 2
```

## 6. Mejores Prácticas

1. **Usa `const` por defecto**: Para variables que no necesitan ser reasignadas.
2. **Usa `let` cuando sea necesario**: Cuando necesites reasignar una variable.
3. **Evita usar `var`**: Es considerado obsoleto en código moderno.
4. **Declara todas las variables al principio del ámbito**: Mejora la legibilidad.
5. **Usa nombres descriptivos**: Para mejorar la legibilidad y mantenimiento.
6. **Minimiza el ámbito de las variables**: Declara las variables en el ámbito más reducido posible.

## 7. Comparativa Rápida

| Característica      | `var`             | `let`              | `const`            |
|---------------------|-------------------|--------------------|--------------------|
| Ámbito              | Función o global  | Bloque             | Bloque             |
| Reasignación        | ✓                 | ✓                  | ❌                 |
| Redeclaración       | ✓                 | ❌                 | ❌                 |
| Hoisting            | ✓ (inicializa)    | ✓ (no inicializa)  | ✓ (no inicializa)  |
| Objeto global       | ✓                 | ❌                 | ❌                 |
| TDZ                 | ❌                | ✓                  | ✓                  |

## 8. Inicialización

- Las variables declaradas con `let` y `const` deben ser inicializadas antes de usarlas.
- `const` debe ser inicializada en su declaración.

```javascript
let x; // ✓ Válido (valor undefined)
x = 5; // ✓ Válido

const y; // ❌ Error: Missing initializer in const declaration
const z = 5; // ✓ Válido
```

## 9. ECMAScript Moderno (ES6+)

- `let` y `const` fueron introducidos en ES6 (2015).
- En proyectos modernos, se prefiere usar `let` y `const` en lugar de `var`.
- La mayoría de frameworks y bibliotecas modernas recomiendan este enfoque.


# Hoisting (Elevación) en JavaScript

## ¿Qué es el Hoisting?

El hoisting (elevación) en JavaScript es un comportamiento que ocurre durante la fase de compilación, donde las **declaraciones** de variables y funciones son "movidas" conceptualmente al inicio de su ámbito (scope) antes de que el código sea ejecutado. Es importante entender que solo las declaraciones son elevadas, no las inicializaciones o asignaciones.

## ¿Cómo funciona realmente?

En realidad, lo que sucede es que el motor de JavaScript procesa todas las declaraciones de funciones y variables durante la fase de "creación" del contexto de ejecución, antes de ejecutar el código línea por línea.

## Casos en los que ocurre el hoisting

### 1. Hoisting con variables `var`

* Las declaraciones con `var` son elevadas al inicio de su ámbito y se inicializan automáticamente con el valor `undefined`.

```javascript
console.log(nombre); // undefined (no da error)
var nombre = "Juan";

// El código anterior es interpretado por el motor de JavaScript como:
// var nombre; // declaración elevada
// console.log(nombre);
// nombre = "Juan"; // la asignación permanece en su lugar original
```

### 2. Hoisting con funciones

* **Declaraciones de funciones**: Son elevadas completamente (tanto la declaración como el cuerpo).

```javascript
// Esto funciona perfectamente
saludar(); // "Hola mundo"

function saludar() {
  console.log("Hola mundo");
}

// El motor interpreta esto como:
// function saludar() { console.log("Hola mundo"); }
// saludar();
```

* **Expresiones de funciones**: Solo se eleva la declaración de la variable, no la función en sí.

```javascript
console.log(typeof saludar); // "undefined"
saludar(); // Error: saludar is not a function

var saludar = function() {
  console.log("Hola mundo");
};

// El motor interpreta esto como:
// var saludar;
// console.log(typeof saludar);
// saludar();
// saludar = function() { console.log("Hola mundo"); };
```

### 3. Hoisting con `let` y `const`

* Las declaraciones con `let` y `const` también son elevadas, pero **no se inicializan**. Permanecen en una "Zona Muerta Temporal" (TDZ) hasta su declaración.

```javascript
console.log(edad); // Error: Cannot access 'edad' before initialization
let edad = 30;

// No es igual a:
// let edad;
// console.log(edad);
// edad = 30;
```

```javascript
console.log(PI); // Error: Cannot access 'PI' before initialization
const PI = 3.14159;
```

### 4. Hoisting en funciones anidadas

El hoisting ocurre en cada ámbito por separado:

```javascript
function exterior() {
  console.log(mensaje); // undefined
  
  var mensaje = "exterior";
  
  function interior() {
    console.log(mensaje); // undefined (no es "exterior")
    var mensaje = "interior";
  }
  
  interior();
}

exterior();

// Es interpretado como:
// function exterior() {
//   var mensaje;
//   console.log(mensaje);
//   mensaje = "exterior";
//   
//   function interior() {
//     var mensaje;
//     console.log(mensaje);
//     mensaje = "interior";
//   }
//   
//   interior();
// }
```

### 5. Hoisting con parámetros de función

Los parámetros de función son tratados como variables locales que ya están declaradas:

```javascript
function mostrar(a) {
  console.log(a); // 5
  var a = 10;
  console.log(a); // 10
}

mostrar(5);

// Es interpretado como:
// function mostrar(a) {
//   // a ya está declarado como parámetro
//   console.log(a); // 5
//   a = 10;
//   console.log(a); // 10
// }
```

### 6. Hoisting en clases

* Las **declaraciones de clase** no son elevadas como las funciones.

```javascript
const p = new Persona(); // Error: Cannot access 'Persona' before initialization

class Persona {
  constructor() {
    this.nombre = "Juan";
  }
}
```

* Las **expresiones de clase** siguen las reglas de hoisting para variables:

```javascript
const p = new Persona(); // Error: Persona is not defined (si usamos var)
                        // Error: Cannot access 'Persona' before initialization (si usamos let/const)

var Persona = class {
  constructor() {
    this.nombre = "Juan";
  }
}
```

## Casos particulares y consideraciones importantes

### Hoisting y el orden de precedencia

Cuando hay variables y funciones con el mismo nombre, las funciones tienen precedencia:

```javascript
console.log(typeof doble); // "function"

var doble = 22;

function doble() {
  return 2 * 2;
}

console.log(typeof doble); // "number"
```

### Hoisting en bucles

```javascript
for (var i = 0; i < 3; i++) {
  // La variable 'i' será elevada fuera del bucle
}
console.log(i); // 3 (accesible fuera del bucle)

for (let j = 0; j < 3; j++) {
  // La variable 'j' tiene ámbito de bloque
}
console.log(j); // Error: j is not defined
```

## Buenas prácticas respecto al hoisting

1. **Declare siempre al inicio**: Para evitar confusiones, declare todas las variables al inicio de su ámbito.

2. **Prefiera `let` y `const` sobre `var`**: Ayudan a prevenir errores relacionados con el hoisting.

3. **Declare antes de usar**: Siempre declare e inicialice variables antes de usarlas.

4. **Entienda cómo se comporta cada tipo de declaración**: Es crucial para escribir código predecible.

## Conclusión

El hoisting es una característica fundamental de JavaScript que puede ser tanto útil como confusa. Entender cómo se eleva cada tipo de declaración te ayudará a evitar errores comunes y a escribir código más predecible y mantenible.

El hoisting explica por qué algunas piezas de código funcionan a pesar de aparentemente violar el flujo lógico, y por qué otras fallan con errores que pueden parecer misteriosos al principio.