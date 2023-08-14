let miFuncion = function () {
  console.log("hola desde mi funcion");
};

// a las funciones tipo flecha no se les aplica el metodo del hoisting, deben llamarse despues de estar creadas.
// const miFuncionFlecha = () => {
//   console.log("hola desde mi funcion flecha");
// };

// const miFuncionFlecha = () => console.log("hola desde funcion flecha simplificada");

// miFuncionFlecha();

// const saludar = () => {
//   return "saludos desde funcion flecha";
// }

const saludar = () => "saludos desde funcion flecha";
console.log(saludar());

const regresarObjeto = () => ({ nombre: "juan", apellido: "lara" });
console.log(regresarObjeto());

// const funcionConParametros = (mensaje) => console.log(mensaje);
const funcionConParametros = (mensaje) => console.log(mensaje);
funcionConParametros("saludos con parametros");

const funcionConVariosParametros = (op1, op2) => {
  let resultado = op1 + op2;
  return resultado;
};
console.log(funcionConVariosParametros(1, 2));
