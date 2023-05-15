// Importa os dados dos países
import { countriesBySubregion, countriesByContinents } from './data.js';

// Seleciona os elementos do seletor HTML, da lista de países e do seletor de continentes
const selectorElement = document.querySelector('#selector');
const countryListElement = document.querySelector('.bandeiras');
const continentSelectorElement = document.querySelector('#seletor_continent');
const populationResultElement = document.querySelector('#populationResult');

// Função para renderizar a lista de países
const renderCountryList = (countries) => {
  countryListElement.innerHTML = ''; // Limpa o conteúdo anterior da lista

  // Faz o loop em todos os países
  countries.forEach((country) => {
    const { name, capital, languages, population, area, flags } = country;

    const countryElement = document.createElement('div');
    countryElement.className = 'country';

    const imgElement = document.createElement('img');
    imgElement.src = flags.png;
    imgElement.alt = `Flag of ${name.common}`;

    const nameElement = document.createElement('p');
    nameElement.textContent = name.common;

    const capitalElement = document.createElement('p');
    capitalElement.textContent = `Capital: ${capital[0]}`;

    const languagesElement = document.createElement('p');
    const languageNames = Object.values(languages).join(', ');
    languagesElement.textContent = `Idioma: ${languageNames}`;

    const populationElement = document.createElement('p');
    populationElement.textContent = `População: ${population.toLocaleString('br-PT')}`;

    const areaElement = document.createElement('p');
    areaElement.textContent = `Área: ${area.toLocaleString('br-PT')} km²`;

    // Adiciona os elementos à div do país
    countryElement.appendChild(imgElement);
    countryElement.appendChild(nameElement);
    countryElement.appendChild(capitalElement);
    countryElement.appendChild(languagesElement);
    countryElement.appendChild(populationElement);
    countryElement.appendChild(areaElement);

    // Adiciona a div do país à lista de países
    countryListElement.appendChild(countryElement);
  });
};

// Função para filtrar os países com base na seleção de continente
const filterCountriesByContinent = (continent) => {
  let countries = [];

  if (continent === 'amer_central') {
    countries = countriesBySubregion.filterCentralAmerica();
  } else if (continent === 'amer_sul') {
    countries = countriesBySubregion.filterAmericaSul();
  } else if (continent === 'amer_norte') {
    countries = countriesBySubregion.filterAmericaNorte();
  } else if (continent === 'asia') {
    countries = countriesByContinents.filterAsia();
  } else if (continent === 'africa') {
    countries = countriesByContinents.filterAfrica();
  } else if (continent === 'oceania') {
    countries = countriesByContinents.filterOceania();
  } else if (continent === 'europa') {
    countries = countriesByContinents.filterEuropa();
  }

  renderCountryList(countries);
};

// Event listener para a mudança no seletor de continentes
continentSelectorElement.addEventListener('change', (event) => {
  const value = event.target.value;
  filterCountriesByContinent(value);
});

// Chamada inicial para renderizar a lista completa de países
renderCountryList(countriesBySubregion.countries());
