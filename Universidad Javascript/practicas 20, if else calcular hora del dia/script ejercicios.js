//-----------------Ejercicios con if else----------------------

//pedir dos numeros y decir si son multiplo o no

let numero1 = 30;
let numero2 = 10;

if (numero1 % numero2 == 0 || numero2 % numero1 == 0) {
  console.log("son multiplos");
} else {
  console.log("no son multiplos");
}

// pedir dos numeros y decir cual es mayor
numero1 = 10;
numero2 = 10;

if (numero1 > numero2) {
  console.log("el numero mayor es: " + numero1);
} else if (numero2 > numero1) {
  console.log("el numero mayor es: " + numero2);
} else if (numero1 == numero2 || numero2 == numero1) {
  console.log("tienen el mismo valor");
}

//pedir un numero y decir si es negativo, si es positivo o cero

numero1 = 0;

if (numero1 > 0) {
  console.log("es un numero positivo");
} else if (numero1 < 0) {
  console.log("es un numero negativo");
} else {
  console.log("el numero es: " + numero1);
}

//pedir una calificacion de 0 a 10 y mostrar la siguiente manera:
// insuficiente, suficiente, bien, excelente.

let calificacion = 10;

if (calificacion < 5 && calificacion >= 0) {
  console.log("calificación: insuficiente");
} else if (calificacion === 5) {
  console.log("calificación: suficiente");
} else if (calificacion > 5 && calificacion <= 8) {
  console.log("calificación: bien");
} else if (calificacion > 8 && calificacion <= 10) {
  console.log("calificación: excelente");
} else {
  console.log("calificación no valida");
}

//pedir una hora, minuto y segundo y mostrar la hora en el segundo siguiente

let hora = 3;
let minuto = 59;
let segundo = 59;

segundo++;

if (segundo >= 60) {
  segundo = 0;
  minuto++;
} else if (minuto >= 60) {
  minuto = 0;
  hora++;
} else if (hora >= 24) {
  hora = 0;
}
console.log(`La hora es: ${hora}: ${minuto}: ${segundo}`);

//pedir un string y mostrar true si tiene 5 caracteres o mas, caso contrario
//mostrar false. (operador ternario)

let string = "cinco";

let respuesta = string.length >= 5 ? true : false;

console.log(respuesta);

//pedir tres numeros enteros con un valor del 1 al 10, sacar el promedio
//de los tres numeros y mostrar true si el promedio es mayor que 5
//caso contrario mostrar false
//utilizar operador ternario

numero1 = 10;
numero2 = 4;
numero3 = 7;

respuesta = (numero1 + numero2 + numero3) / 3 > 5 ? true : false;
console.log(respuesta);

//crear un numero aleatorio entre el 1 y el 20, si es par mostrar true seguido
//del numero, si es impar mostrar false seguido del numero
//utilizar operador ternario

let aleatorio = Math.ceil(Math.random() * 20);

respuesta = aleatorio % 2 === 0 ? "par: " : "impar: ";
console.log(respuesta + aleatorio);
