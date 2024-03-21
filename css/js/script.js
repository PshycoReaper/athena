
function Mostrar(event) {
    var contenedorAnonimo = event.target.nextElementSibling;
    if (contenedorAnonimo.style.display === "block") {
        contenedorAnonimo.style.display = "none";
    } else {
        contenedorAnonimo.style.display = "block";
    }
}

function Abrircerrar(event) {
    var menu = document.getElementById("menu");
    var aparece= document.querySelector(".objects")
    if (menu.classList.contains("menu")) {
        menu.classList.remove("menu");
        menu.classList.add("close");
    } else {
        menu.classList.remove("close");
        menu.classList.add("menu");
    }

    if(aparece.style.display==="block"){
        aparece.style.display="none";
    }else{
        aparece.style.display="block";
    }
}
function abrirHTML() {
    var contenido = document.getElementById('nombre').value;

      // Verificar si el campo está vacío
      if (contenido.trim() === '') {
        alert('Por favor, ingrese contenido antes de continuar.');
      } else {
        // Si el campo no está vacío, abrir el otro HTML
        window.location.href = 'Confirmacion.html'; // Cambia 'otro.html' por la ruta del HTML que deseas abrir
      }
  }