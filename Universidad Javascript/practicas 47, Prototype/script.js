//funcion constructor de objetos de tipo persona
function Persona(nombre, apellido, email) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.email = email;
  this.nombreCompleto = function () {
    return this.nombre + " " + this.apellido;
  };
}

/* la propiedad prototype se usa para agregar una nueva propiedad
para todos los obejtos creados*/

Persona.prototype.tel = "11223344";

let padre = new Persona("lucas", "Maldonado", "lucasM82@gmail.com");
//modificar valor default
padre.tel = "44332211";
console.log(padre.tel);

let madre = new Persona("Lolo", "Ponzio", "lolopo@gmail.com");
//valor sin modificar
console.log(madre.tel);

//----------------------- practica ----------------

//utiliza el metodo construnctor para escribir 3 objetos y usa la propiedad prototype para agregar un valor más

function Information(name, lastname, eyescolor) {
  this.name = name;
  this.lastname = lastname;
  this.eyescolor = eyescolor;
}

Information.prototype.hair = "black";

let firstPerson = new Information("alex", "mendoza", "green");
console.log(firstPerson);
console.log(firstPerson.hair);

let secondPerson = new Information("Jana", "Vives", "brown");
console.log(secondPerson);
console.log(secondPerson.hair);
secondPerson.hair = "pink";
console.log(secondPerson.hair);
