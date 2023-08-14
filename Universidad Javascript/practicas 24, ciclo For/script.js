// for (let contador = 0; contador < 3; contador++) {
//   console.log(contador);
// }

/* integrando la palabra break en el cilo for*/

for (let contador = 0; contador <= 10; contador++) {
  if (contador % 2 == 0) {
    console.log(contador);
    break; /* termina toda la ejecución del ciclo for
    despues de haber obtenido el primer valor */
  }
}

/* mismo ejercicio pero con ciclo while */

let contador1 = 0;

while (contador1 <= 10) {
  /* imprimir los numeros pares del 1 al 10 */
  if (contador1 % 2 == 0) {
    console.log(contador1);
  }
  contador1++;
}

/* mismo ejercicio, pero con ciclo do while */

let contador2 = 0;

do {
  if (contador2 % 2 == 0) {
    console.log(contador2);
    break;
  }
  contador2++;
} while (contador2 <= 10);

/*------------------------------------- ejercicios con ciclo for ------------------------------------------- */

//crear un algoritmo que cuando ingreses un numero te devuelva su tabla de multiplicar

let numero = 2;
let resultado;

for (let i = 1; i <= 10; i++) {
  resultado = numero * i;
  console.log("el resultado es: " + resultado);
}

//imprimir el siguiente patron de asteriscos utilizando un ciclo for

//*
//* *
//* * *
//* * * *
//* * * * *
//* * * * * *

for (let i = 1; i <= 6; i++) {
  let resultado1 = "";
  for (let j = 1; j <= i; j++) {
    resultado1 += "* ";
  }
  console.log(resultado1);
}
