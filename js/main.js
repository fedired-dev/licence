document.addEventListener('DOMContentLoaded', function() {
    // Función para copiar el texto de la licencia al portapapeles
    function copiarLicencia() {
        const licenciaTexto = document.querySelector('.license pre').textContent;
        navigator.clipboard.writeText(licenciaTexto).then(() => {
            mostrarMensaje('Licencia copiada al portapapeles');
        }).catch(err => {
            console.error('Error al copiar: ', err);
            mostrarMensaje('Error al copiar. Por favor, inténtalo de nuevo.');
        });
    }

    // Función para mostrar un mensaje temporal
    function mostrarMensaje(texto) {
        const mensaje = document.createElement('div');
        mensaje.textContent = texto;
        mensaje.style.position = 'fixed';
        mensaje.style.bottom = '20px';
        mensaje.style.left = '50%';
        mensaje.style.transform = 'translateX(-50%)';
        mensaje.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
        mensaje.style.color = 'white';
        mensaje.style.padding = '10px 20px';
        mensaje.style.borderRadius = '5px';
        mensaje.style.transition = 'opacity 0.5s';

        document.body.appendChild(mensaje);

        setTimeout(() => {
            mensaje.style.opacity = '0';
            setTimeout(() => {
                document.body.removeChild(mensaje);
            }, 500);
        }, 2000);
    }

    // Añadir botón para copiar licencia
    const licenciaSection = document.querySelector('.license');
    const botonCopiar = document.createElement('button');
    botonCopiar.textContent = 'Copiar Licencia';
    botonCopiar.className = 'btn-copiar';
    botonCopiar.addEventListener('click', copiarLicencia);
    licenciaSection.insertBefore(botonCopiar, licenciaSection.firstElementChild);
});
