let persona1 = {
  nombre: "juan",
  apellido: "perez",
  nombreCompleto: function (titulo, tel) {
    return titulo + ": " + this.nombre + " " + this.apellido + ", " + tel;
  },
};

let persona2 = {
  nombre: "carlos",
  apellido: "lara",
};

//uso de call para usar el metodo persona1.nombrecompleto
//con los datos de persona2

console.log(persona1.nombreCompleto("estudiante", "11223344"));

//apply y call son muy similares, la unica diferencia es la forma de pasar los argumentos
//con el metodo apply se pasan los valores por un array
//puede ser por una varaible o ponerlo directamente en la llamada

//pasar valores mediante variable
let array1 = ["ingeniero", "12345678"];
console.log(persona1.nombreCompleto.apply(persona2, array1));

//escribir el array directamente
console.log(persona1.nombreCompleto.apply(persona2, ["maestro", "12345678"]));
