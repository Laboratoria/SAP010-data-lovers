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

document.getElementById("totoro-logo").addEventListener("mouseout", originalColor);
function originalColor(){
  const originalColor = document.getElementById("totoro-logo");
  originalColor.classList.remove("invert-color");
}

document.getElementById("totoro-logo").addEventListener("click", createMenu);
function createMenu(){
  const whereInit = document.getElementById("create-menu");
 //const menuInicial = document.createElement('div');

  whereInit.innerHTML = '<ul class=create-ul><li class="item" name="e"><a class="item" href="https://studioghibli.com.br/ghiblistore/livros/"> Books </a></li>  <li class="item" name="e"><a class="item" href="https://studioghibli.com.br/categoria/games/">Games </a></li></ul>';
  //whereInit.appendChild(menuInicial);
}


// document.getElementById("cabecalho").addEventListener("mouseout", hideCreatedMenu)
// function hideCreatedMenu(){
//   //console.log("testando hideCreatedMenu");
//   const where = document.getElementById("create-menu");
//   const menuInicial = document.querySelector(".create-ul");
//   if (menuInicial){
//     console.log(where);
//     console.log(menuInicial);
//     where.removeChild(menuInicial);
//   }
//}

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

  else if (valorSel === "all"){
    const allCards = [];
    for (let i=0; i<dataGhibli.length; i++){
      allCards.push(renderCardFilms(dataGhibli[i]));
    }
    const returnAllCards = allCards.join(" ");
    document.getElementById("card-container").innerHTML = returnAllCards;
  }

  else {
    console.log(valorSel);
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

  const orderArray = myFunction(filterDirector);
  for (let i = 0; i < filterDirector.length; i++){
    directorArray.push(renderCardFilms(orderArray[i]));
  }


  const returnCardsDirector = directorArray.join(" ");
  document.getElementById("card-container").innerHTML = returnCardsDirector;
}
