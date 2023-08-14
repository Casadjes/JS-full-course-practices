let autos = ["bmw", "mercedes benz", "volvo"];
console.log(autos);
//modificar elementos de un array
autos[1] = "Audi TT";
console.log(autos);

//usar metodo push para agregar un elemento al array
//push agrega un elemento al final de un array

autos.push("Toyota Corolla");
console.log(autos);

//agregar elemento a un arreglo mediante length sin dejar indices vacios
console.log(autos.length);
autos[autos.length] = "cadillac";
console.log(autos);

//dejar huecos en arreglos (no es recomendable);

autos[6] = "porsche";
console.log(autos);
