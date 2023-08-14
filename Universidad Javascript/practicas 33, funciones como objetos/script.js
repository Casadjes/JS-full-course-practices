/* argument se usa para saber cuantos parametros
 tiene una funcion y solo se puede usar dentro de la funcion */

function miFuncion(a, b) {
  console.log(arguments.length);
  return a + b;
}
let resultado = miFuncion(2, 3);
console.log(resultado);

console.log(typeof miFuncion);

/* metodo para comprobar que las funciones
pueden ser descritas como objetos */

var miFuncionTexto = miFuncion.toString();
console.log(miFuncionTexto);
