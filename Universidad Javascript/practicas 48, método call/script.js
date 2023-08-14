let persona1 = {
  nombre: "juan",
  apellido: "perez",
  nombreCompleto: function () {
    return this.nombre + " " + this.apellido;
  },
};

let persona2 = {
  nombre: "carlos",
  apellido: "lara",
};

//uso de call para usar el metodo persona1.nombrecompleto
//con los datos de persona2

console.log(persona1.nombreCompleto());

console.log(persona1.nombreCompleto.call(persona2));

//--------------practica-----------------

//crea un object que contenga una funcion que concatene los dos primeros valores de tu object y crea otro object sin la funcion
// llama a la funcion con el metodo call

let firstPerson = {
  name: "lucas",
  lastName: "Perl",
  concatenar: function () {
    return this.name + " " + this.lastName;
  },
};

let secondPerson = {
  name: "juan",
  lastName: "Casas",
};

console.log(firstPerson);
console.log(firstPerson.concatenar());

console.log(secondPerson);
console.log(firstPerson.concatenar.call(secondPerson));
