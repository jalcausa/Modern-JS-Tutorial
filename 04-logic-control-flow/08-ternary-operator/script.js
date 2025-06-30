/* ------------------- Ternary Operator -------------------*/

const age = 19;

// Using if statement

if (age >= 18) {
  console.log("You can vote");
} else {
  console.log("You cannot vote");
}

// Using ternary operator
age >= 18 ? console.log("You can vote") : console.log("You cannot vote");

// Asignar valor condional a una variable

const canVote = age >= 18 ? true : false;

console.log(canVote);

// Multiple statements

const auth = true;

//let redirect;
// Using if:
// if (auth) {
// 	alert("Welcome to the dashboard");
// 	redirect = "/dashboard";
// } else {
// 	alert("Access denied");
// 	redirect = "/login";
// }

// Using ternary operator:
// Si ponemos paréntesis podemos hacer varias cosas a la vez separándolo por comas

const redirect = auth
  ? (alert("Welcome to the dashboard"), "/dashboard")
  : (alert("Access denied"), "/login");

console.log(redirect);

// Podemos usar null si solo queremos usar la parte true

auth ? console.log("Welcome to the dashboard") : null;

// También podemos usar el && para eso:

auth && console.log("Welcome to the dashboard");
