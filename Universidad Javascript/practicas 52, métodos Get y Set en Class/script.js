//El hoisting no funciona con las clases
let persona2 = new Persona("juan", "asafran");
//da error

class Persona {
  constructor(nombre, apellido) {
    this._nombre = nombre;
    this._apellido = apellido;
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(nombre) {
    this._nombre = nombre;
  }
}

let persona1 = new Persona("Jesus", "casado");
persona1.nombre = "Jesus Esmil";
console.log(persona1.nombre);
