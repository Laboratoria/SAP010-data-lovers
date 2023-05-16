import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from '../../data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

const hamburguer = document.querySelector(".hambuguer");
const navMenu = document.querySelector(".nav-menu");

hamburguer.addEventListener("click", ()=>{
    hamburguer.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.
    addEventListener("click", ()=>{
        hamburguer.classList.remove("active");
        navMenu.classList.remove("active")
}))

console.log(example, data);
