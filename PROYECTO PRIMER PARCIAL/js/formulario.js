const formulario = document.querySelector('formulario');
const expresiones={
	username: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	celu: /^\d{7,14}$/, // 7 a 14 numeros.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  carrera: /^[a-zA-Z0-9],/// Letras, numeros, guion y guion_bajo
   
}
const campos = {
	usuario: false,
	telefono: false,
	password: false,
	correo: false,
  carrera: false,
}

function Registro() {


    // Obtenemos los valores ingresados en los campos de nombre de usuario, telefono, contraseña y correo
    const username = document.getElementById("username").value;
    const celu = document.getElementById("cel").value;
    const password = document.getElementById("password").value;
    const correo = document.getElementById("email").value;
    const carrera=document.getElementById("carre").value;
    const nivel=document.getElementById("nivel").value;
    const tipo_vivienda=document.getElementById("tipo_vivienda").value;
    const num_personas=document.getElementById("num_personas").value;

    // Comprobamos si los campos están vacíos

    if (username === "" || password === "" || celu==="" || correo==="" || carrera==="" ||  nivel==="" || tipo_vivienda==="" || num_personas==="" ) {
      document.getElementById("error-message").innerHTML = "Por favor, complete todos los campos";
      alert("Complete todos los campos");
      return false;
    }else
    alert("Registro de sesión exitoso");
	  window.location="PaginaWeb.html";
    
  }