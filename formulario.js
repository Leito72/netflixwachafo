document.querySelector("form").addEventListener("submit", function(event) {
    const email = document.querySelector('input[type="email"]').value;
    const password = document.querySelector('input[type="password"]').value;

    if (!email || !password) {
        event.preventDefault(); // Evita el envío del formulario
        alert("Por favor, ingresa tu email y contraseña.");
    }
});
