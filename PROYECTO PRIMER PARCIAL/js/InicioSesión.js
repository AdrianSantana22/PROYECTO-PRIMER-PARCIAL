function Validar(){
    var correo = document.getElementById("email").value;
    var password=document.getElementById("password").value;

    if(correo=="" && password==""){
        alert("Por favor llene todos los campos");

    }
    if (correo=="email" && password=="password"){
        alert("Ingreso exitosamente");
        
    }
    window.location="PaginaWeb.html";
}
