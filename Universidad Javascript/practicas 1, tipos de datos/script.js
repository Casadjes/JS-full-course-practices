//string
var nombre = "jesus";
console.log(nombre);

//number

var number = 1000;
console.log(number);

//object

var object = {
  nombre: "jesus",
  apellido: "casado",
  telefono: 1011001000,
};

console.log(object);

//boolean [true, false]

var bandera = true;
console.log(bandera);

//function

function miFuncion() {}
console.log(miFuncion);

//symbol
var simbolo = Symbol("mi simbolo");
console.log(simbolo);

//class (tambien es una funcion)

class persona {
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
  }
}
console.log(persona);

//undefined

var x;
console.log(x);

x = undefined;
console.log(x);

//null (ausencia de valor) (es un object)
var y = null;
console.log(y);

//array

var autos = ["BMW", "Audi", "Volvo"];
console.log(autos);
console.log(typeof autos);

//valores vacios

var z = "";
console.log(z);
console.log(typeof z);
