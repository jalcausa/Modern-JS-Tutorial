const d = new Date(10, 30, 2022, 10, 0, 0);
const hour = d.getHours();

if (hour < 12) {
	console.log("Good morning");
} else if (hour < 18) {
	console.log("Good afternoon");
} else {
	console.log("Good night");
}

