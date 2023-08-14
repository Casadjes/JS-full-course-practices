class DispositivoEntrada {
  constructor(tipoEntrada, marca) {
    this._tipoEntrada = tipoEntrada;
    this._marca = marca;
  }

  get tipoEntrada() {
    return this._tipoEntrada;
  }

  set tipoEntrada(tipoEntrada) {
    this._tipoEntrada = tipoEntrada;
  }

  get marca() {
    return this._marca;
  }

  set marca(marca) {
    this._marca = marca;
  }
}

let dispositivoEntrada1 = new DispositivoEntrada("USB", "Hp");
let dispositivoEntrada2 = new DispositivoEntrada("Bluetooth", "Ryzen");

class Raton extends DispositivoEntrada {
  static contadorRatones = 0;

  constructor(tipoEntrada, marca) {
    super(tipoEntrada, marca);
    this._idRaton = ++Raton.contadorRatones;
  }

  get idRaton() {
    return this._idRaton;
  }

  toString() {
    return `Raton: [idRaton: ${this._idRaton}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca} ]`;
  }
}

let raton1 = new Raton("USB", "Hp");
let raton2 = new Raton("Bluetooth", "Dell");
console.log(raton1.toString());
console.log(raton2.toString());

class Teclado extends DispositivoEntrada {
  static contadorTeclados = 0;

  constructor(tipoEntrada, marca) {
    super(tipoEntrada, marca);
    this._idTeclado = ++Teclado.contadorTeclados;
  }

  get idTeclado() {
    return this._idTeclado;
  }

  toString() {
    return `Teclado: [idTeclado: ${this._idTeclado}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca} ]`;
  }
}

let teclado1 = new Teclado("USB", "Msi");
let teclado2 = new Teclado("USB", "Acer");
console.log(teclado1.toString());
console.log(teclado2.toString());

class Monitor {
  static contadorMonitores = 0;

  constructor(marca, tamaño) {
    this._idMonitor = ++Monitor.contadorMonitores;
    this._marca = marca;
    this._tamaño = tamaño;
  }

  get idMonitor() {
    return this._idMonitor;
  }

  get marca() {
    return this._marca;
  }

  set marca(marca) {
    this.marca = marca;
  }

  get tamaño() {
    return this._tamaño;
  }

  set tamaño(tamaño) {
    this._tamaño = tamaño;
  }

  toString() {
    return `Monitor: [idMonitor: ${this._idMonitor}, marca: ${this._marca}, tamaño: ${this._tamaño}]`;
  }
}

let monitor1 = new Monitor("Hp", 15);
let monitor2 = new Monitor("Dell", 27);
console.log(monitor1.toString());
console.log(monitor2.toString());

class Computadora {
  static contadorComputadoras = 0;

  constructor(nombre, monitor, teclado, raton) {
    this._idComputadora = ++Computadora.contadorComputadoras;
    this._nombre = nombre;
    this._monitor = monitor;
    this._teclado = teclado;
    this._raton = raton;
  }

  toString() {
    return `Computadora ${this._idComputadora}: ${this._nombre} \n ${this._monitor} \n ${this._teclado} \n ${this._raton}`;
  }
}

let computadora1 = new Computadora("Hp", monitor1, teclado1, raton1);
console.log(`${computadora1}`);
let computadora2 = new Computadora("Armada", monitor2, raton2, teclado2);
console.log(`${computadora2}`);

class Orden {
  static contadorOrdenes = 0;

  constructor() {
    this._idOrden = ++Orden.contadorOrdenes;
    this._computadoras = [];
  }

  get idOrden() {
    return this._idOrden;
  }

  agregarComputadora(computadora) {
    this._computadoras.push(computadora);
  }

  mostarOrden() {
    let computadorasOrden = "";
    for (let computadora of this._computadoras) {
      computadorasOrden += `\n${computadora}`;
    }

    console.log(`Orden: ${this._idOrden}, Computadoras: ${computadorasOrden}`);
  }
}

let orden1 = new Orden();
orden1.agregarComputadora(computadora1);
orden1.agregarComputadora(computadora2);
orden1.mostarOrden();
