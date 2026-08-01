// Animación suave al hacer scroll
document.addEventListener("DOMContentLoaded", function() {
    const elementos = document.querySelectorAll('.fade-in');

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.15
        });

        elementos.forEach(elemento => {
            observer.observe(elemento);
        });
    } else {
        // En caso de que el navegador no soporte IntersectionObserver
        elementos.forEach(elemento => {
            elemento.classList.add('visible');
        });
    }

    console.log("¡Script cargado correctamente para la página de Nathaly!");
});