let promesa = new Promise((resolved) => {
  setTimeout(() => resolved("Saludos con promesa y timeout"), 3000);
});

promesa.then((valor) => console.log(valor));
