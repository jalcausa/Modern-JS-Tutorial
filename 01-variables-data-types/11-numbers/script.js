let x;

const num = new Number(5.4527);

x = num.toFixed(2);

x = num.toPrecision(4);

x = num.toExponential(2);

x = num.toLocaleString('es');

x = num.valueOf();

x = Number.MAX_VALUE;

x = Number.MIN_VALUE;

console.log(x, typeof x);