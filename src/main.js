// Importa os dados dos países
/* import { countriesBySubregion, countriesByContinents } from './data.js'; */
import data from "./data/countries/countries.js";

// Seleciona os elementos do seletor, da lista de países e do seletor de continentes
const selectorElement = document.querySelector("#selector");
const countryListElement = document.querySelector(".bandeiras");
const continentSelectorElement = document.querySelector("#seletor_continent");
const populationResultElement = document.querySelector("#populationResult");

// Ordena os países em ordem alfabética
const orderByAlphabetical = () => {
  // Faz uma cópia do array de países e ordena em ordem alfabética
  const sortedCountries = data.countries
    .slice()
    .sort((a, b) => a.name.common.localeCompare(b.name.common));
  // Renderiza a lista de países ordenada
  renderCountryList(sortedCountries);
};

//==============FILTRAR POR SUBREGIÃO (AS AMERICAS)==============

// Filtra os países por subregião America do Sul
const filterBySouthAmerica = () => {
  // Filtra o array de países pela subregião selecionada
  const filteredCountries = data.countries.filter(
    (country) => country.subregion === "South America"
  );
  // Renderiza a lista de países filtrada
  renderCountryList(filteredCountries);
};

// Filtra os países por subregião
const filterByAmericaNorte = () => {
  // Filtra o array de países pela subregião selecionada
  const filteredCountries = data.countries.filter(
    (country) => country.subregion === "North America"
  );
  // Renderiza a lista de países filtrada
  renderCountryList(filteredCountries);
};

// Filtra os países por subregião América Central
const filterByCentralAmerica = () => {
  // Filtra o array de países pela subregião selecionada
  const filteredCountries = data.countries.filter(
    (country) => country.subregion === "Central America"
  );
  // Renderiza a lista de países filtrada
  renderCountryList(filteredCountries);
};

//==============FILTRAR POR CONTINENTE==============

const filterByAsia = () => {
  // Filtra o array de países pelo continente selecionado
  const filteredCountries = data.countries.filter(
    (country) => country.continents === "Asia"
  );
  // Renderiza a lista de países filtrada
  renderCountryList(filteredCountries);
};
const filterByAfrica = () => {
  // Filtra o array de países pelo continente selecionado
  const filteredCountries = data.countries.filter(
    (country) => country.continents === "Africa"
  );
  // Renderiza a lista de países filtrada
  renderCountryList(filteredCountries);
};
const filterByOceania = () => {
  // Filtra o array de países pelo continente selecionado
  const filteredCountries = data.countries.filter(
    (country) => country.continents === "Oceania"
  );
  // Renderiza a lista de países filtrada
  renderCountryList(filteredCountries);
};

const filterByEuropa = () => {
  // Filtra o array de países pelo continente selecionado
  const filteredCountries = data.countries.filter(
    (country) => country.continents === "Europa"
  );
  // Renderiza a lista de países filtrada
  renderCountryList(filteredCountries);
};

//==============FILTRAR A SUBREGIÃO E O CONTINENTE RENDERIZANDO==============

// Filtra os países por subregião
const filterBySubregion = (subregion) => {
  // Filtra o array de países pela subregião selecionada
  const filteredCountries = data.countries.filter(
    (country) => country.subregion === subregion
  );
  // Renderiza a lista de países filtrada
  renderCountryList(filteredCountries);
};

// Filtra os países por continente
const filterByContinent = (continent) => {
  // Filtra o array de países pelo continente selecionado
  const filteredCountries = data.countries.filter((country) =>
    country.continents.includes(continent)
  );
  // Renderiza a lista de países filtrada
  renderCountryList(filteredCountries);
};

//==============CRIAR EVENTLISTENERS AO ESCOLHER O CONTINENTE/SUBREGIÃO==============

// Event listener para mudanças no seletor de sub-regiões
continentSelectorElement.addEventListener("change", (event) => {
  // Verifica o valor do seletor de sub-regiões
  const value = event.target.value;
  if (value === "amer_central") {
    // Filtra os países pela sub-região selecionada e renderiza a lista
    filterBySubregion("Central America");
  } else if (value === "amer_sul") {
    // Filtra os países pela sub-região selecionada e renderiza a lista
    filterBySubregion("South America");
  } else if (value === "amer_norte") {
    // Filtra os países pela sub-região selecionada e renderiza a lista
    filterBySubregion("North America");
  } else if (value === "asia") {
    // Filtra os países pela sub-região selecionada e renderiza a lista
    filterByContinent("Asia");
  } else if (value === "africa") {
    filterByContinent("Africa");
  } else if (value === "oceania") {
    filterByContinent("Oceania");
  } else if (value === "europa") {
    filterByContinent("Europe");
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



