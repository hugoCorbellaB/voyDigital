const secciones = document.querySelectorAll('section');

const opciones = {
    threshold: 0.5
}

let observador = new IntersectionObserver(verificadorDeNavegacion, opciones);

function verificadorDeNavegacion(registros) {
    registros.forEach(registro => {
        const nombreDeLaClase = registro.target.className;
        const anclajeActivo = document.querySelector(`[data-page=${nombreDeLaClase}]`);

        if(registro.isIntersecting) {
            anclajeActivo.classList.add('seccionVisualizada');
        }

        else {
            anclajeActivo.classList.remove('seccionVisualizada');
        }
    });
}

secciones.forEach(seccion => {
    observador.observe(seccion);
});