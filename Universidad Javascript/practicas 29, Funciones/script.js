/* una fucion es un codigo reutilizable, y la podemos llamar
cada vez que queramos */

/* las funciones pueden y tambien pueden no tener argumentos,
en caso de que cuente con mas de un argumento, deben ir
separados por coma */

//IMPORTANT

/* Hoisting es llamar a la funcion antes o despues de defi
nirla, lo que quiere decir que podemos llamar la funcion desde
cualquier parte de nuestro código.

el concepto de hoisting lo que hace es que mueve la funcion
al inicio del programa para que la podamos utilizar en cualquier
parte de nuestro codigo.*/
miFuncion(4, 2);

//declaracion de la funcion
function miFuncion(a, b) {
  console.log("Suma: " + (a + b));
}
//lamando la funcion
miFuncion(3, 2);
