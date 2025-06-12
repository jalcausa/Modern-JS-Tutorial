let x;

x = 5 + "5";

x = 5 + null; // Trata null como 0

x = Number(null); // 0

x = Number(true); // 1
x = Number(false); // 0

x = 5 + true; // 6

x = 5 + undefined; // NaN

console.log(x, typeof x);