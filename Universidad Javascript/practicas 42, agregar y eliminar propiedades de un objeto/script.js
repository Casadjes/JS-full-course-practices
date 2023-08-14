let persona = {
  nombre: "jesus",
  apellido: "casado",
  email: "jesus@gmail.com",
  edad: 18,
};

//agregar nuevas propiedades

persona.tel = "53243235";
//modificar el valor de una propiedad
persona.tel = "96048484";
console.log(persona);

//eliminar una propiedad existente

delete persona.tel;
console.log(persona);

//------------------practicas--------------------

//crea un objeto y agregale una propiedad, luego eliminala y imprimelo por consola

let objeto = {
  primera: "uno",
  segunda: "dos",
  tercera: "tres",
  cuarta: "cuatro",
};

objeto.quinta = "cinco";
console.log(objeto);

delete objeto.quinta;
console.log(objeto);
