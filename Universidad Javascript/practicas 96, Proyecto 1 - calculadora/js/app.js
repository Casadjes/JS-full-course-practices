function sumar() {
	let formulario = document.getElementById("form");
	let operandoA = formulario["operandoA"];
	let operandoB = formulario["operandoB"];

	let resultado = parseInt(operandoA.value) + parseInt(operandoB.value);
	if (isNaN(resultado)) {
		resultado = "La operación no incluye numeros";
	}
	document.getElementById("resultado").innerHTML = `Resultado: ${resultado}`;
	console.log(resultado);
}
