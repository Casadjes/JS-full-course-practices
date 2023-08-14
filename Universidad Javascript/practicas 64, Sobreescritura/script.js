class Empleado {
  constructor(nombre, sueldo) {
    this.nombre = nombre;
    this.sueldo = sueldo;
  }

  obtenerDetalles() {
    return `nombre: ${this.nombre} sueldo: ${this.sueldo}`;
  }
}

class Gerente extends Empleado {
  constructor(nombre, sueldo, departamento) {
    super(nombre, sueldo);
    this.departamento = departamento;
  }

  obtenerDetalles() {
    return `Gerente: ${super.obtenerDetalles()} depto: ${this.departamento}`;
  }
}

let empleado1 = new Empleado("juan", 3000);
console.log(empleado1.obtenerDetalles());
let gerente1 = new Gerente("Carlos", 5000, "sistemas");
console.log(gerente1.obtenerDetalles());
