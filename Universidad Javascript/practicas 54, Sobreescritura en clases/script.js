class Persona {
  constructor(nombre, apellido) {
    this._nombre = nombre;
    this._apellido = apellido;
  }

  nombreCompleto() {
    return this._nombre + " " + this._apellido;
  }
}

let persona1 = new Persona("Abraham", "Lumiere");
console.log(persona1);
console.log(persona1.nombreCompleto());

class Empleada extends Persona {
  constructor(nombre, apellido, departammento) {
    super(nombre, apellido);
    this._departammento = departammento;
  }
  //sobreescritura 1 forma
  nombreCompleto() {
    return this._nombre + " " + this._apellido + ", " + this._departammento;
  }

  //sobrescritura 2 forma

  // nombreCompleto(){
  //  return super.nombreCompleto() + ", " + this._departammento;
  // }
}

let persona2 = new Empleada("Emely", "Feliz", "Sistemas");
console.log(persona2);
console.log(persona2.nombreCompleto());
