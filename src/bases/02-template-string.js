
const nombre = "Fernando";
const apellido = " Herrera";

// const nombreCompleto = name + " " + apellido;

const nombreCompleto = 
`${nombre} 
${apellido}
${1 + 1}
`;

console.log( nombreCompleto )

function getSaludo(nombre){
    return "Hola " + nombre;
}

console.log(`Este es un texto: ${getSaludo(nombre)}`)