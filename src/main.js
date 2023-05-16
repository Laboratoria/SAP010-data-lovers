// Importa os dados dos países
import { filterBySubregion, filterByContinent, orderByAlphabetical } from './data.js'; 
import data from "./data/countries/countries.js";

// Seleciona os elementos do seletor, da lista de países e do seletor de continentes
const selectorElement = document.querySelector("#selector");
const countryListElement = document.querySelector(".bandeiras");
const continentSelectorElement = document.querySelector("#seletor_continent");



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
  countryListElement.innerHTML = ""; // variável inicia vazia
  // faz o looping em todos os países
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
      "População: " + country.population.toLocaleString("pt-BR"); // coloca pontos e vírgulas nos números

    const areaElement = document.createElement("p");
    areaElement.textContent =
      "Área: " + country.area.toLocaleString("pt-BR") + " km²";

    // Adicionar os elementos criados ao elemento do país
    countryElement.appendChild(imgElement);
    countryElement.appendChild(nameElement);
    countryElement.appendChild(capitalElement);
    countryElement.appendChild(languagesElement);
    countryElement.appendChild(populationElement);
    countryElement.appendChild(areaElement);

    // Adicionar o elemento do país à lista
    countryListElement.appendChild(countryElement);
  });
};


///==============FILTRAR POR PAÍSES E POR ORDEM ALFABÉTICA==============

// Chama a função orderByAlphabetical com o array de países
let alphabetical = orderByAlphabetical(data.countries);
console.log(alphabetical); // Certifique-se de chamar a função orderByAlphabetical corretamente

// Event listener para mudanças no seletor
selectorElement.addEventListener("change", (event) => {
  const value = event.target.value;
  if (value === "country") {
    renderCountryList(data.countries.slice());
  } else if (value === "alphabetical") {
    alphabetical = orderByAlphabetical(data.countries.slice()); // Atualiza a ordem alfabética
    renderCountryList(alphabetical);
  }
});




/*=======================CALCULO TOTAL DA POPULAÇÃO ================*/

