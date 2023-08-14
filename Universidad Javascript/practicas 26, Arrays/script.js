//diferentes formas de declarar un array

//forma antigua
let autos = new Array("BMW", "Mercedes Benz", "Volvo");
//manera moderna
const cars = ["BMW", "Mercedes Benz", "Volvo"];
console.log(cars);

//recorrer los elementos de un Array
console.log(cars[0]);
console.log(cars[2]);

//recorrer todos los elementos de un array con ciclo for

for (let i = 0; i < cars.length; i++) {
  console.log(i + ": " + cars[i]);
}
