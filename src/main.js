import data from "./data/countries/countries.js";
import { filtrarPorContinente } from "./data.js";
import {filtrarPorIndependencia} from "./data.js";

//aplicar o filtro independencia no DOM
//transformar onchange para adventlistenner
//fazer os testes

const exibirFlagsDiv = document.getElementById("exibirFlags");

const continente = document.getElementById("continente");
continente.addEventListener("change", () => {
  const resultFiltroContinente = filtrarPorContinente(
    data.countries,
    continente.value
  );
  exibirFlagsDiv.innerHTML = "";
  paises(resultFiltroContinente);
});

const independente = document.getElementById("filtro-independente");
independente.addEventListener("change", () => {
  const resultadofiltroIndependecia = filtrarPorIndependencia(
    
    data.countries,
    independente.value
   
  );
  exibirFlagsDiv.innerHTML = "";
  paises(resultadofiltroIndependecia);
  
});


function paises(array) {
  for (let i = 0; i < array.length; i++) {
    const exibirFlags = array[i].flags.png;
    const exibirName = array[i].name.common;
    const exibirPopulation = array[i].population;

    // template string
    const template = `
    <div class= "bandeiras">
    <img src ="${exibirFlags}">
    <h3>${exibirName}</h3>
    <p> População ${exibirPopulation}</p>
    </div>`;

    exibirFlagsDiv.innerHTML = exibirFlagsDiv.innerHTML + template;
  }
}



paises(data.countries);
