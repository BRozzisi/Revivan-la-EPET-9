window.onscroll = function() {scrollFunction()};
let offcanvasActive = window.innerWidth  // Medimos el ancho del viewport

function scrollFunction() {
  // Todo esto sucederá si scrolleamos mientras que el ancho de la pantalla sea mayor a 
  if ((document.body.scrollTop > 0 || document.documentElement.scrollTop > 0)  && offcanvasActive > 992) {
    document.getElementById("navegacion-scroll").style.padding = "30px 10px";
    document.getElementById("logo-navbar").style.height = "50px";
    document.getElementById("logo-navbar").style.justifyContent = "center";
    document.getElementById("offcanvas-scroll").style.display = "none";
    document.getElementById("logo-navbar-header").style.fontSize = "1rem"
  } else if ((document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) && offcanvasActive < 992) {
    document.getElementById("navegacion-scroll").style.padding = "10px 10px";
    document.getElementById("logo-navbar").style.height = "50px";
  } else if (offcanvasActive < 992) {
    document.getElementById("navegacion-scroll").style.padding = "10px 10px";
    document.getElementById("logo-navbar").style.height = "50px";
    document.getElementById("logo-navbar").style.justifyContent = "center";
    document.getElementById("logo-navbar-header").style.fontSize = "1rem"
  } else {
    document.getElementById("navegacion-scroll").style.padding = "80px 10px";
    document.getElementById("logo-navbar").style.height = "90px";
    document.getElementById("offcanvas-scroll").style.display = "flex"
    document.getElementById("logo-navbar-header").style.fontSize = "1em"
  }
}