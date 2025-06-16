let x;

let d = new Date();

x = d.toString();

x = d.getTime();
x = d.valueOf();

x = d.getFullYear();
x = d.getMonth(); // Va 1 mes atrás, enero es el 0

x = d.getDate();

x = d.getDay();

x = d.getHours();

x = d.getMinutes();

x = d.getSeconds();

x = d.getMilliseconds();

x = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;


// API para trabajar con fechas

x = Intl.DateTimeFormat("es").format(d);
x = Intl.DateTimeFormat("en-US").format(d);
x = Intl.DateTimeFormat("default").format(d);

// Otra forma de usar la API
x = d.toLocaleString("default", {month: "short"});

console.log(x);