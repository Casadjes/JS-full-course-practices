class Persona {
	constructor(nombre, apellido) {
		this.nombre = nombre;
		this.apellido = apellido;
	}
}
Persona.prototype.tel = "123123";

let persona1 = new Persona("juan", "perez");
console.log(persona1);

let persona2 = new Persona("carlos", "lara");
console.log(persona2);
