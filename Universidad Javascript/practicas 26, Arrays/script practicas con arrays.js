//--------------------------ejercicios con arrays------------------------------

/* crear una funcion que tome como parametro un array,
retornar el ultimo elemento del array */

function retornarUltimo(array) {
  const resultado = array[array.length - 1];
  return resultado;
}
const respuesta = retornarUltimo([4, 8, 5]);
console.log(respuesta);

/* crear una funcion que tome como parámetro un array,
retornar el primer elemento del array */

function retornarPrimero(array) {
  const resultado1 = array[0];
  return resultado1;
}
const respuesta1 = retornarPrimero([1, 2, 3]);
console.log(respuesta1);
