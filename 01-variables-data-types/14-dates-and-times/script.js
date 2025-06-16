let d;

d = new Date();

d = new Date(2003, 8, 4);

d = new Date("2025-06-16");

d = new Date("1/1/1970");

d = Date.now()

d = new Date("09/04/2003 18:00:00");
// Método del objeto Date que extrae el timestamp
d = d.getTime();
// Método que convierte un objeto a su valor primitivo
d = d.valueOf();

d = new Date(1062691200000);

// Tiempo actual en segundos, por defecto se devuelve en ms el Date.now()

d = Math.floor(Date.now() / 1000); 

console.log(d);
