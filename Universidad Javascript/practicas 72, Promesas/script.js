let miPromesa = new Promise((resolved, rejected) => {
	let expresion = true;
	if (expresion) resolved("Resolvió correcto");
	else rejected("se produjo un error");
});

// miPromesa.then(
//   (valor) => console.log(valor),
//   (error) => console.log(error)
// );

//usando catch

// miPromesa
// 	.then((valor) => console.log(valor))
// 	.catch((error) => console.log(error));

// promesas usando setTimeout

let promesa = new Promise((resolver) => {
	// console.log("inicio promesa");
	setTimeout(() => resolver("saludos con promesa y timeout"), 3000);
	// console.log("fin promesa");
});

// promesa.then((valor) => console.log(valor));

// palabra async con promesas
// async significa que una funcion regresa una promesa

async function miFuncionConPromesa() {
	return "saludos con promesa y async";
}

miFuncionConPromesa().then((valor) => console.log(valor));

// await y async

async function funcionConAsync_Await() {
	let miPromesa = new Promise((resolver) => {
		resolver("promesa con await");
	});

	console.log(await miPromesa);
}

// funcionConAsync_Await();

// promesas, await, async, y setTimeout

async function miFuncionConPromesaAwait_AsyncYsetTimeout() {
	let miPromesa = new Promise((resolver) => {
		setTimeout(() => resolver("promesa con await y timeout"), 3000);
	});

	console.log(await miPromesa);
}

miFuncionConPromesaAwait_AsyncYsetTimeout();
