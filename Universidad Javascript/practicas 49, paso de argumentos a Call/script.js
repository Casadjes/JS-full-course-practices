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

console.log(persona1.nombreCompleto("Licenciado", "11223344"));

console.log(persona1.nombreCompleto.call(persona2, "Estudiante", "902020292"));
