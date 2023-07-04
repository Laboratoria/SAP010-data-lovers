//import { example } from './data.js';

import data from './data/ghibli/ghibli.js';
import {alfabeto, sortRelease, sortRating, renderCardFilms} from './data.js';

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
    document.getElementById("card-container").innerHTML = cardsRelease;
  }

  else if (valorSel === "rating"){
    const rating = sortRating(dataGhibli);
    const cardsRating = [];
    console.log(rating);

    for (let i = 0; i < rating.length; i++) {
      cardsRating.push(renderCardFilms(rating[i]));
      i++;
    }
    document.getElementById("card-container").innerHTML = cardsRating;
  }

  else {
    const all = dataGhibli
    const displayAll = [];
    console.log(all);

    for(let i = 0; i < dataGhibli.length; i++) {
      displayAll.push(renderCardFilms(all[i]));
      i++;
    }
    document.getElementById("card-container").innerHTML = displayAll;

  }
}

//function renderCardsCharacters(data)
// document.getElementById("start-event").addEventListener("click", renderCardFilms);
// const printCard = [];
// function renderCardFilms(dataGhibli){
//   const printCard = dataGhibli.map((dataGhibli) => {
//     const card = `
//     <div class = "card">
//       <img src="${data.poster}" alt="poster">
//       <table>
//         <tr>
//           <th>${data.title}</th>
//           <th>${data.rt_score}</th>
//         </tr>
//         <tr>
//           <th>${data.director}</th>
//           <th>${data.realease_date}</th>
//         </tr>
//       </table>
//     </div>
//     `;
//     return printCard;
//   });
//   document.querySelector("#card-container").innerHTML = printCard.join("");
// }

