function calculator (v1, v2, op) {
	switch (op) {
		case "+":
			return v1 + v2;
		case "-":
			return v1 - v2;
		case "*":
			return v1 * v2;
		case "/":
			return v1 / v2;
		default:
			return "Not a valid operator";
	}
}