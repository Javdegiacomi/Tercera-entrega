// compras.js

document.addEventListener('DOMContentLoaded', function() {
    cargarProveedores();
});

function abrirVentanaOrdenCompra() {
    document.getElementById('ventanaOrdenCompra').style.display = 'block';
}

function cerrarVentanaOrdenCompra() {
    document.getElementById('ventanaOrdenCompra').style.display = 'none';
}

function abrirVentanaCargarRemito() {
    document.getElementById('ventanaCargarRemito').style.display = 'block';
}

function cerrarVentanaCargarRemito() {
    document.getElementById('ventanaCargarRemito').style.display = 'none';
}

function cargarProveedores() {
    const proveedores = JSON.parse(localStorage.getItem('proveedores')) || [];
    const selectProveedor = document.getElementById('proveedor');
    selectProveedor.innerHTML = '';

    proveedores.forEach(proveedor => {
        const option = document.createElement('option');
        option.value = proveedor.nombre;
        option.textContent = proveedor.nombre;
        selectProveedor.appendChild(option);
    });
}

function agregarProveedor(nombre) {
    const proveedores = JSON.parse(localStorage.getItem('proveedores')) || [];
    proveedores.push({ nombre });
    localStorage.setItem('proveedores', JSON.stringify(proveedores));
    cargarProveedores();
}

function generarOrdenCompra() {
    const numeroOrden = document.getElementById('numeroOrden').value;
    const proveedor = document.getElementById('proveedor').value;
    const productos = JSON.parse(localStorage.getItem('productos')) || [];
    const producto = document.getElementById('producto').value;
    const cantidad = document.getElementById('cantidad').value;
    const precio = document.getElementById('precio').value;

    const ordenesCompra = JSON.parse(localStorage.getItem('ordenesCompra')) || [];
    ordenesCompra.push({ numeroOrden, proveedor, producto, cantidad, precio });
    localStorage.setItem('ordenesCompra', JSON.stringify(ordenesCompra));

    alert('Orden de compra generada');
    cerrarVentanaOrdenCompra();
}

function cargarRemito() {
    const numeroOrden = document.getElementById('remitoNumeroOrden').value;
    const cantidadRecibida = document.getElementById('cantidadRecibida').value;

    const ordenesCompra = JSON.parse(localStorage.getItem('ordenesCompra')) || [];
    const ordenCompra = ordenesCompra.find(orden => orden.numeroOrden === numeroOrden);
    if (!ordenCompra) {
        alert('Número de orden no encontrado');
        return;
    }

    const productos = JSON.parse(localStorage.getItem('productos')) || [];
    const producto = productos.find(prod => prod.sku === ordenCompra.producto);
    if (producto) {
        producto.cantidad += parseInt(cantidadRecibida);
        localStorage.setItem('productos', JSON.stringify(productos));
        cargarProductos();
    }

    alert('Remito cargado y stock actualizado');
    cerrarVentanaCargarRemito();
}
