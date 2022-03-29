let panel = document.querySelector("div");
let hambuguesa = document.querySelector(".hamburguer");

function animacion_slide_toggle()
{
    panel.classList.toggle("toggled");
}

hambuguesa.addEventListener("click", animacion_slide_toggle);