// Importa os dados dos países
// Importa os dados dos países
import countries from './data/countries/countries.js';
import data from './data/countries/countries.js';

// Seleciona os elementos do seletor, da lista de países e do seletor de continentes
const selectorElement = document.querySelector('#selector');
const countryListElement = document.querySelector('.bandeiras');
const continentSelectorElement = document.querySelector('#seletor_continent');

// Ordena os países em ordem alfabética
const orderByAlphabetical = () => {
  // Faz uma cópia do array de países e ordena em ordem alfabética
  const sortedCountries = data.countries.slice().sort((a, b) => a.name.common.localeCompare(b.name.common));
  // Renderiza a lista de países ordenada
  renderCountryList(sortedCountries);
};


// Filtra os países por subregião America do Sul
const filterBySouthAmerica = () => {
  // Filtra o array de países pela subregião selecionada
  const filteredCountries = data.countries.filter((country) => country.subregion === "South America");
  // Renderiza a lista de países filtrada
  renderCountryList(filteredCountries);
};

// Filtra os países por subregião 
const filterAmericaNorte = () => {
  // Filtra o array de países pela subregião selecionada
  const filteredCountries = data.countries.filter((country) => country.subregion === "Northern Europe");
  // Renderiza a lista de países filtrada
  renderCountryList(filteredCountries);
  };


  // Filtra os países por subregião América Central
const filterByCentralAmerica = () => {
  // Filtra o array de países pela subregião selecionada
  const filteredCountries = data.countries.filter((country) => country.subregion === "Central America");
  // Renderiza a lista de países filtrada
  renderCountryList(filteredCountries);
  };

  // Filtra os países por subregião 
const filterAsia= () => {
  // Filtra o array de países pela subregião selecionada
  const filteredCountries = data.countries.filter((country) => country.continent === "Asia");
  // Renderiza a lista de países filtrada
  renderCountryList(filteredCountries);
  };
  
  
  // Event listener para mudanças no seletor de sub-regiões
  continentSelectorElement.addEventListener('change', (event) => {
  // Verifica o valor do seletor de sub-regiões
  const value = event.target.value;
  if (value === 'amer_central') {
  // Filtra os países pela sub-região selecionada e renderiza a lista
  filterByCentralAmerica();
  } else if (value === 'amer_sul') {
  // Filtra os países pela sub-região selecionada e renderiza a lista
  filterBySouthAmerica();
  } else if (value === 'amer_norte') {
    // Filtra os países pela sub-região selecionada e renderiza a lista
    filterAmericaNorte();
    } /* else if (value === 'asia') {
      // Filtra os países pela sub-região selecionada e renderiza a lista
      filterAsia();
      } */
  // Adicione outras condições else if ou else para filtrar outros continentes/sub-regiões
  });

  

// Função para renderizar a lista de países
const renderCountryList = (countries) => {
  countryListElement.innerHTML = '';

  countries.forEach((country) => {
    const countryElement = document.createElement('div');
    countryElement.className = 'country';

    const imgElement = document.createElement('img');
    imgElement.src = country.flags.png;
    imgElement.alt = `Flag of ${country.name.common}`;

    const nameElement = document.createElement('p');
    nameElement.textContent = country.name.common;

    countryElement.appendChild(imgElement);
    countryElement.appendChild(nameElement);
    countryListElement.appendChild(countryElement);
  });
};


// Event listener para mudanças no seletor
selectorElement.addEventListener('change', (event) => {
  // Verifica o valor do seletor
  const value = event.target.value;
  if (value === 'country') {
    // Renderiza a lista de países não ordenada
    renderCountryList(data.countries.slice());
  } else if (value === 'alphabetical') {
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





