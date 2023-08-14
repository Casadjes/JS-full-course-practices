//toString nos permite mandar a imprimir informacion del estado del objeto,es decir los valores actuales de cada uno de los objetos

class Persona {
	//atributo estatico | es un atributo de nuestra clase
	static contadorPersonas = 0;

	static get MAX_OBJ() {
		return 5;
	}

	constructor(nombre, apellido) {
		this._nombre = nombre;
		this._apellido = apellido;
		if (Persona.contadorPersonas < Persona.MAX_OBJ) {
			this.idPersona = ++Persona.contadorPersonas;
		} else {
			console.log("se han superado el maximo de objetos permitido");
		}
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
		return this.idPersona + " " + this.nombreCompleto();
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
console.log(persona1.toString());

let empleado1 = new Empleado("Maria", "Jimenez", "Sistemas");
console.log(empleado1.toString());

let persona2 = new Persona("Karla", "Ramirez");
console.log(persona2.toString());

let persona3 = new Persona("mariano", "lara");
console.log(persona3.toString());
let perosna4 = new Persona("armando", "toledo");
console.log(perosna4.toString());

let persona5 = new Persona("laura", "quintero");
//id indefinido ya que no esta asignado, porque el maximo es 5
console.log(persona5.toString());
