// ventas.js

document.addEventListener('DOMContentLoaded', function() {
    cargarVentas();
});

function cargarVentas() {
    const ventas = JSON.parse(localStorage.getItem('ventas')) || [];
    const tbody = document.querySelector('#tabla-ventas tbody');
    tbody.innerHTML = '';

    ventas.forEach(venta => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${venta.sku}</td>
            <td>${venta.cantidad}</td>
            <td>${venta.total}</td>
        `;
        tbody.appendChild(tr);
    });
}

function agregarVenta(sku, cantidad, total) {
    const ventas = JSON.parse(localStorage.getItem('ventas')) || [];
    ventas.push({ sku, cantidad, total });
    localStorage.setItem('ventas', JSON.stringify(ventas));
    cargarVentas();
}

function realizarVenta() {
    const sku = document.getElementById('ventaSku').value;
    const cantidad = document.getElementById('ventaCantidad').value;
    const productos = JSON.parse(localStorage.getItem('productos')) || [];
    const producto = productos.find(prod => prod.sku === sku);

    if (producto && producto.cantidad >= cantidad) {
        const total = producto.precio * cantidad;
        agregarVenta(sku, cantidad, total);

        producto.cantidad -= cantidad;
        localStorage.setItem('productos', JSON.stringify(productos));
        cargarProductos();

        alert('Venta realizada');
    } else {
        alert('Stock insuficiente');
    }
}
