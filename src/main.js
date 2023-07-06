//import { example } from './data.js';

import data from './data/ghibli/ghibli.js';
import {alfabeto, sortRelease, sortRating, renderCardFilms, director} from './data.js';

const dataGhibli = data.films;

// const titles = data.films(title);
// const textoSel = element.options[element.selectedIndex].text;
document.getElementById("totoro-logo").addEventListener("mouseover", changeColor);
function changeColor(){
  console.log("changeColor event");
  const changeColor = document.getElementById("totoro-logo");
  changeColor.classList.add("invert-color");
}

document.getElementById("totoro-logo").addEventListener("mouseout", originalColor());
function originalColor(){
  const originalColor = document.getElementById("totoro-logo");
  originalColor.style.backgroundColor = "hex(#7FFFD4)";
}

document.getElementById("totoro-logo").addEventListener("click", createMenu);
function createMenu(){
  console.log("entrou");
  const whereInit = document.getElementById("create-menu");
  const menuInicial = document.createElement('ul');

  menuInicial.innerHTML = '<li class="item" name="e"><a href="https://studioghibli.com.br/ghiblistore/livros/">BOOKS</a></li> <li class="item" name="e"><a href="https://studioghibli.com.br/categoria/games/">GAMES</a></li>';
  whereInit.appendChild(menuInicial);
}


document.getElementById("cabecalho").addEventListener("mouseout", hideCreatedMenu)
function hideCreatedMenu(){
  //console.log("testando hideCreatedMenu");
  const where = document.getElementById("create-menu");
  const menuInicial = document.getElementsByClassName("item");
  if (menuInicial){
    where.removeChild(menuInicial);
  }
}

document.getElementById("img-footer").addEventListener("mouseover", createSocialMediaButtons);
function createSocialMediaButtons(){
  console.log("socialmedia buttons");
}

document.getElementById("first-filter").addEventListener("change", myFunction);
function myFunction(){
  const element = document.getElementById("first-filter");
  const valorSel = element.options[element.selectedIndex].value;

  if (valorSel === "title-az"){
    const titleAZ = alfabeto(dataGhibli);
    const cardsAZ = [];
    console.log(titleAZ);

    for (let i = 0; i < titleAZ.length; i++) {
      cardsAZ.push(renderCardFilms(titleAZ[i]));
      i++;
    }
    const returnCardsAZ = cardsAZ.join(" ");
    document.getElementById("card-container").innerHTML = returnCardsAZ;
  }

  else if (valorSel === "lancamento"){
    const releaseDate = sortRelease(dataGhibli);
    const cardsRelease = [];
    console.log(releaseDate);

    for (let i = 0; i < releaseDate.length; i++) {
      cardsRelease.push(renderCardFilms(releaseDate[i]));
      i++;
    }
    const returnCardsRelease = cardsRelease.join(" ");
    document.getElementById("card-container").innerHTML = returnCardsRelease;
  }

  else if (valorSel === "rating"){
    const rating = sortRating(dataGhibli);
    const cardsRating = [];
    console.log(rating);

    for (let i = 0; i < rating.length; i++) {
      cardsRating.push(renderCardFilms(rating[i]));
      i++;
    }
    const returnCardsRating = cardsRating.join(" ");
    document.getElementById("card-container").innerHTML = returnCardsRating;
  }

  else {
    const percentRating = percentRating(dataGhibli);
    console.log(percentRating);
  }
//chart.js
}

document.getElementById("second-filter").addEventListener("change", chooseDirector);
function chooseDirector(){
  const element = document.getElementById("second-filter");
  const valorSel = element.options[element.selectedIndex].value;
  console.log(valorSel);
  const filterDirector = director(dataGhibli, valorSel);
  const directorArray = [];
  console.log(filterDirector);

  for (let i = 0; i < filterDirector.length; i++){
    directorArray.push(renderCardFilms(filterDirector[i]));
  }
  const returnCardsDirector = directorArray.join(" ");
  document.getElementById("card-container").innerHTML = returnCardsDirector;
}
