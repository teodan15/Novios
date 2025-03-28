document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value.trim();
    
    if (nombre) {
        localStorage.setItem('nombreUsuario', nombre);
        window.location.href = 'historia.html';
    } else {
        alert("Por favor, ingresa tu nombre ❤️");
    }
});