//import { example } from './data.js';
import data from './data/ghibli/ghibli.js';
const filmList = data.films
const section = document.querySelector(".container-films") 

function renderFilms(filmList) {
   section.innerHTML="";
    for (let i=0; i<filmList.length; i++){
      const card  = document.createElement("section")
      card.classList.add("films")
      card.innerHTML = `
      <img src=${filmList[i].poster}>
      <h3>${filmList[i].title}</h3>
      <h3>${filmList[i].release_date}</h3>
      `;
      section.appendChild(card)
    }
}
renderFilms(filmList);

console.log(data.films[0].poster)

//console.log(example, data);
