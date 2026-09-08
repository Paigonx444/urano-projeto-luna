document.addEventListener("DOMContentLoaded", function () {

    const titulo = document.querySelector("h1");

    if (titulo) {
        console.log("Página carregada: " + titulo.textContent);
    }

});