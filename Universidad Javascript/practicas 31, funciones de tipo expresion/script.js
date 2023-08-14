/*  se les conoce funcion tipo expresion a las funciones
que son asignadas a una variable, tambien son conocidas 
como funciones anonimas.*/

/* a este tipo de funcion hay que agregarle punto y coma
al final */
let resultado;

//declaracion funcion tipo expresion
let sumar = function (a, b) {
  return a + b;
};

resultado = sumar(1, 2);
console.log(resultado);
