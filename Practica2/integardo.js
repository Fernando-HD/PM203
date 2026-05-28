// ============================================
// MODULO 03 - CLIENTE
// ============================================

let listaPedidos = [];
let totalAcumulado = 0;

function agregarPedido(producto, precio) {
    listaPedidos.push({ producto, precio });
    totalAcumulado += precio;
}

function mostrarCaja() {
    console.log("\n========== MENU COFFEE CODE ==========");
    console.log("LISTA DE PEDIDOS:");
    if (listaPedidos.length === 0) {
        console.log("No hay pedidos");
    } else {
        listaPedidos.forEach((p, i) => {
            console.log(`${i+1}. ${p.producto} - $${p.precio}`);
        });
    }
    console.log("TOTAL ACUMULADO: $" + totalAcumulado);
    console.log("======================================\n");
}

// ============================================
// MODULO 02 - COCINA
// ============================================

console.log("===== CATALOGO DE PRODUCTOS =====")

const catalogoProductos = [
    { id: 1, nombre: "Cafe Americano", precio: 35 },
    { id: 2, nombre: "Cafe Latte", precio: 45 },
    { id: 3, nombre: "Capuchino", precio: 50 },
    { id: 4, nombre: "Te Chai", precio: 40 },
    { id: 5, nombre: "Croissant", precio: 25 },
    { id: 6, nombre: "Muffin", precio: 30 },
    { id: 7, nombre: "Cheesecake", precio: 55 },
    { id: 8, nombre: "Sandwich", precio: 65 }
];

console.log("id | nombre             | precio");
console.log("--------------------------------");
catalogoProductos.forEach(p => {
    console.log(`${p.id}  | ${p.nombre.padEnd(18)} | $${p.precio}`);
});

function buscarProducto(id) {
    return catalogoProductos.find(p => p.id === id);
}

// ============================================
// MODULO 01 - CAJA
// ============================================

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function mostrarMenu() {
    console.log("\n=================================");
    console.log("       COFFEE CODE - CAJA");
    console.log("=================================");
    console.log("===== CATALOGO DE PRODUCTOS =====");
    console.log("id | nombre             | precio");
    console.log("--------------------------------");
    catalogoProductos.forEach(p => {
        console.log(`${p.id}  | ${p.nombre.padEnd(18)} | $${p.precio}`);
    });
    console.log("0. Finalizar pedido y ver total");
    console.log("=================================");
}

function preguntar() {
    rl.question("Seleccione el ID del producto: ", (respuesta) => {
        const id = parseInt(respuesta);
        
        if (id === 0) {
            console.log("\n=== PEDIDO FINALIZADO ===");
            mostrarCaja();
            rl.close();
            return;
        }
        
        const producto = buscarProducto(id);
        
        if (producto) {
            agregarPedido(producto.nombre, producto.precio);
            console.log(`\nAgregado: ${producto.nombre} - $${producto.precio}`);
            console.log(`Total actual: $${totalAcumulado}`);
        } else {
            console.log("\nID no valido, intente de nuevo");
        }
        
        preguntar();
    });
}

console.log("BIENVENIDO A COFFEE CODE");
mostrarMenu();
preguntar();


