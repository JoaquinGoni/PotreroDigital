function info(){alert("Nombre: Joaquin Goñi \nE-mail:jokgoni@gmail.com")}

const cambioColor = document.getElementById("cambioColor");


cambioColor.addEventListener("click", function () {
   
    document.body.classList.toggle("modonocturno");
});