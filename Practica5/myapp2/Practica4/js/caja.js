const IVA = 0.16;

const calcularTotales = (pedido) => {

    const subtotal = pedido.reduce((acumulador, producto) => {

        return acumulador + producto.precio;

    }, 0);

    const iva = subtotal * IVA;

    const total = subtotal + iva;

    return {

        subtotal,
        iva,
        total

    };

};


const mostrarTicket = (pedido) => {

    const listaPedido = document.getElementById("listaPedido");

    const subtotalHTML = document.getElementById("subtotal");

    const ivaHTML = document.getElementById("iva");

    const totalHTML = document.getElementById("total");

    listaPedido.innerHTML = "";

    pedido.forEach(producto => {

        // destructuring

        const {

            nombre,
            precio

        } = producto;

        listaPedido.innerHTML += `

            <li>
                ${nombre} - $${precio}
            </li>

        `;

    });

    const {

        subtotal,
        iva,
        total

    } = calcularTotales(pedido);

    subtotalHTML.textContent = subtotal.toFixed(2);

    ivaHTML.textContent = iva.toFixed(2);

    totalHTML.textContent = total.toFixed(2);

};