let a = 3,
  b = 2,
  c = 1,
  d = 4;

/*

3 * 2 = 6
1 / 4 = 0.25
6 + 0.25 = 6.25

*/
let z = a * b + c / d;
console.log(z);

// 3 * 2 = 6 / 4 = 1.5 + 1 = 2.5
z = c + (a * b) / d;
console.log(z);

//podemos modificar el orden de precedencia agregando un parentesis ()

z = ((c + a) * b) / c;
console.log(z);
