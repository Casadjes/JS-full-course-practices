//el paso por valor es cuando utlizamos tipos que no son objetos

//Tipos Primitivos
let x = 10;

/* ya que es un valor primitivo no es posible cambiar su valor
mediante el metodo */
function cambiarValor(a) {
  a = 20;
}
cambiarValor(x);
console.log(x);
console.log(a);
