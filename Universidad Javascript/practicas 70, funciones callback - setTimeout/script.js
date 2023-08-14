//funcion normal

function miFuncion1() {
  console.log("funcion 1");
}

function miFuncion2() {
  console.log("mi funcion 2");
}

miFuncion2();
miFuncion1();

// Funciones tipo callback

function imprimir(mensaje) {
  console.log(mensaje);
}

function sumar(op1, op2, funcionCallback) {
  let res = op1 + op2;
  funcionCallback("Resulado: " + res);
}

sumar(5, 3, imprimir);

// llamadas asincronas con uso de setTimeout

function miFuncionCallback() {
  console.log("saludo asincrono despues de tres segundos");
}

setTimeout(miFuncionCallback, 3000);

//setTimeout con una funcion como parametro

setTimeout(function () {
  console.log("saludo asincrono 2");
}, 4000);

// usando funcion flecha

setTimeout(() => console.log("saludos asincrono 3"), 1000);
