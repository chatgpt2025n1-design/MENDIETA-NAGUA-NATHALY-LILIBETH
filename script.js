// Función para crear un efecto de aparición suave al hacer scroll
document.addEventListener("DOMContentLoaded", function() {
    // Seleccionamos todas las tarjetas de temas
    const elementos = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Si la tarjeta entra en la pantalla, le añadimos la clase 'visible'
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.15 // Se activa cuando el 15% del elemento es visible
    });

    // Le decimos al observer que vigile cada tarjeta
    elementos.forEach(elemento => {
        observer.observe(elemento);
    });

    console.log("¡Script cargado! Animaciones de scroll activadas.");
});