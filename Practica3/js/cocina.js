// Buscar producto por ID usando find()

const buscarProducto = (id) => {

    return productos.find(producto => producto.id === id);

};

// Productos baratos usando filter()

const productosBaratos = () => {

    return productos.filter(producto => producto.precio <= 60);

};

// Productos caros

const productosCaros = () => {

    return productos.filter(producto => producto.precio > 60);

};

// Bebidas

const bebidas = () => {

    return productos.filter(producto => producto.categoria === "bebida");

};

// Postres

const postres = () => {

    return productos.filter(producto => producto.categoria === "postre");

};

// Promociones

const promociones = () => {

    return productos.filter(producto => producto.promocion === true);

};