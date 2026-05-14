const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function mostrarMenu() {
    console.log("\n=================================");
    console.log("       COFFEE CODE - MENU");
    console.log("=================================");
    mostrarCatalogo();
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