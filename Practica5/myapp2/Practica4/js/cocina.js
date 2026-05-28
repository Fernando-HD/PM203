
const buscarProducto = (id) => {

    return productos.find(producto => producto.id === id);

};


const productosBaratos = () => {

    return productos.filter(producto => producto.precio <= 60);

};


const productosCaros = () => {

    return productos.filter(producto => producto.precio > 60);

};


const bebidas = () => {

    return productos.filter(producto => producto.categoria === "bebida");

};


const postres = () => {

    return productos.filter(producto => producto.categoria === "postre");

};


const promociones = () => {

    return productos.filter(producto => producto.promocion === true);

};