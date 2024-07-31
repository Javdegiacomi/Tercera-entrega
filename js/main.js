document.addEventListener('DOMContentLoaded', function () {
    // Inicializar el localStorage con algunos SKU para pruebas
    if (!localStorage.getItem('productos')) {
        const productosIniciales = [
            { sku: '001', nombre: 'Zapatilla Deportiva', precio: 50, cantidad: 100 },
            { sku: '002', nombre: 'Zapatilla Casual', precio: 45, cantidad: 150 },
            { sku: '003', nombre: 'Zapatilla Running', precio: 60, cantidad: 200 },
            // ... otros productos
        ];
        localStorage.setItem('productos', JSON.stringify(productosIniciales));
    }

    // Cargar datos de recordar contraseña al cargar la página
    const recordarUsuario = localStorage.getItem('recordarUsuario');
    const recordarPassword = localStorage.getItem('recordarPassword');
    if (recordarUsuario && recordarPassword) {
        document.getElementById('loginNombre').value = recordarUsuario;
        document.getElementById('loginPassword').value = recordarPassword;
        document.getElementById('recordarContrasena').checked = true;
    }

    // Mostrar/ocultar contraseña en el registro
    document.getElementById('mostrarContrasenaReg').addEventListener('change', function () {
        const passwordInput = document.getElementById('regPassword');
        passwordInput.type = this.checked ? 'text' : 'password';
    });

    // Mostrar/ocultar contraseña en el login
    document.getElementById('mostrarContrasenaLogin').addEventListener('change', function () {
        const passwordInput = document.getElementById('loginPassword');
        passwordInput.type = this.checked ? 'text' : 'password';
    });
});

// Función para registrar un nuevo usuario
function registrarUsuario() {
    const nombre = document.getElementById('regNombre').value;
    const password = document.getElementById('regPassword').value;
    localStorage.setItem(nombre, password);
    alert('Usuario registrado correctamente');
    mostrarLogin();
}

// Función para iniciar sesión
function iniciarSesion() {
    const nombre = document.getElementById('loginNombre').value;
    const password = document.getElementById('loginPassword').value;
    const storedPassword = localStorage.getItem(nombre);
    if (password === storedPassword) {
        document.getElementById('login').style.display = 'none';
        document.getElementById('nav').style.display = 'block';
        document.getElementById('stock').style.display = 'block';
        document.getElementById('usuarioNombre').innerText = `Usuario: ${nombre}`;
        alert('Sesión iniciada correctamente');
    } else {
        alert('Usuario o contraseña incorrectos');
    }
}

// Función para cerrar sesión
function cerrarSesion() {
    document.getElementById('login').style.display = 'block';
    document.getElementById('nav').style.display = 'none';
    document.getElementById('stock').style.display = 'none';
}

// Mostrar sección de login
function mostrarLogin() {
    document.getElementById('loginRegistro').style.display = 'none';
    document.getElementById('login').style.display = 'block';
}

// Mostrar sección de registro
function mostrarRegistro() {
    document.getElementById('loginRegistro').style.display = 'block';
    document.getElementById('login').style.display = 'none';
}

// Mostrar/ocultar contraseña en el registro
document.getElementById('mostrarContrasenaReg').addEventListener('change', function () {
    const passwordInput = document.getElementById('regPassword');
    passwordInput.type = this.checked ? 'text' : 'password';
});

// Mostrar/ocultar contraseña en el login
document.getElementById('mostrarContrasenaLogin').addEventListener('change', function () {
    const passwordInput = document.getElementById('loginPassword');
    passwordInput.type = this.checked ? 'text' : 'password';
});

// Función para recordar contraseña
function recordarContrasena() {
    const recordarCheckbox = document.getElementById('recordarContrasena');
    if (recordarCheckbox.checked) {
        const nombre = document.getElementById('loginNombre').value;
        const password = document.getElementById('loginPassword').value;
        localStorage.setItem('recordarUsuario', nombre);
        localStorage.setItem('recordarPassword', password);
    } else {
        localStorage.removeItem('recordarUsuario');
        localStorage.removeItem('recordarPassword');
    }
}

// Cargar datos de recordar contraseña al cargar la página
window.onload = function () {
    const recordarUsuario = localStorage.getItem('recordarUsuario');
    const recordarPassword = localStorage.getItem('recordarPassword');
    if (recordarUsuario && recordarPassword) {
        document.getElementById('loginNombre').value = recordarUsuario;
        document.getElementById('loginPassword').value = recordarPassword;
        document.getElementById('recordarContrasena').checked = true;
    }
};

// Función para recuperar contraseña
function recuperarContrasena() {
    alert('Funcionalidad de recuperación de contraseña no implementada');
}

// Función para iniciar con Facebook
function iniciarConFacebook() {
    alert('Funcionalidad de inicio con Facebook no implementada');
}

// Función para iniciar con correo registrado
function iniciarConCorreo() {
    alert('Funcionalidad de inicio con correo registrado no implementada');
}
function mostrarMenu() {
    document.getElementById("menuDesplegable").classList.add("show");
}

function ocultarMenu() {
    document.getElementById("menuDesplegable").classList.remove("show");
}

function mostrarLogin() {
    document.getElementById("loginRegistro").style.display = "none";
    document.getElementById("login").style.display = "block";
}

function mostrarRegistro() {
    document.getElementById("loginRegistro").style.display = "block";
    document.getElementById("login").style.display = "none";
}

// Implementa la lógica de inicio de sesión y registro aquí
// ...

// Carga el menú al iniciar sesión
function cargarMenu(usuario) {
    document.getElementById("usuarioNombre").innerText = usuario;
    document.getElementById("nav").style.display = "block";
}

// Llama a cargarMenu cuando el usuario inicie sesión
// cargarMenu("Nombre de Usuario");
