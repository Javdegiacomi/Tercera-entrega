// admin.js

let users = JSON.parse(localStorage.getItem('users')) || [];

function gestionarUsuarios() {
    // Lógica para gestionar usuarios
    alert('Gestión de usuarios en desarrollo.');
}

document.getElementById('login-button').addEventListener('click', () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        alert('Inicio de sesión exitoso');
        document.getElementById('auth-section').style.display = 'none';
        document.getElementById('main-section').style.display = 'block';
        document.getElementById('user-menu').style.display = 'block';
    } else {
        alert('Correo o contraseña incorrectos');
    }
});

document.getElementById('register-button').addEventListener('click', () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (users.find(u => u.email === email)) {
        alert('El correo ya está registrado');
    } else {
        users.push({ email, password });
        localStorage.setItem('users', JSON.stringify(users));
        alert('Registro exitoso, puedes iniciar sesión');
    }
});

document.getElementById('logout-button').addEventListener('click', () => {
    alert('Sesión cerrada');
    document.getElementById('main-section').style.display = 'none';
    document.getElementById('auth-section').style.display = 'block';
});

document.getElementById('forgot-password-button').addEventListener('click', () => {
    alert('Funcionalidad de recuperación de contraseña aún no implementada');
});
