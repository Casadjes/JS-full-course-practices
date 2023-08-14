//forma 1 de concatenar

var nombre = "Jesus";
var apellido = "Casado";

var nombreCompleto = nombre + " " + apellido;
console.log(nombreCompleto);

//forma 2 de concatenar

var nombreCompleto2 = "juan" + " " + "lara";
console.log(nombreCompleto2);

/* las expresiones en javascript se evaluan de izquierda a derecha y
debido que del lado izquierdo encuentra primero un string y posteriormente
un number, entonces el number lo trata como una cadena. por lo tanto el resultado final es una cadena */
var x = nombre + 901;
console.log(x);

/* en este caso se puede ver una explicacion mas clara de lo anterior
, al encontrar en primer lugar a un string trata a los otros valores como tal */
var x2 = nombre + 2 + 4;
console.log(x2);

//en el caso de que querramos que los valores se sumen se hace lo siguiente:
//al poner los parentesis, toma prioridad lo que esta dentro, en este caso la suma

x = nombre + (2 + 4);
console.log(x);

//otro forma de hacerlo

x = 2 + 4 + nombre;
console.log(x);
