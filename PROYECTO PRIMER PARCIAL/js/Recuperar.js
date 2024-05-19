function validarCorreo(correo) {
    const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return correoRegex.test(correo);
  }
  
  function Recupera() {
    const correo = document.getElementById("email").value;
  
    if (validarCorreo(correo)) {
      alert("Correo válido. Formulario enviado.");
      // Aquí puede agregar su lógica para enviar el formulario
    } else {
        alert("Correo no válido. Por favor, ingrese un correo válido.");
    }
    window.location="PaginaWeb.html";
  }
  