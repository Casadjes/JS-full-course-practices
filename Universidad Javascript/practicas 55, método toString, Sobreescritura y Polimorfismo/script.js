//toString nos permite mandar a imprimir informacion del estado del objeto,es decir los valores actuales de cada uno de los objetos

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

  nombreCompleto() {
    return this._nombre + " " + this._apellido;
  }
  //sobreescribiendo el metodo de la clase padre (Object)
  toString() {
    //se aplica polimorfismo(multiples formas en tiempo de ejecucion)
    //el metodo que se ejecuta depende si es una referencia tipo padre o de tipo hijo
    return this.nombreCompleto();
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

  nombreCompleto() {
    return super.nombreCompleto() + ", " + this._departamento;
  }
}

let persona1 = new Persona("Jesus", "casado");
console.log(persona1);

let empleado1 = new Empleado("Maria", "Jimenez", "Sistemas");
console.log(empleado1);
console.log(empleado1.nombreCompleto());

console.log(empleado1.toString());
