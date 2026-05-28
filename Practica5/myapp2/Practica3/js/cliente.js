const contenedorProductos = document.getElementById("productos");

const contenedorPromociones = document.getElementById("promociones");

let pedido = [];

// Mostrar productos usando map()

const mostrarProductos = (listaProductos) => {

    contenedorProductos.innerHTML = "";

    listaProductos.map(producto => {

        const {

            id,
            nombre,
            precio,
            categoria

        } = producto;

        contenedorProductos.innerHTML += `

            <div class="card">

                <h3>${nombre}</h3>

                <p>
                    Categoria: ${categoria}
                </p>

                <p>
                    Precio: $${precio}
                </p>

                <button onclick="agregarProducto(${id})">

                    Agregar

                </button>

            </div>

        `;

    });

};

// Agregar productos al pedido

const agregarProducto = (id) => {

    const producto = buscarProducto(id);

    pedido.push(producto);

    mostrarTicket(pedido);

};

// Mostrar promociones usando forEach()

const mostrarPromociones = () => {

    contenedorPromociones.innerHTML = "";

    promociones().forEach(producto => {

        const {

            id,
            nombre,
            precio

        } = producto;

        contenedorPromociones.innerHTML += `

            <div class="card">

                <h3>${nombre}</h3>

                <p>
                    Producto en promoción
                </p>

                <p>
                    Precio especial: $${precio}
                </p>

                <button onclick="agregarProducto(${id})">

                    Agregar

                </button>

            </div>

        `;

    });

};

// Filtros

const filtrarBebidas = () => {

    mostrarProductos(bebidas());

};

const filtrarPostres = () => {

    mostrarProductos(postres());

};

const filtrarBaratos = () => {

    mostrarProductos(productosBaratos());

};

const filtrarCaros = () => {

    mostrarProductos(productosCaros());

};

const mostrarTodos = () => {

    mostrarProductos(productos);

};