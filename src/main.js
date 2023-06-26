//import { example } from './data.js';

import data from './data/ghibli/ghibli.js';
import {sortAlphabet, sortRating, sortRealease} from './data.js';

// const titles = data.films(title);
// const textoSel = element.options[element.selectedIndex].text;

document.getElementById("start-event").addEventListener("click", myFunction);
document.getElementById("first-filter").addEventListener("change", myFunction);


function myFunction(){
  const element = document.getElementById("first-filter");
  const valorSel = element.options[element.selectedIndex].value;

  if (valorSel === "title-az"){
    
    document.getElementById("card-container").innerHTML = titleAZ;
  }
  else if (valorSel === "lancamento"){
    const lancamento = sortRealease(data.films.release_date);
    for (let i = 0; i < data.films.length; i++){
      lancamento.push(data.films[i].release_date);
    }
    console.log(lancamento);
  }
  else if (valorSel === "rating"){
    const rating = sortRating(data.films.rating);
    for (let i=0; i<data.films.length; i++){
      rating.push(data.films[i].rt_score);
    }
    console.log(rating.sort());
  }
  else {
    const titulos = [];
    for (let i=0; i<data.films.length; i++) {
      const card = `<h1>${data.films[i].title}</h1>`;
      titulos.push(card);
    }
  }
}

//document.getElementById("start-events").addEventListener("click", );


//console.log(data.films[0].title);
//devolve um título.
