// Mostrar nombre en todas las páginas
document.addEventListener('DOMContentLoaded', function() {
    // Cargar y mostrar nombre
    const elementosNombre = document.querySelectorAll('#nombreUsuario');
    if (elementosNombre.length > 0) {
        const nombre = localStorage.getItem('nombreUsuario');
        if (nombre) {
            elementosNombre.forEach(el => el.textContent = nombre);
        } else {
            window.location.href = 'index.html';
        }
    }

    // Galerías interactivas
    const initGaleria = (galeriaId) => {
        const galeria = document.getElementById(galeriaId);
        if (!galeria) return;

        const slides = galeria.querySelectorAll('.slide');
        const btnAnterior = galeria.parentElement.querySelector('#btnAnterior');
        const btnSiguiente = galeria.parentElement.querySelector('#btnSiguiente');
        const btnContinuar = galeria.parentElement.querySelector('#btnContinuar');
        let currentIndex = 0;

        function updateSlide() {
            slides.forEach((slide, index) => {
                slide.classList.toggle('active', index === currentIndex);
            });

            if (btnAnterior) btnAnterior.style.display = currentIndex === 0 ? 'none' : 'block';
            if (btnSiguiente) btnSiguiente.style.display = currentIndex === slides.length - 1 ? 'none' : 'block';
            if (btnContinuar) btnContinuar.style.display = currentIndex === slides.length - 1 ? 'block' : 'none';
        }

        if (btnAnterior) btnAnterior.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateSlide();
            }
        });

        if (btnSiguiente) btnSiguiente.addEventListener('click', () => {
            if (currentIndex < slides.length - 1) {
                currentIndex++;
                updateSlide();
            }
        });

        updateSlide();
    };

    // Inicializar galerías
    initGaleria('galeriaHistoria');
    initGaleria('galeriaGustos');

    // Manejar propuesta
    const btnSi = document.getElementById('btnSi');
    const btnNo = document.getElementById('btnNo');

    if (btnSi) btnSi.addEventListener('click', () => {
        window.location.href = 'celebracion.html';
    });

    if (btnNo) btnNo.addEventListener('click', () => {
        if (confirm('¿Segura? Vuelve a pensarlo... 😢❤️')) {
            btnNo.style.display = 'none';
        }
    });
});