// Lista de productos inicial
let productos = [
    {"sku": "SKU001", "nombre": "Zapatilla Nike Air Force 1 LE", "precio": 100.00, "cantidad": 10},
    {"sku": "SKU002", "nombre": "Zapatilla Adidas Ultraboost", "precio": 120.00, "cantidad": 8},
    {"sku": "SKU003", "nombre": "Zapatilla Puma RS-X", "precio": 90.00, "cantidad": 15},
    {"sku": "SKU004", "nombre": "Zapatilla Reebok Classic", "precio": 80.00, "cantidad": 5},
    {"sku": "SKU005", "nombre": "Zapatilla New Balance 990", "precio": 150.00, "cantidad": 7},
    {"sku": "SKU006", "nombre": "Zapatilla Asics Gel-Kayano", "precio": 130.00, "cantidad": 12},
    {"sku": "SKU007", "nombre": "Zapatilla Saucony Kinvara", "precio": 110.00, "cantidad": 6},
    {"sku": "SKU008", "nombre": "Zapatilla Converse Chuck Taylor", "precio": 60.00, "cantidad": 20},
    {"sku": "SKU009", "nombre": "Zapatilla Vans Old Skool", "precio": 70.00, "cantidad": 18},
    {"sku": "SKU010", "nombre": "Zapatilla Nike React", "precio": 140.00, "cantidad": 9},
    {"sku": "SKU011", "nombre": "Zapatilla Under Armour HOVR", "precio": 125.00, "cantidad": 11},
    {"sku": "SKU012", "nombre": "Zapatilla Hoka One One Clifton", "precio": 160.00, "cantidad": 4},
    {"sku": "SKU013", "nombre": "Zapatilla On Cloudstratus", "precio": 140.00, "cantidad": 3},
    {"sku": "SKU014", "nombre": "Zapatilla Merrell Moab", "precio": 110.00, "cantidad": 6},
    {"sku": "SKU015", "nombre": "Zapatilla Nike Air Max", "precio": 130.00, "cantidad": 5},
    {"sku": "SKU016", "nombre": "Zapatilla Adidas NMD", "precio": 120.00, "cantidad": 8},
    {"sku": "SKU017", "nombre": "Zapatilla Puma Clyde", "precio": 85.00, "cantidad": 12},
    {"sku": "SKU018", "nombre": "Zapatilla New Balance 574", "precio": 90.00, "cantidad": 14},
    {"sku": "SKU019", "nombre": "Zapatilla Skechers D'Lites", "precio": 75.00, "cantidad": 9},
    {"sku": "SKU020", "nombre": "Zapatilla Fila Disruptor", "precio": 70.00, "cantidad": 18},
];

// Registro de ventas
let ventas = [];

// Uso de funciones para realizar las operaciones - Función para agregar un producto
function agregarProducto() {
    const sku = document.getElementById('sku').value; // Obtiene el SKU del campo de entrada
    const nombre = document.getElementById('nombre').value; // Obtiene el nombre del campo de entrada
    const precio = parseFloat(document.getElementById('precio').value); // Obtiene el precio y lo convierte a número
    const cantidad = parseInt(document.getElementById('cantidad').value); // Obtiene la cantidad y la convierte a número

// Algoritmo con condicional
    if (sku && nombre && !isNaN(precio) && !isNaN(cantidad)) { // Verifica que todos los campos estén completos y sean válidos
        productos.push({sku, nombre, precio, cantidad}); // Agrega el producto a la lista
        document.getElementById('sku').value = ''; // Limpia el campo SKU
        document.getElementById('nombre').value = ''; // Limpia el campo nombre
        document.getElementById('precio').value = ''; // Limpia el campo precio
        document.getElementById('cantidad').value = ''; // Limpia el campo cantidad
        mostrarProductos(); // Muestra los productos actualizados
        actualizarSelectorProducto(); // Actualiza el selector de productos
    } else {
        alert("Por favor, completa todos los campos correctamente."); // Muestra alerta si los campos no están completos
    }
}

