let persona = {
  nombre: "Jesus",
  apellido: "Casado",
  email: "jcasd@gmail.com",
  edad: 18,
  nombreCompleto: function () {
    //this se usa para acceder al objeto desde dentro
    return this.nombre + " " + this.apellido;
  },
};

//formas de acceder a las propiedades de un objeto

console.log(persona.nombre);

// otra forma de acceder a las propiedades de un objeto
console.log(persona["edad"]);

// acceder con ciclo for in

for (nombrePropiedad in persona) {
  //aqui accedemos a los nombres de las propiedades del objeto
  console.log(nombrePropiedad);
  //aqui accedemos a los valores de cada una de las propiedades
  console.log(persona[nombrePropiedad]);
}

// ------------------------- practicas --------------------------

//crea un objeto que contenga 5 valores, luego accede a ellos mediante un ciclo for in y imprimelos en consola

const datos = {
  nombre: "Luna",
  apellido: "Polen",
  edad: 25,
  email: "luna98@gmail.com",
  tel: "11223344",
};

for (datosAgrupados in datos) {
  console.log(datosAgrupados);
  console.log(datos[datosAgrupados]);
}
