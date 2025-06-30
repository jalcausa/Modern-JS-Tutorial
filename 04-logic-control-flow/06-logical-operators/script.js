/* ------------- Logical Operators ----------------------- */

console.log(10 > 20 && 30 > 15);

console.log(10 > 20 || 30 > 15);

// && - Devuelve el primer valor falsy o el último valor (evaluación en cortocircuito)

let a;

a = 10 && 20; // 20 (Como ninguno es falsy nos da el último)

a = 10 && 0 && 30; // 0 (Primer valor falsy)

console.log(a);

// Uso

const posts = [];

posts.length > 0 && console.log(posts[0]); // Para evitar mostrar undefined si la primera condición es falsa hace evaluación en cortocircuito y no evalúa la otra expresión

// || Devuelve el primer valor truthy o el último

let b;

b = 10 || 20;

b = 0 || null || "" || undefined;

console.log(b);

// ?? Devuelve el operando derecho si el izquierdo es null o undefined

let c;

c = null ?? 20; // 20
c = undefined ?? 30; // 30
c = 0 ?? 30; // 30: solo mira null o undefined NO falsy

console.log(c);