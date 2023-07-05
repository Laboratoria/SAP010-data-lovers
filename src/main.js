//import { example } from './data.js';

import data from './data/ghibli/ghibli.js';
import {alfabeto, sortRelease, sortRating, renderCardFilms, director} from './data.js';

const dataGhibli = data.films;

// const titles = data.films(title);
// const textoSel = element.options[element.selectedIndex].text;

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
function chooseDirector(dataGhibli){
  const element = document.getElementById("second-filter");
  const valorSel = element.options[element.selectedIndex].value;
  console.log(valorSel);
  const filterDirector = director(dataGhibli, valorSel);
  const directorArray = [];
  console.log(filterDirector);

//   for (let i = 0; i < filterDirector.length; i++){
//     directorArray.push(renderCardFilms(filterDirector[i]));
//   }
//   const returnCardsDirector = directorArray.join(" ");
//   document.getElementById("card-container").innerHTML = returnCardsDirector;
}

