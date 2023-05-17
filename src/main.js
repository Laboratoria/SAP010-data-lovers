import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.querySelector(".menu-icon")
    menuIcon.addEventListener("click", switchMenu);
  
  
  function switchMenu() {
    const menuDisplay = document.querySelector(".menu").style.display
    if (menuDisplay === "none" || !menuDisplay) {
      document.querySelector(".menu").style.display = 'flex'
      document.querySelector(".menu-icon").innerHTML = "<i class='fas fa-times fa-lg'></i>"
    } else {
      document.querySelector(".menu").style.display = 'none'
      document.querySelector(".menu-icon").innerHTML = "<i class='fas fa-bars fa-lg'></i>"
    }
  }
console.log(example, data);
})
