console.log("Hola Mundo Js desde el Servidor")

console.time("miProceso")

for (let i=0;i<1000000; i++ ){}

console.timeEnd("miProceso")

let usuarios=[
    {nombre:"Fer", edad: 20},
    {nombre:"Luis", edad: 20},

];
console.table(usuarios)