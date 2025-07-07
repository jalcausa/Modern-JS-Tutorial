/*------------------------------------ Map --------------------------------------- */
/*

Crea un nuevo array con el resultado de aplicar una función a cada elemento de un array

*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const doubledNumbers = numbers.map(n => n * 2);

console.log(doubledNumbers);

// Same with forEach

const res = [];
numbers.forEach(n => {res.push(n*2)});
console.log(res);

const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

// Create an array of company names
const companyNames = companies.map(company => company.name);
console.log(companyNames);

// Create an array with just company and category
const companyInfo = companies.map(company => {
	return {
		name: company.name,
		category: company.category
	}
});

console.log(companyInfo);

// Create an array of the length of each company in years
const companyYears = companies.map(company => company.end - company.start);
console.log(companyYears);

// Create an array of objects with the name and length of each company in years
const companyYearsObjects = companies.map(company => ({ // Hace falta los ()
	name: company.name,
	length: company.end - company.start + " years"
}));

console.log(companyYearsObjects);

// Chain map methods
// Get the square root and then double
const squareAndDouble = numbers
	.map(n => Math.sqrt(n))
	.map(n => n * 2);
console.log(squareAndDouble);

const squareAndDouble2 = numbers
	.map(function (number) {
		return Math.sqrt(number);
	})
	.map(function(sqrt) {
		return sqrt * 2;
	});

console.log(squareAndDouble2);

// Chaining different methods
const evenDouble = numbers
	.filter(n => n % 2 === 0)
	.map(n => n * 2);

console.log(evenDouble);
