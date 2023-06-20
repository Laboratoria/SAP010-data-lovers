//import { example } from './data.js';

import data from './data/ghibli/ghibli.js';
<<<<<<< HEAD
import { sortAlphabet } from './data.js';

const selectElement = document.querySelector("#first-filter");
console.log(selectElement);


/* ToDo:
      Organizar DOM
      onChange ->
=======
import {} from './data.js';
import { title } from 'process';

const titles = data.films(title);

document.getElementById("start-event").addEventListener("click", myFunction);
>>>>>>> b0b5421 (atualizacoes html css js)


<<<<<<< HEAD
            ***Chamo os cards no main ou no data.js? No main mesmo? Sim.
*/

//console.log(data);
=======
function myFunction(){
  const element = document.getElementById("first-filter");
  const valorSel = element.options[element.selectedIndex].value;
  const textoSel = element.options[element.selectedIndex].text;
  console.log(valorSel);
  console.log(textoSel);

  if (valorSel === "title-az"){
    //document.createElement("section").innerHTML;

    }
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
  else {°
    const titulos = [];
    for (let i=0; i<data.films.length; i++) {
      const card = `<h1>${data.films[i].title}</h1>`;
      titulos.push(card);
  }
}


>>>>>>> b0b5421 (atualizacoes html css js)
//document.getElementById("start-events").addEventListener("click", );


//console.log(data.films[0].title);
//devolve um título.











