document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.button');
    const nav = document.querySelector('.nav');
    const main = document.querySelector('.main');
    const header = document.querySelector('.header');
    const section = document.querySelector('.section');
    const svg = document.querySelector('.svg');
    const footer = document.querySelector('.footer');
    const slidercont = document.querySelector('#slidercont');

    button.addEventListener('click', () => {
        if (header) {
            
            section.classList.toggle('activo');
            nav.classList.toggle('activo');
            main.classList.toggle('activo');
            header.classList.toggle('activo');
            svg.classList.toggle('activo');
            footer.classList.toggle('activo');
            toggleImage(); // Llama a la función para alternar la imagen del botón
        }
    });
    function toggleImage() {
        var menuIcon = document.getElementById("menuIcon");
    
        if (menuIcon.src.endsWith("bars-solid.svg")) {
            menuIcon.src = "img/x-solid.svg"; // Cambia a la otra imagen
        } else {
            menuIcon.src = "img/bars-solid.svg"; // Cambia de nuevo a la imagen original
        }
    }
});

