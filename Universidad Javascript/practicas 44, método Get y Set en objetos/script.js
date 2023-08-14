let persona = {
  nombre: "jesus",
  apellido: "casado",
  email: "jesus@gmail.com",
  edad: 18,
  idioma: "es",
  get lang(){
    return this.idioma.toUpperCase();
  },
  set lang(lang){
    this.idioma = lang.toUpperCase();
  },
  get nombreCompleto(){
    return this.nombre + " " + this.apellido;
  }
}

//set se utiliza para modificar los valores de los atributos de nuestro objeto
console.log(persona.lang);

persona.lang = "en";
console.log(persona.idioma);