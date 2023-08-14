const personas = [
  new Persona("Jesus", "Casado"),
  new Persona("Karla", "Lara")
];

function mostrarPersonas() {
  let texto = "";
  for (let persona of personas) {
    console.log(persona);
    texto += `<li>${persona.nombre} ${persona.apellido}</li>`
  }
  document.getElementById("personas").innerHTML = texto;
}

function agregarPersona() {
  const formulario = document.forms["form"];
  const nombre = formulario["nombre"];
  const apellido = formulario["apellido"];

  if (nombre.value != "" && apellido.value != "") {

    const persona = new Persona(nombre.value, apellido.value);
    console.log(persona);
    personas.push(persona);
    mostrarPersonas();
  } else {
    console.log("no hay informacion agragada");
  }

}