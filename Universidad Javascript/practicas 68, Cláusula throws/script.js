"use strict";

try {
  let x = 0;
  throw "mi error";
} catch (error) {
  console.log(error);
} finally {
  console.log("termina la revision de errores");
}

console.log("continuamos");

//---------------- ejemplo -----------------

let resultado = -1;

try {
  if (isNaN(resultado)) throw "no es un numero";
  else if (resultado === "") throw "es una cadena vacia";
  else if (resultado >= 0) throw "valor positivo";
  else if (resultado < 0) throw "valor negativo";
} catch (error) {
  console.log(error);
  // console.log(error.name);
  // console.log(error.message);
}
