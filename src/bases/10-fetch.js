 const apiKey = "43MwNjWnMMnRqe00qu76dLi5jCx6GVj3"


const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);


peticion
 .then( resp => resp.json() )
 .then( ({data}) => {
    const { url } = data.images.original;

    const img = document.createElement("img");
    img.src = url;

    document.body.append ( img );
 })
.catch( console.warn);
