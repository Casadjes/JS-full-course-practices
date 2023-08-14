function modify(array, callback) {
	//hacemos algo
	array.push("midu");
	//despues de hacer algo...
	setTimeout(function () {
		callback(array);
	}, 3000);
}

const names = ["gartiel", "vedazquies", "tomimelo"];

modify(names, function (array) {
	console.log(
		`he modificado el array y ahora es de :${array.length} elementos`
	);
});

// otro callback

function cuadradoCallback(value, call_back) {
	setTimeout(() => {
		call_back(value, value * value);
	}, 0 | (Math.random() * 100));
}

cuadradoCallback(0, (value, result) => {
	console.log("inicia call_back");
	console.log(`callback: ${value}, ${result} `);
});

// otro callback
function callback() {
	console.log("soy un callback");
}

function mensaje(fn) {
	fn();
}

mensaje(callback);

//cuando utilizar un callback

function miFuncion1(fn) {
	setTimeout(function () {
		console.log("mensaje1");
		fn();
	}, 5000);
}

function miFuncion2() {
	console.log("mensaje2");
}

miFuncion1(miFuncion2);
