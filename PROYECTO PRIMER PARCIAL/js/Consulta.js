function consultarBeca() {
    var input, filter, table, tbody, tr, td, i, txtValue;
    input = document.getElementById("id_beca");
    filter = input.value.toUpperCase();
    table = document.getElementById("tabla_beca");
    tbody = table.getElementsByTagName("tbody")[0];
    tr = tbody.getElementsByTagName("tr");
  
    // Iterar sobre cada fila de la tabla y ocultar aquellas que no contienen el ID de beca buscado
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase() === filter) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }
  
  function Regresar() {
    window.location="PaginaWeb.html";
    }
  