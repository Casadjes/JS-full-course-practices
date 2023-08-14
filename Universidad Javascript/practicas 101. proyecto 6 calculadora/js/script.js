/* escucha cuando se carga el documento */
window.addEventListener("load", () => {
	const display = document.querySelector(".calculator_display");
	const keypadButtons = document.getElementsByClassName("keypad-button");

	/* creamos una constante para convertir el HTMLCollection a aArray
  y poder iterarlo */
	const keypadButtonsArray = Array.from(keypadButtons);
	/* iteramos el Array */
	keypadButtonsArray.forEach((button) => {
		/* a cada bodton le agregamos un listener */
		button.addEventListener("click", () => {
			calculadora(button, display);
		});
	});
});

function calculadora(button, display) {
	switch (button.innerHTML) {
		case "C":
			borrar(display);
			break;

		case "=":
			calcular(display);
			break;

		default:
			actualizar(display, button);
			break;
	}
}

function calcular(display) {
	/* tomar el string, resolverlo y guardarlo en el
  innerHTML del display */
	display.innerHTML = eval(display.innerHTML);
}

function actualizar(display, button) {
	if (display.innerHTML == 0) {
		display.innerHTML = "";
	}
	display.innerHTML += button.innerHTML;
}

function borrar(display) {
	display.innerHTML = 0;
}
