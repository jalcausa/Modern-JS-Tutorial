//Challenge 1

// Function expression
const getCelsius = function(fahrenheit) {
	return Math.round((fahrenheit - 32) * 5) / 9;
};

// Function declaration
function getCelsius2(fahrenheit) {
  return (Math.round((fahrenheit - 32) * 5) / 9);
};

const getCelsius3 = fahrenheit => Math.round(((fahrenheit - 32) * 5) / 9);

console.log(`The temperature is ${getCelsius3(35)} \xB0C`);

// Challenge 2

const minMax = arr => ({
	min: Math.min(...arr),
	max: Math.max(...arr)
})

console.log(minMax([-1, 4, 2, 7, 1]));

// Challenge 3
(function (length, width) {
	console.log(`The area of a rectangle with a length of ${length} and a width of ${width} is ${length * width}`);
})(10, 5);

/*
También se puede hacer con una función flecha:
((length, width) => {
	console.log(`The area of a rectangle with a length of ${length} and a width of ${width} is ${length * width}`);
})(10, 5);

*/