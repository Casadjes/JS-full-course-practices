//Parámetros

/* se le conoce como parametos de una funcion a 
las variables que estan dentro de los parentesis,
en otras palabras se conocen como parametros a la
lista de valores que va a recibir una funcion*/

//Argumentos

/* son los valores finales que asignamos cuando
llamamos la funcion */
let resultado;

//a los parametros se les puede asignar un valor por defecto.
let sumar = function (a = 4, b = 5) {
  console.log(arguments[0]);
  console.log(arguments[1]);
  /* puedes acceder a un argumento indefinido y ponerle el
  valor cuando vaya a ser llamado */
  console.log(arguments[2]);
  return a + b + arguments[2];
};
/* los valores que pongamos en los argumentos al llamar
la funcion sobreescribirán los parametros los cuales tienen
valor por defecto */
resultado = sumar(3, 6, 7);
console.log(resultado);
