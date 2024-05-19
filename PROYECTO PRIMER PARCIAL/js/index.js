function Ayuda() {
  var nombre = document.getElementById("nombre").value;
  var correo = document.getElementById("correo").value;
  var telefono = document.getElementById("telefono").value;
  var ciudad = document.getElementById("ciudad").value;
  var pais = document.getElementById("pais").value;
  var universidad = document.getElementById("universidad").value;
  var carrera = document.getElementById("carrera").value;
  var promedio = document.getElementById("promedio").value;
  var ingresos = document.getElementById("ingresos").value;
  var motivos = document.getElementById("motivos").value;
  var documentos = document.getElementsByName("documentos");
  
  var documentos_checked = false;
  for (var i = 0; i < documentos.length; i++) {
    if (documentos[i].checked) {
      documentos_checked = true;
      break;
    }
  }

  if (nombre == "" || correo == "" || telefono == "" || ciudad == "" || pais == "" || universidad == "" || carrera == "" || promedio == "" || ingresos == "" || motivos == "" || documentos_checked == false) {
    alert("Por favor, completa todos los campos.");
    return false;
  } else {
    alert("Formulario enviado exitosamente.");
    return true;
  }
  window.location="PaginaWeb.html";
}
