//toString nos permite mandar a imprimir informacion del estado del objeto,es decir los valores actuales de cada uno de los objetos

class Persona {
  //atributo estatico | es un atributo de nuestra clase
  static contadorObjetosPersona = 0;
  //atributo no estatico | es un atributo de nuestro objeto
  email = "valor default email";
  constructor(nombre, apellido) {
    this._nombre = nombre;
    this._apellido = apellido;
    Persona.contadorObjetosPersona++;
    console.log("se incrementa contador:" + Persona.contadorObjetosPersona);
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

  static saludar() {
    console.log("saludos desde metodo static");
  }
  //metodo estatico que tiene un objeto como argumento
  static saludar2(persona) {
    console.log(persona.nombre + " " + persona.apellido);
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

//persona1.saludar(); nos es posible llamar un metodo static desde un objeto
Persona.saludar();
Persona.saludar2(persona1);

Empleado.saludar();
Empleado.saludar2(empleado1);

console.log(Persona.contadorObjetosPersona);
console.log(Empleado.contadorObjetosPersona);

//accediendo por medio de objeto al atributo email
console.log(persona1.email);
console.log(empleado1.email);
//se crea un atributo static que no es el que creamos anteriormente
console.log(Persona.email);
console.log(Empleado.email);
