// import { heroes } from "./data/heroes"
// import { heroes } from "./data/heroes";
// import heroes, { owners } from "../data/heroes";
import heroes from "../data/heroes";


// console.log(owners);

// Find

// const getHeroeById = (id) => {
//   return heroes.find((heroe) => {
//     if (heroe.id === id) {
//       return true;
//     } else {
//       return false;
//     }
//   });
// };
// 

export const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id )
  
// console.log(getHeroeById(2));

// find?, filter 

export const getHeroeByIdOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner)

// console.log( getHeroeByIdOwner ("Marvel") )
