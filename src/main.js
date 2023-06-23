//import { example } from './data.js';

import data from './data/ghibli/ghibli.js';
import {} from './data.js';
import { title } from 'process';
import {sortAlphabet} from './data.js';

const titles = data.films(title);
const textoSel = element.options[element.selectedIndex].text;

document.getElementById("start-event").addEventListener("click", myFunction);


function myFunction(){
  const element = document.getElementById("first-filter");
  const valorSel = element.options[element.selectedIndex].value;
  const textoSel = element.options[element.selectedIndex].text;
  console.log(valorSel);
  console.log(textoSel);

  if (valorSel === "title-az"){
    sortAlphabet(valorSel);

    //document.createElement("section").innerHTML;
    document.getElementById("card-container").innerHTML = titulos;
  }
  else if (valorSel === "lancamento"){
    const lancamento = [];
    for (let i = 0; i < data.films.length; i++){
      lancamento.push(data.films[i].release_date);
    }
    console.log(lancamento);
  }
  else if (valorSel === "rating"){
    const rating = [];
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
