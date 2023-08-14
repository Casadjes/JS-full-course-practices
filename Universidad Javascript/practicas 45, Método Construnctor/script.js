/* el metodo constructor se usa para crear muchos obejtos
rapidamente (es una funcion) para mandar a llamar la funcion
se usa la palabra reservada New para reservar  espacio
en la memoria del objeto que vamos a crear

se recomienda que los nombres de los metodos constructor
comiencen con mayuscula */

//funcion constructor de objetos de tipo persona
function Persona(nombre, apellido, email) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.email = email;
  this.nombreCompleto = function () {
    return this.nombre + " " + this.apellido;
  };
}

let padre = new Persona("lucas", "Maldonado", "lucasM82@gmail.com");
console.log(padre);
/* llamar la funcion */
console.log(padre.nombreCompleto());

let madre = new Persona("Lolo", "Ponzio", "lolopo@gmail.com");
console.log(madre);

/* modificar valores */

padre.nombre = "Tyler";
console.log(padre);

// -------------------------------- practicas ----------------------------

function PaginaWeb(header, body, footer) {
  this.header = header;
  this.body = body;
  this.footer = footer;
  this.paginaCompleta = function () {
    return this.header + " " + this.body + " " + this.footer;
  };
}

let pagina1 = new PaginaWeb("header azul", "body gris", "footer verde");
console.log(pagina1);
console.log(pagina1.paginaCompleta());

pagina1.footer = "azul";
console.log(pagina1);

let pagina2 = new PaginaWeb("rojo", "naranja", "azul");
console.log(pagina2);
