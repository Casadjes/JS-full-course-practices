//el paso por valor es cuando utlizamos tipos que no son objetos

//Tipos Primitivos
let x = 10;

/* ya que es un valor primitivo no es posible cambiar su valor
mediante el metodo */
function cambiarValor(a) {
  a = 20;
}
cambiarValor(x);
console.log(x);
// console.log(a);

/* Paso por referencia */

const persona = {
  nombre: "juan",
  apellido: "perez",
};

function cambiarValorObjeto(p1) {
  p1.nombre = "Carlos";
  p1.apellido = "Lara";
}
//paso por referencia
cambiarValorObjeto(persona);
console.log(persona);

/* ------------------------ practicas ----------------------- */

// crea un objeto con los parámetros Banana, Jugo, Naranjas cambia esos valores mediante el paso por referencia
// y pon Pan, Vegetales y Piña.

const listaDeCompras = {
  compra1: "Banana",
  compra2: "Jugo",
  compra3: "Naranjas",
};

function cambiarLista(compra) {
  compra.compra1 = "pan";
  compra.compra2 = "vegetales";
  compra.compra3 = "piña";
}

cambiarLista(listaDeCompras);
console.log(listaDeCompras);

// crea un objeto que contenga preferencias de un vehiculo, luego cambialos mediante el paso por referencia

const carsType = {
  año: 2005,
  marca: "Toyota",
  modelo: "Supra",
};

function cambiarType(param) {
  param.año = 2022;
  param.marca = "Nissan";
  param.modelo = "Skyline";
}

cambiarType(carsType);
console.log(carsType);
