// const getImagenPromesa = () =>
//  new Promise ( resolve =>
//         resolve("https://www.dafiti.cl/calzados/nike/?dir=desc&q=zapatilla&sort=age"))

// getImagenPromesa().then( console.log)

// Usar Async

const getImagen = async () => {

    try {
  const apiKey = "43MwNjWnMMnRqe00qu76dLi5jCx6GVj3";
  const resp = await fetch(
    `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
  )
  const {data} = await resp.json();

  const { url } = data.images.original;

  const img = document.createElement("img");
  img.src = url;
  document.body.append ( img );

} catch (error) {
// manejo de error 
console.error(error)
}

}
getImagen();

// const apiKey = "43MwNjWnMMnRqe00qu76dLi5jCx6GVj3"

// const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

// peticion
//  .then( resp => resp.json() )
//  .then( ({data}) => {
//     const { url } = data.images.original;

//     const img = document.createElement("img");
//     img.src = url;

//     document.body.append ( img );
//  })
// .catch( console.warn);
