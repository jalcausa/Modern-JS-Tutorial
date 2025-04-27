# CHROME DEV TOOLS

Si en la consola ponemos window nos devuelve información sobre la pestaña actual,
que es un objeto global que contiene un montón de información:

# El objeto `window` en JavaScript

El objeto `window` es uno de los conceptos más fundamentales en JavaScript cuando trabajas con navegadores web.
## ¿Qué es el objeto `window`?

El objeto `window` representa la ventana del navegador que contiene el documento HTML. Es el objeto global en el entorno del navegador, lo que significa que todas las variables globales y funciones que declaras en JavaScript se convierten automáticamente en propiedades y métodos del objeto `window`.

## ¿Qué contiene?

El objeto `window` contiene una gran cantidad de propiedades y métodos, entre los que se incluyen:

1. **Propiedades para acceder a otros objetos importantes**:
   - `document`: El DOM (Document Object Model) de la página web actual
   - `location`: Información sobre la URL actual
   - `navigator`: Información sobre el navegador
   - `history`: El historial de navegación
   - `localStorage`/`sessionStorage`: Mecanismos de almacenamiento del lado del cliente
   - `console`: Para operaciones de depuración y registro

2. **Métodos para manipular la ventana**:
   - `alert()`, `confirm()`, `prompt()`: Diálogos modales
   - `setTimeout()`, `setInterval()`: Funciones para programación asíncrona
   - `open()`, `close()`: Abrir y cerrar ventanas
   - `scrollTo()`, `scrollBy()`: Controlar el desplazamiento

3. **Propiedades de dimensión**:
   - `innerHeight`, `innerWidth`: Dimensiones internas de la ventana
   - `outerHeight`, `outerWidth`: Dimensiones externas de la ventana
   - `screenX`, `screenY`: Posición de la ventana respecto a la pantalla

4. **Eventos**:
   - `window.onload`
   - `window.onresize`
   - `window.onscroll`
   - Y muchos otros...

## Características principales

1. **Objeto global**: Todas las variables y funciones globales se convierten automáticamente en propiedades y métodos del objeto `window`.

2. **Acceso implícito**: No es necesario escribir `window.` para acceder a sus propiedades o métodos en la mayoría de casos. Por ejemplo, puedes escribir `alert()` en lugar de `window.alert()`.

3. **Único por pestaña**: Cada pestaña del navegador tiene su propio objeto `window` independiente.

4. **Extensible**: Los navegadores y las bibliotecas pueden agregar propiedades y métodos adicionales al objeto `window`.

5. **Sirve como puente** entre JavaScript y el navegador, permitiendo que el código interactúe con el entorno del navegador.

## Usos comunes

1. **Manipulación del DOM**: Accediendo a `window.document` para cambiar el contenido de la página.

2. **Temporizadores**: Usando `setTimeout` y `setInterval` para ejecutar código después de un retraso o periódicamente.

3. **Gestión de ventanas**: Abrir, redimensionar, mover o cerrar ventanas del navegador.

4. **Almacenamiento de datos**: A través de `localStorage` o `sessionStorage`.

5. **Navegación**: Mediante `window.location` para redirigir a los usuarios o obtener información de la URL.

6. **Detección del entorno**: Usando propiedades como `window.navigator` para obtener información sobre el navegador y el sistema del usuario.

7. **Comunicación entre ventanas**: Para la comunicación entre iframes o ventanas pop-up del mismo origen.

8. **Eventos del navegador**: Para responder a acciones como cargar la página, redimensionar la ventana o desplazarse.

El objeto `window` es esencial para cualquier desarrollador web que trabaje con JavaScript en el navegador, ya que proporciona la interfaz principal para interactuar con el navegador y el entorno de visualización.

# Uso de punto y coma (;) en JavaScript

El uso del punto y coma (;) en JavaScript es un tema con ciertos matices que vale la pena entender. Te explicaré cómo funciona y las mejores prácticas al respecto.

## Reglas básicas

En JavaScript, los punto y coma (`;`) se utilizan para **separar instrucciones**. Técnicamente, se pueden usar de la siguiente manera:

```javascript
let nombre = "Ana";
console.log(nombre);
let edad = 25;
```

## Inserción automática de punto y coma (ASI)

JavaScript tiene un mecanismo llamado **Automatic Semicolon Insertion (ASI)** que inserta automáticamente puntos y coma en ciertos casos cuando están ausentes. Esto permite código como:

```javascript
let nombre = "Ana"
console.log(nombre)
let edad = 25
```

Este código funcionará correctamente porque JavaScript insertará los puntos y coma automáticamente.

## Casos donde el punto y coma es necesario o recomendado

1. **Múltiples instrucciones en una línea**:
   ```javascript
   let x = 1; let y = 2;
   ```

2. **Para evitar ambigüedades con instrucciones que comienzan con `[`, `(`, `/`, `+` o `-`**:
   
   Por ejemplo, sin el punto y coma, este código daría error:
   ```javascript
   const fn = () => {}
   [1, 2, 3].forEach(console.log)  // Error
   ```
   
   Con punto y coma es correcto:
   ```javascript
   const fn = () => {};
   [1, 2, 3].forEach(console.log)  // OK
   ```

3. **Antes de una IIFE (Immediately Invoked Function Expression)**:
   ```javascript
   const resultado = {}
   ;(function() {
     // código...
   })()
   ```

## Mejores prácticas y convenciones

Hay dos escuelas principales de pensamiento:

1. **Usar siempre punto y coma**:
   - Hace el código más explícito
   - Evita potenciales errores en casos de borde
   - Es consistente con otros lenguajes como C, Java, etc.
   - Recomendado por muchas guías de estilo corporativas (Google, Airbnb)

2. **Omitir los punto y coma** (confiando en ASI):
   - Código más limpio y conciso
   - Menos caracteres para escribir
   - Utilizado en el estilo Standard JavaScript
   - Popular en proyectos modernos y en el ecosistema Node.js

## Marcos de trabajo y bibliotecas

Diferentes proyectos tienen diferentes convenciones:

- **React/Facebook**: Generalmente usa punto y coma
- **Standard JS**: No usa punto y coma
- **Angular**: Usa punto y coma
- **Node.js (código core)**: Históricamente sin punto y coma

## Consistencia es clave

Lo más importante es mantener la consistencia:
- Si trabajas en un proyecto existente, sigue la convención establecida
- Si usas un linter como ESLint, configúralo para hacer cumplir un estilo coherente
- Si trabajas en una organización, sigue sus guías de estilo

## Conclusión

El uso de puntos y coma en JavaScript es en gran medida una cuestión de preferencia de estilo, con excepción de algunos casos específicos donde son necesarios. Lo más importante es mantener un enfoque coherente en todo tu código o proyecto.

Si estás comenzando un nuevo proyecto, puedes elegir el estilo que prefieras, pero asegúrate de aplicarlo de manera consistente, idealmente utilizando herramientas como ESLint para hacer cumplir estas reglas automáticamente.