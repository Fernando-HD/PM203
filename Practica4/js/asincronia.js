const estado = document.getElementById("estado");

let pedidoCancelado = false;

// CALLBACK

const notificar = (mensaje, callback) => {

    estado.innerHTML = mensaje;

    callback();

};


const cancelarPedido = () => {

    pedidoCancelado = true;

    estado.innerHTML = `

        Pedido cancelado

        <br><br>

        Area: Caja

    `;

};

// PROMESA

const prepararCafe = () => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if(pedidoCancelado){

                reject(`

                    Pedido cancelado

                    <br><br>

                    Area: Caja

                `);

                return;

            }

            const numeroAleatorio = Math.random();

            if(numeroAleatorio < 0.2){

                reject(`

                    Falta ingrediente

                    <br><br>

                    Area: Cocina

                `);

                return;

            }

            if(numeroAleatorio < 0.4){

                reject(`

                    Error en cocina

                    <br><br>

                    Area: Cocina

                `);

                return;

            }

            resolve(`

                Cafe preparado

                <br><br>

                Area: Cocina

            `);

        }, 3000);

    });

};

// ASINCRONIA

const iniciarPedido = () => {

    pedidoCancelado = false;

    estado.innerHTML = `

        Pedido recibido

        <br><br>

        Area: Caja

    `;


    setTimeout(() => {

        if(pedidoCancelado){

            estado.innerHTML = `

                Pedido cancelado

                <br><br>

                Area: Caja

            `;

            return;

        }

        estado.innerHTML = `

            Preparando cafe...

            <br><br>

            Area: Cocina

        `;

        prepararCafe()

        .then((respuesta) => {


            setTimeout(() => {

                if(pedidoCancelado){

                    estado.innerHTML = `

                        Pedido cancelado

                        <br><br>

                        Area: Caja

                    `;

                    return;

                }

                estado.innerHTML = `

                    Empacando pedido...

                    <br><br>

                    Area: Empaque

                `;


                setTimeout(() => {

                    if(pedidoCancelado){

                        estado.innerHTML = `

                            Pedido cancelado

                            <br><br>

                            Area: Caja

                        `;

                        return;

                    }

                    notificar(

                        `

                        Pedido entregado

                        <br><br>

                        Area: Entrega

                        `,

                        () => {

                            console.log("Pedido completado");

                        }

                    );

                }, 3000);

            }, 2000);

        })

        .catch((error) => {

            notificar(

                error,

                () => {

                    console.log("Proceso terminado");

                }

            );

        });

    }, 2000);

};