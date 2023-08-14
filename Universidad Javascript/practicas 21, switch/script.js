/* switch evalua los valores de manera estricta ===
 en cambio el if no es así */

let numero = 3,
  numeroTexto = "valor desconocido";

switch (numero) {
  case 1:
    numeroTexto = "numero uno";
    break;
  case 2:
    numeroTexto = "numero dos";
    break;
  case 3:
    numeroTexto = "numero tres";
    break;
  case 4:
    numeroTexto = "numero cuatro";
    break;
  default:
    numeroTexto = "otro";
}

console.log(numeroTexto);
