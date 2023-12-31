class Persona {
  static contadorPersonas = 0;

  constructor(nombre, apellido, edad) {
    this._idPersona = ++Persona.contadorPersonas;
    this._nombre = nombre;
    this._apellido = apellido;
    this._edad = edad;
  }

  get idPersona() {
    return this._idPersona;
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(nombre) {
    this._nombre = nombre;
  }

  get apellido() {
    return this._apellido;
  }

  set apellido(apellido) {
    this._apellido = apellido;
  }

  get edad() {
    return this._edad;
  }

  set edad(edad) {
    this._edad = edad;
  }

  toString() {
    return (
      this._idPersona +
      "- " +
      this._nombre +
      " " +
      this._apellido +
      " " +
      this._edad
    );
  }
}

class Empleado extends Persona {
  constructor(nombre, apellido, edad, sueldo) {
    super(nombre, apellido, edad);
    this._idEmpleado = Persona.contadorPersonas;
    this._sueldo = sueldo;
  }

  get idEmpleado() {
    return this._idEmpleado;
  }

  get sueldo() {
    return this._sueldo;
  }

  set sueldo(sueldo) {
    this._sueldo = sueldo;
  }

  //modificando metodo toString
  toString() {
    return super.toString() + " " + this._sueldo;
  }
}

class Cliente extends Persona {
  constructor(nombre, apellido, edad, fechaRegistro) {
    super(nombre, apellido, edad);
    this._idCliente = Persona.contadorPersonas;
    this._fechaRegistro = fechaRegistro;
  }
  get idCliente() {
    return this._idCliente;
  }
  get fechaRegistro() {
    return this._fechaRegistro;
  }

  set fechaRegistro(fechaRegistro) {
    this._fechaRegistro = fechaRegistro;
  }

  toString() {
    return super.toString() + this._fechaRegistro;
  }
}

let persona1 = new Persona("juan", "araujo", 19);
console.log(persona1.toString());

let empleado1 = new Empleado("lucas", "lumierre", 22, 500);
console.log(empleado1.toString());

let cliente1 = new Cliente("pedro", "navaja", 46, new Date());
console.log(cliente1.toString());
