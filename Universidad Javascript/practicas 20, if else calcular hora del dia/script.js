/* calcular hora del dia */

/* 
mandar un mensaje dependiendo de la hora del dia

6am-11am - Buenos dias
12pm-18pm - Buenas Tardes
19pm-24pm - Buenas Noches
0am-6am - Durmiendo
*/

let hora = 1;
let resultado;

if (hora >= 6 && hora <= 11) {
  resultado = "Buenos dias";
} else if (hora >= 12 && hora <= 18) {
  resultado = "Buenas Tardes";
} else if (hora >= 19 && hora <= 24) {
  resultado = "Buenas Noches";
} else if (hora >= 0 && hora < 6) {
  resultado = "Durmiendo";
} else {
  resultado = "otro";
}
console.log(resultado);
