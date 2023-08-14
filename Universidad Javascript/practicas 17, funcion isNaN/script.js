let miNumero = "18";

let edad = Number(miNumero);
console.log(edad);

if (isNaN(edad)) {
  console.log("no es un numero");
} else {
  if (edad >= 18) {
    console.log("es mayor de edad");
  } else {
    console.log("es menor");
  }
}
/* con el operador ternaio */

if (isNaN(edad)) {
  console.log("is not a number");
} else {
  let resultado = edad >= 18 ? "es mayor" : "es menor";
  console.log(resultado);
}
