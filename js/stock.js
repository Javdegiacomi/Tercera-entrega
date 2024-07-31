//stock.js

document.addEventListener('DOMContentLoaded', function() {
    cargarProductos();
});

function cargarProductos() {
    const productos = JSON.parse(localStorage.getItem('productos')) || [];
    const tbody = document.querySelector('#tabla-productos tbody');
    tbody.innerHTML = '';

    productos.forEach(producto => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${producto.sku}</td>
            <td>${producto.nombre}</td>
            <td>${producto.precio}</td>
            <td>${producto.cantidad}</td>
            <td>${producto.precio * producto.cantidad}</td>
        `;
        tbody.appendChild(tr);
    });
}

function agregarProducto(sku, nombre, precio, cantidad) {
    const productos = JSON.parse(localStorage.getItem('productos')) || [];
    productos.push({ sku, nombre, precio, cantidad });
    localStorage.setItem('productos', JSON.stringify(productos));
    cargarProductos();
}

function ordenarProductos(criterio) {
    const productos = JSON.parse(localStorage.getItem('productos')) || [];
    productos.sort((a, b) => {
        if (a[criterio] < b[criterio]) return -1;
        if (a[criterio] > b[criterio]) return 1;
        return 0;
    });
    localStorage.setItem('productos', JSON.stringify(productos));
    cargarProductos();
}
