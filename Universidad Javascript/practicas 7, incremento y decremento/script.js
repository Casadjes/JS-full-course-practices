let a = 3,
  b = 2;
let z = a + b;

//incremento
//pre-incremento (el operador ++ antes de la variable)
z = ++a;
//primero se incrementó el valor de (a) y luego se le asigno a la variable (z).
console.log(a);
console.log(z);

//post-incremento (el operador ++ despues de la variable)
z = b++;
//en este caso se asigna el valor de la variable (b) a (z) y posteriormente se incrementa.
console.log(z);
console.log(b);

//decremento
//pre-decremento

z = --a;
//se decrementa antes de asignarsele a (z)
console.log(a);
console.log(z);

//post-decremento

z = b--;
//se asigna su valor a (z) y posteriormente se decrementa la variable (b).
console.log(b);
console.log(z);