// Uso de funciones para realizar las operaciones - Función para mostrar productos en la tabla
function mostrarProductos() {
    const tabla = document.getElementById('tablaProductos'); // Obtiene la tabla de productos
    tabla.innerHTML = `
        <tr>
            <th onclick="ordenarPorPrecio()">Precio (Clic para ordenar)</th> <!-- Ordenar por precio -->
            <th onclick="ordenarPorNombre()">Nombre (Clic para ordenar)</th> <!-- Ordenar por nombre -->
            <th>SKU</th> <!-- Columna para SKU -->
            <th>Cantidad</th> <!-- Columna para cantidad -->
            <th>Acciones</th> <!-- Columna para acciones -->
        </tr>
    `; // Reinicia la tabla con los encabezados

// Algoritmo utilizando un ciclo
    for (const producto of productos) { // Recorre la lista de productos
        const fila = document.createElement('tr'); // Crea una nueva fila
        fila.innerHTML = `
            <td>${producto.precio.toFixed(2)}</td> <!-- Muestra el precio con 2 decimales -->
            <td>${producto.nombre}</td> <!-- Muestra el nombre del producto -->
            <td>${producto.sku}</td> <!-- Muestra el SKU del producto -->
            <td>${producto.cantidad}</td> <!-- Muestra la cantidad del producto -->
            <td><button onclick="prepararVenta('${producto.sku}')">Seleccionar</button></td> <!-- Botón para seleccionar producto -->
        `; // Llena la fila con los datos del producto
        tabla.appendChild(fila); // Añade la fila a la tabla
    }
}

// Función para actualizar el selector de productos
function actualizarSelectorProducto() {
    const selector = document.getElementById('productoSeleccionado'); // Obtiene el selector de productos
    selector.innerHTML = ''; // Limpia el selector
    productos.forEach(producto => {
        const option = document.createElement('option'); // Crea una nueva opción
        option.value = producto.sku; // Asigna el SKU como valor
        option.textContent = producto.nombre; // Asigna el nombre del producto como texto
        selector.appendChild(option); // Añade la opción al selector
    });
}

// Variable para almacenar el SKU del producto seleccionado
let skuSeleccionado = null;

// Función para preparar la venta (almacenar SKU seleccionado)
function prepararVenta(sku) {
    skuSeleccionado = sku; // Almacena el SKU seleccionado
    alert(`Producto seleccionado: ${sku}`); // Muestra una alerta con el SKU seleccionado
}

// Simulador interactivo con la estructura final del proyecto integrador - Función para simular una venta
function simularVenta() {
    const nombreComprador = document.getElementById('nombreComprador').value; // Obtiene el nombre del comprador
    const cantidadVenta = parseInt(document.getElementById('cantidadVenta').value); // Obtiene la cantidad de venta
    const producto = productos.find(p => p.sku === skuSeleccionado); // Busca el producto por SKU

    if (producto) { // Verifica que el producto exista
        if (cantidadVenta > 0 && cantidadVenta <= producto.cantidad) { // Verifica que la cantidad sea válida
            producto.cantidad -= cantidadVenta; // Descuenta la cantidad vendida del stock
            const fecha = new Date().toLocaleDateString(); // Obtiene la fecha actual
            ventas.push({fecha, comprador: nombreComprador, producto: producto.nombre, cantidad: cantidadVenta}); // Añade la venta al registro
            alert(`Venta registrada a ${nombreComprador} de ${cantidadVenta} unidades de ${producto.nombre}. Quedan ${producto.cantidad} en stock.`); // Muestra alerta de venta registrada
            skuSeleccionado = null; // Limpia la selección
            mostrarProductos(); // Muestra los productos actualizados
            mostrarVentas(); // Muestra el registro de ventas actualizado
        } else {
            alert(`Cantidad no válida o stock insuficiente para ${producto.nombre}.`); // Muestra alerta si la cantidad es inválida o insuficiente
        }
    } else {
        alert("Por favor, selecciona un producto antes de vender."); // Muestra alerta si no hay producto seleccionado
    }
}

