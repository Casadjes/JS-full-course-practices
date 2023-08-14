//definir un objeto

let persona = {
  nombre: "Jesus",
  apellido: "Casado",
  email: "jcasd@gmail.com",
  edad: 18,
  nombreCompleto: function () {
    //this se usa para acceder a las propiedades del objeto desde dentro
    return this.nombre + " " + this.apellido;
  },
};

//llamando a la funcion
console.log(persona.nombreCompleto());

//acceder a las propiedades del objeto desde afuerr

console.log(persona.apellido);
console.log(persona.nombre);
console.log(persona.edad);

//imprimir todo el objeto

console.log(persona);

/* ----------------------- practicas ------------------------ */

// crea un objeto que contenga los siguientes valores: raza, tamaño, color, y usa el metodo get para concatenar todos los valores

const razaPerro = {
  raza: "pitbull",
  tamaño: "mediano",
  color: "mixto",
  get especificaciones() {
    return this.raza + " " + this.tamaño + " " + this.color;
  },
};

console.log(razaPerro);
console.log(razaPerro.especificaciones);

//crea un objeto que contenga 3 valores y accede a cada uno de ellos mediante console.log

const accederPorConsola = {
  libro1: "El señor de los anillos",
  libro2: "El arte de la guerra",
  libro3: "Plusivo",
};

console.log(accederPorConsola.libro1);
console.log(accederPorConsola.libro2);
console.log(accederPorConsola.libro3);
