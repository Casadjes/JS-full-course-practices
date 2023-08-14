let persona = {
  nombre: "jesus",
  apellido: "casado",
  email: "jesus@gmail.com",
  edad: 18,
};

//concatenar cada valor de cada propiedad
console.log(persona.nombre + ", " + persona.apellido);

//usando for in
for (nombrePropiedad in persona) {
  console.log(persona[nombrePropiedad]);
}

//usando sintaxtis Obejct.values que devuelve el objeto como array
let personaArray = Object.values(persona);
console.log(personaArray);

// usar metodo JSON.stringify
let personaString = JSON.stringify(persona);
console.log(personaString);

//----------------------practicas----------------------

//crea un object que contenga datos de un vehiculo y imprime sus datos con la sintaxis values

const vehicles = {
  marca: "toyota",
  año: 1998,
  color: "rojo",
};

let resultadoVehiculo = Object.values(vehicles);
console.log(resultadoVehiculo);
