class Disco {
	static idCanciones = 0;

	constructor(artista, nombreCancion, ano) {
		this._artista = artista;
		this._nombreCancion = nombreCancion;
		this._ano = ano;
		this.idCancion = ++Disco.idCanciones;
	}
}

let disco1 = new Disco("devgativo", "el mas rabioso del condando", 1999);
console.log(disco1);

let disco2 = new Disco("Nahuel", "el viola puercas", 2005);
console.log(disco2);
