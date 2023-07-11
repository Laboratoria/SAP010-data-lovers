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
document.getElementById("second-filter").addEventListener("change", myFunction);
function myFunction(){
  const element1 = document.getElementById("first-filter");
  const valorSel = element1.options[element1.selectedIndex].value;
  const element2 = document.getElementById("second-filter");
  const valorSelDirector = element2.options[element2.selectedIndex].value;
  console.log(valorSelDirector);
  const filterDirector = director(dataGhibli, valorSelDirector);
  console.log(filterDirector);


  if(valorSelDirector === "all"){
    const all = dataGhibli.slice();
    const allCards = [];
    for (let i = 0; i < all.length; i++) {
      allCards.push(renderCardFilms(all[i]));
    }
  }
  else {
    if (valorSel === "title-az"){
      const titleAZ = alfabeto(filterDirector);
      const cardsAZ = [];
      console.log(titleAZ);

      for (let i = 0; i < titleAZ.length; i++) {
        cardsAZ.push(renderCardFilms(titleAZ[i]));
      }
      const returnCardsAZ = cardsAZ.join(" ");
      document.getElementById("card-container").innerHTML = returnCardsAZ;
    }

    else if (valorSel === "lancamento"){
      const releaseDate = sortRelease(filterDirector);
      const cardsRelease = [];
      console.log(releaseDate);

      for (let i = 0; i < releaseDate.length; i++) {
        cardsRelease.push(renderCardFilms(releaseDate[i]));
      }
      const returnCardsRelease = cardsRelease.join(" ");
      document.getElementById("card-container").innerHTML = returnCardsRelease;
    }

    else if (valorSel === "rating"){
      const rating = sortRating(filterDirector);
      const cardsRating = [];
      console.log(rating);

      for (let i = 0; i < rating.length; i++) {
        cardsRating.push(renderCardFilms(rating[i]));
      }
      const returnCardsRating = cardsRating.join(" ");
      document.getElementById("card-container").innerHTML = returnCardsRating;
    }

    else {
      console.log(valorSel);
    }
  }
}


const radioInputs = document.querySelectorAll('input[type="radio"]');
// Attach event listener to each radio input
radioInputs.forEach(function(radioInput) {
  radioInput.addEventListener('change', function() {
    // Handle radio input change event
    console.log(this.value);
    const valorSel = this.value;
    console.log(valorSel);
  });
});

// document.getElementById("second-filter").addEventListener("change", chooseDirector);
// function chooseDirector(){
//   const element = document.getElementById("second-filter");
//   const valorSelDirector = element.options[element.selectedIndex].value;
//   console.log(valorSelDirector);
//   const filterDirector = director(dataGhibli, valorSelDirector);
//   const directorArray = [];
//   console.log(filterDirector);

//   //const orderArray = myFunction(filterDirector);
//   for (let i = 0; i < filterDirector.length; i++){
//     directorArray.push(renderCardFilms(filterDirector[i]));
//   }
//   //console.log(directorArray);
//   const orderArray = myFunction(directorArray);
//   console.log(orderArray);

  // const returnCardsDirector = directorArray.join(" ");
  // document.getElementById("card-container").innerHTML = returnCardsDirector;
//}
