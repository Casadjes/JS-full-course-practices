let a = 1;
let valMin = 0,
  valMax = 10;

/* regresa true solo cuando ambas condiciones se cumplen*/
if (a >= valMin && a <= valMax) {
  console.log("dentro del rango");
} else {
  console.log("fuera del rango");
}

/* || OR, regresa true si cualquier operando es true  */
let vacaciones = true;
let diaDescanso = false;

if (vacaciones || diaDescanso) {
  console.log("padre puede asistir");
} else {
  console.log("no puede");
}
