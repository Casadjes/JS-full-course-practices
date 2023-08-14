let autos = ["bmw", "audi", "cadillac"];

//usar Array.isArray para saber si es un array

console.log(Array.isArray(autos));

//otra forma de saber si es un Array

/*lo que se hace aqui es que el operador instanceof
pregunta que si la variable es una instacia,
luego se le añade el tipo array.

lo que formula la pregunta de que si es una instacia de
tipo array, la cual en este caso es true*/
console.log(autos instanceof Array);
