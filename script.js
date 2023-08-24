document.addEventListener("DOMContentLoaded", function() {
    const progressBarElements = document.querySelectorAll(".progress-bar");

    progressBarElements.forEach(progressBar => {
        const percentageElement = progressBar.querySelector(".percentage");
        const targetPercentage = parseInt(percentageElement.textContent);
        animateProgressBar(progressBar, targetPercentage);
    });
});

function animateProgressBar(progressBar, targetPercentage) {
    let currentPercentage = 0;
    const animationDuration = 500; // milliseconds
    const animationInterval = animationDuration / targetPercentage;

    const intervalId = setInterval(() => {
        if (currentPercentage >= targetPercentage) {
            clearInterval(intervalId);
        } else {
            currentPercentage++;
            progressBar.style.background = `
            radial-gradient(closest-side, var(--bgray) 79%, transparent 90% 100%),
            conic-gradient(var(--pearl) ${currentPercentage}%, var(--dimgray) 0)   
            `;
        }
    }, animationInterval);
}

function animarBarra(barraDiv, porcentaje) {
    let porcentajeActual = 0;
    const duracionAnimacion = 750; // milisegundos
    const intervaloAnimacion = duracionAnimacion / porcentaje;

    const intervaloId = setInterval(() => {
        if (porcentajeActual >= porcentaje) {
            clearInterval(intervaloId);
        } else {
            porcentajeActual++;
            barraDiv.style.width = `${porcentajeActual}%`;
        }
    }, intervaloAnimacion);
}

// Obtener todas las barras de progreso
const barrasDeProgreso = document.querySelectorAll('.contactoInfo.lenguajes .bar');

barrasDeProgreso.forEach(barra => {
    const valorTexto = barra.textContent; 
    const porcentaje = parseInt(valorTexto); 

    const liElement = barra.parentElement; 
    const barraDiv = liElement.querySelector('div');

    animarBarra(barraDiv, porcentaje); 
});

