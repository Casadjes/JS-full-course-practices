/* son funciones que se llaman a sí misma, tambien es una
funcion anonima pero que se puede llamar a si misma*/

(function (a, b) {
  console.log("ejecutando la function: " + (a + b));
})(3, 4);
