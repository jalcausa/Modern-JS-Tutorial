/*-------------------------- For...in Loop--------------------------- */

// Se usa para iterar sobre objetos lierales sobre todo

const colors = {
  color1: "red",
  color2: "blue",
  color3: "green",
  color4: "orange",
};

for (const key in colors) {
  console.log(key, colors[key]);
};

// Si lo usamos sobre un array nos da las claves

const colorArr = ["red", "blue", "green", "orange"];

for (const key in colorArr) {
	console.log(colorArr[key]);
}