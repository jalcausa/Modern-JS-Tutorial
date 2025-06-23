// IIFE (Immediately Invoked Function Expressions)

/*

Son funciones que se declaran e invocan al mismo tiempo

Normalmente son anónimas anónimas, es decir, de 

Una de las razones para usarlas es evitar contaminar el scope global

Es una manera de poder tener una variable o función con el mismo nombre que una que ya existe en el scope global "encapsulándola" en una función

IMPORTANTE: son expresiones de función como cuando hacemos const f = function () {} pero como queremos que sea anónima lo conseguimos con los paréntesis que ponemos alrededor de toda la función

*/

(function () {
  const user = "John";
  console.log(user);
})();

// La función anónima también puede tomar parámetros que se le pasan justo en los paréntesis de debajo que son realmente los que la están invocando

(function (name) {
  console.log("Hello " + name);
})("Gonzalo");

/*

Pueden no ser anónimas, aunque no tiene mucho sentido porque no se van a poder llamar desde fuera

Pero puede resultar útil si queremos usar recursión ya que sí que se puede llamar a sí misma 

*/

console.log(
  (function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
  })(5)
);

// factorial(1); ERROR, factorial is not defined