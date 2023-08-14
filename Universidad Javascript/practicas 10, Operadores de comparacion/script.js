let a = 3,
  b = 2,
  c = "3";

//operador igual
let z = a == b; // se revisa el valor sin importar el tipo
console.log(z);

// operador estrictamente igual

z = a === c; // revisa los valores pero tambien los tipos
console.log(z);

//operador distinto a
z = a != c; // se revisa el valor sin importar el tipo
console.log(z);

//operador estrictamente distinto a
z = a !== c; // revisa los valores pero tambien los tipos
console.log(z);