// Función para mostrar el registro de ventas
function mostrarVentas() {
    const tabla = document.getElementById('tablaVentas'); // Obtiene la tabla de ventas
    tabla.innerHTML = `
        <tr>
            <th>Fecha</th> <!-- Columna para fecha de la venta -->
            <th>Comprador</th> <!-- Columna para nombre del comprador -->
            <th>Producto</th> <!-- Columna para nombre del producto -->
            <th>Cantidad</th> <!-- Columna para cantidad vendida -->
        </tr>
    `; // Reinicia la tabla con los encabezados
    for (const venta of ventas) { // Recorre el registro de ventas
        const fila = document.createElement('tr'); // Crea una nueva fila
        fila.innerHTML = `
            <td>${venta.fecha}</td> <!-- Muestra la fecha de la venta -->
            <td>${venta.comprador}</td> <!-- Muestra el nombre del comprador -->
            <td>${venta.producto}</td> <!-- Muestra el nombre del producto -->
            <td>${venta.cantidad}</td> <!-- Muestra la cantidad vendida -->
        `; // Llena la fila con los datos de la venta
        tabla.appendChild(fila); // Añade la fila a la tabla
    }
}

// Función para buscar productos
function buscarProducto() {
    const busqueda = document.getElementById('busqueda').value.toLowerCase(); // Obtiene el término de búsqueda
    const tabla = document.getElementById('tablaProductos'); // Obtiene la tabla de productos
    tabla.innerHTML = `
        <tr>
            <th onclick="ordenarPorPrecio()">Precio (Clic para ordenar)</th> <!-- Ordenar por precio -->
            <th onclick="ordenarPorNombre()">Nombre (Clic para ordenar)</th> <!-- Ordenar por nombre -->
            <th>SKU</th> <!-- Columna para SKU -->
            <th>Cantidad</th> <!-- Columna para cantidad -->
            <th>Acciones</th> <!-- Columna para acciones -->
        </tr>
    `; // Reinicia la tabla con los encabezados
    const productosFiltrados = productos.filter(p => p.sku.toLowerCase().includes(busqueda) || p.nombre.toLowerCase().includes(busqueda)); // Filtra los productos por el término de búsqueda
    for (const producto of productosFiltrados) { // Recorre la lista de productos filtrados
        const fila = document.createElement('tr'); // Crea una nueva fila
        fila.innerHTML = `
            <td>${producto.precio.toFixed(2)}</td> <!-- Muestra el precio con 2 decimales -->
            <td>${producto.nombre}</td> <!-- Muestra el nombre del producto -->
            <td>${producto.sku}</td> <!-- Muestra el SKU del producto -->
            <td>${producto.cantidad}</td> <!-- Muestra la cantidad del producto -->
            <td><button onclick="prepararVenta('${producto.sku}')">Seleccionar</button></td> <!-- Botón para seleccionar producto -->
        `; // Llena la fila con los datos del producto
        tabla.appendChild(fila); // Añade la fila a la tabla
    }
}

// Función para ordenar productos por precio
function ordenarPorPrecio() {
    productos.sort((a, b) => a.precio - b.precio); // Ordena los productos por precio
    mostrarProductos(); // Muestra los productos actualizados
}

// Función para ordenar productos por nombre
function ordenarPorNombre() {
    productos.sort((a, b) => a.nombre.localeCompare(b.nombre)); // Ordena los productos por nombre
    mostrarProductos(); // Muestra los productos actualizados
}

// Mostrar productos y actualizar selector al cargar la página
mostrarProductos(); // Muestra los productos al cargar la página
actualizarSelectorProducto(); // Actualiza el selector de productos al cargar la página
