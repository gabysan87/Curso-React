import { getHeroeById } from "./bases/08-imp-exp"

// const promesa = new Promise (( resolve, reject) => {

//     setTimeout( () => {
//         // Tarea
//         // importar el 
//         const heroe = getHeroeById (2);
//         // console.log(heroe);
//         // reject(p1);
//         reject("No se pudo encontrar el heroe")
//         // console.log("2 segundos despues")
//     }, 2000 )
// });

// promesa.then( (heroe) => {
//     console.log("heroe")
// })
// .catch( err => console.warn( err ));

const getHeroeByIdAsync = (  id ) => {
    return new Promise (( resolve, reject) => {

            setTimeout( () => {
                // Tarea
                // importar el 
                const p1 = getHeroeById (id);
                if (p1) {
                    resolve(p1);
                }else {
                    reject("No se pudo encontrar el heroe")
                }
                              
               
            }, 2000 )
        });
        
     
}

getHeroeByIdAsync(1)
.then( heroe => console.log("Heroe", heroe))
.catch(err => console.warn(err))
// tips .catch(console.warn) solo se imprime el console
// .then( console.log) se imprime solo el console no es necesario colocar el heroe