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
  get apellido() {
    return this._apellido;
  }

  set apellido(apellido) {
    this._apellido = apellido;
  }
}

class Empleado extends Persona {
  constructor(nombre, apellido, departamento) {
    //lamar al constructor de la clase padre
    super(nombre, apellido);
    this._departamento = departamento;
  }
  get departamento() {
    return this._departamento;
  }

  set departamento(departamento) {
    this._departamento = departamento;
  }
}

let persona1 = new Persona("Jesus", "casado");
console.log(persona1);

let empleado1 = new Empleado("Maria", "Jimenez", "Sistemas");
console.log(empleado1);

//------------practicas----------------

//crear una clase que contenga un objeto con valores de un vehiculo, luego haz una clase hija que herede los metodos y atributos y modifica sus valores

class Vehicles {
  constructor(año, marca) {
    this._año = año;
    this._marca = marca;
  }

  get año() {
    return this._año;
  }

  set(año) {
    this._año = año;
  }

  get marca() {
    return this._marca;
  }

  set(marca) {
    this._marca = marca;
  }
}

let firstVehicle = new Vehicles("2005", "Toyota");
console.log(firstVehicle);

class VehiclesColor extends Vehicles {
  constructor(año, marca, color) {
    super(año, marca);
    this._color = color;
  }

  get color() {
    return this._color;
  }

  set(color) {
    this._color = color;
  }
}

let firstVehicleColor = new VehiclesColor("1990", "Nissan", "Skyblue");
console.log(firstVehicleColor);

// crear una clase y utilizando el método constructor crea un objeto que contenga valores sobre cargos de una escuela, tambien crea una clase hija que heredelos atributos y metodos y cambia los valoes a tu gusto.

class Cargos {
  constructor(director, sub_director, supervisor) {
    this._director = director;
    this._sub_director = sub_director;
    this._supervisor = supervisor;
  }

  get director() {
    return this._director;
  }

  set(director) {
    this._director = director;
  }
  get sub_director() {
    return this._sub_director;
  }

  set(sub_director) {
    this._sub_director = sub_director;
  }
  get supervisor() {
    return this._supervisor;
  }

  set(supervisor) {
    this._supervisor = supervisor;
  }
}

let cargosDeEscuela = new Cargos("Lucas", "Juan", "Pedro");
console.log(cargosDeEscuela);

class OtrosCargos extends Cargos {
  constructor(director, sub_director, supervisor, psicologa, maestra) {
    super(director, sub_director, supervisor);
    this._psicologa = psicologa;
    this._maestra = maestra;
  }
  get psicologa() {
    return this._psicologa;
  }

  set(psicologa) {
    this._psicologa = psicologa;
  }

  get maestra() {
    return this._maestra;
  }

  set(maestra) {
    this._maestra = maestra;
  }
}

let cargosDeEscuela2 = new OtrosCargos(
  "Carlos",
  "Bryan",
  "Pedro",
  "Emely",
  "Esmeralda"
);
console.log(cargosDeEscuela2);

//Definir un metodo en la clase padre para usarlo en la clase hija

class Test {
  constructor(ask, answer) {
    this._ask = ask;
    this._answer = answer;
  }

  allThings() {
    return this._ask + " " + this._answer;
  }
}

let firstTest = new Test("primera", "segunda");
console.log(firstTest);

class TestChild extends Test {
  constructor(ask, answer, other) {
    super(ask, answer);
    this._other = other;
  }
}

let secondTest = new TestChild("uno", "dos", "otro");
console.log(secondTest);
//accediendo al metodo
console.log(secondTest.allThings());
