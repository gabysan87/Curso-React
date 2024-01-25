// Funciones en Js

// const saludar = function( nombre ) {
//     return `Hola, ${nombre}`;
// }


// Funciones tradicionales
// Funcion de flecha
const saludar2 = ( nombre ) => {
    return `Hola, ${nombre}`;
}

// 3 opcion

const saludar3 = ( nombre ) => `Hola, ${nombre}`;


// 4 funcion
const saludar4 = () => `Hola Mundo`;


// console.log( saludar("Goku"))
console.log( saludar2("Vegeta"));
console.log( saludar3("Goku"));
console.log( saludar4());


const getUser = () => 
  ({
        uid: "ABC123",
        username: "El_papi1502"
    })

const user = getUser()
console.log( user)

// Tarea
// 1- Transformar una funcion de flecha
// 2- Tiene que retornar un objeto implicito
// 3- Pruebas

const getUsuarioActivo = (nombre) => 
    ({
        uid: "ABC567",
        username: nombre
    })


const usuarioActivo = getUsuarioActivo("Fernando")
console.log(usuarioActivo)