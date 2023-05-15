// Importa os dados dos países
import { filterBySubregion, filterByContinent, orderByAlphabetical } from './data.js'; 
import data from "./data/countries/countries.js";

// Seleciona os elementos do seletor, da lista de países e do seletor de continentes
const selectorElement = document.querySelector("#selector");
const countryListElement = document.querySelector(".bandeiras");
const continentSelectorElement = document.querySelector("#seletor_continent");
const populationResultElement = document.querySelector("#populationResult");


/* 
// Ordena os países em ordem alfabética
const orderByAlphabetical = () => {
  // Faz uma cópia do array de países e ordena em ordem alfabética
  const sortedCountries = data.countries
    .slice()
    .sort((a, b) => a.name.common.localeCompare(b.name.common));
  // Renderiza a lista de países ordenada
  renderCountryList(sortedCountries);
}; */


//==============CRIAR EVENTLISTENERS AO ESCOLHER O CONTINENTE/SUBREGIÃO==============

// Event listener para mudanças no seletor de sub-regiões
continentSelectorElement.addEventListener("change", (event) => {
  // Verifica o valor do seletor de sub-regiões
  const value = event.target.value;
  if (value === "amer_central") {
    let amerCentral = filterBySubregion("Central America", data)
    // Filtra os países pela sub-região selecionada e renderiza a lista
    renderCountryList (amerCentral);
  } else if (value === "amer_sul") {
    let amerSul = filterBySubregion("South America", data)
    // Filtra os países pela sub-região selecionada e renderiza a lista
    renderCountryList (amerSul);
  } else if (value === "amer_norte") {
    let amerNorte = filterBySubregion("North America", data)
    // Filtra os países pela sub-região selecionada e renderiza a lista
    renderCountryList (amerNorte)


  } else if (value === "asia") {
    let asia = filterByContinent("Asia", data)
    renderCountryList (asia);
  } else if (value === "africa") {
    let africa = filterByContinent("Africa", data)
    renderCountryList (africa);
  } else if (value === "oceania") {
    let oceania = filterByContinent("Oceania", data);
    renderCountryList (oceania);
  } else if (value === "europa") {
    let europa = filterByContinent("Europe", data);
    renderCountryList (europa);
  } else {
    renderCountryList([]);
  }
  // Adicione outras condições else if ou else para filtrar outros continentes/sub-regiões
});

//==============PEGAR OS RESULTADOS DO FILTRO E COLOCAR EM DIV/P/IMG PARA MOSTRAR NO HTML==============

// criando elementos para o html
const renderCountryList = (countries) => {
  countryListElement.innerHTML = ""; //variavel inicia vazia
  // faz o loopinging em todos os países
  countries.forEach((country) => {
    const countryElement = document.createElement("div");
    countryElement.className = "country";

    const imgElement = document.createElement("img");
    imgElement.src = country.flags.png;
    imgElement.alt = `Flag of ${country.name.common}`;

    const nameElement = document.createElement("p");
    nameElement.textContent = country.name.common;

    const capitalElement = document.createElement("p");
    capitalElement.textContent = "Capital: " + country.capital;

    const languagesElement = document.createElement("p");
    languagesElement.textContent =
      "Idioma: " + Object.values(country.languages).join(", ");

    const populationElement = document.createElement("p");
    populationElement.textContent =
      "População: " + country.population.toLocaleString("br-PT"); //coloca pontos e virgulas nos numeros

    const areaElement = document.createElement("p");
    areaElement.textContent =
      "Área: " + country.area.toLocaleString("br-PT") + " km²";

    // cria o appendChild para adicionar os resultados na pagina
    countryElement.appendChild(imgElement);
    countryElement.appendChild(nameElement);
    countryElement.appendChild(capitalElement);
    countryElement.appendChild(languagesElement);
    countryElement.appendChild(populationElement);
    countryElement.appendChild(areaElement);
    countryListElement.appendChild(countryElement);
  });
};

//==============FILTRAR POR PAISES E POR ORDEM ALFABETICA==============

// Event listener para mudanças no seletor
selectorElement.addEventListener("change", (event) => {
  // Verifica o valor do seletor
  const value = event.target.value;
  if (value === "country") {
    // Renderiza a lista de países não ordenada
    renderCountryList(data.countries.slice());
  } else if (value === "alphabetical") {
    // Ordena os países em ordem alfabética e renderiza a lista
    orderByAlphabetical();
  }
});

/*
  O bloco "if" verifica se o valor selecionado no seletor é "country".
  Se for, chama a função "renderCountryList" passando uma cópia do array de países 
  (para evitar modificar o array original) usando o método "slice". 
  Isso renderiza a lista de países em ordem original (não ordenada).

  O bloco "else if" verifica se o valor selecionado no seletor é "alphabetical". 
  Se for, chama a função "orderByAlphabetical", que ordena o array de países 
  em ordem alfabética e chama a função "renderCountryList" com o array ordenado, 
  para renderizar a lista de países em ordem alfabética.
*/

/*=======================CALCULO TOTAL DA POPULAÇÃO ================*/

