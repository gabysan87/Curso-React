const persona = {
nombre: "Tony",
apellido: "Stark",
edad: 45,
direccion:{
    ciudad: "Nueva York",
    zip: 55321321,
    lat: 14.3232,
    lng: 34923332
}
};


// console.table( persona );


const persona2 = {...persona};
persona2.nombre = "Peter";


console.log( persona );
console.log(persona2)