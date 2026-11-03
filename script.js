
// Mensaje de bienvenida en la consola
console.log("Bienvenido al proyecto SMART PARKING");

// Efecto de aparición de las tarjetas
const elementos = document.querySelectorAll(
    ".tarjeta, .paso, .objetivo-card, .miembro"
);

const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add("visible");
        }
    });
}, {
    threshold: 0.15
});

elementos.forEach((elemento) => {
    elemento.classList.add("animacion");
    observador.observe(elemento);
});

.animacion {
    opacity: 0;
    transform: translateY(25px);
    transition: opacity 0.7s ease, transform 0.7s ease;
}

.animacion.visible {
    opacity: 1;
    transform: translateY(0);
}
