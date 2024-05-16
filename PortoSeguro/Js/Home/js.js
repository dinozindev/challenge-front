const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showNextSlide() {
    slides[currentSlide].style.opacity = 0;
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].style.opacity = 1;
}

setInterval(showNextSlide, 5000); // Altera o slide a cada 2 segundos





const textos = document.querySelectorAll('.paragrafo');
let indice = 0;

function mudatexto() {
    textos[indice].style.opacity = 0;
    indice = (indice + 1) % slides.length;
    textos[indice].style.opacity = 1;
}

setInterval(mudatexto, 5000); // Altera o slide a cada 2 segundos