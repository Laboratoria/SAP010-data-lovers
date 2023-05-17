
//==============FILTRAR A SUBREGIÃO E O CONTINENTE RENDERIZANDO==============

// Filtra os países por subregião
export const filterBySubregion = (subregion, array2) => {
  // Filtra o array de países pela subregião selecionada
  const filteredCountries = array2.countries.filter(
    (country) => country.subregion === subregion
  );
  return filteredCountries
  
};

//==============FILTRAR A SUBREGIÃO E O CONTINENTE RENDERIZANDO==============

// Filtra os países por continente
export const filterByContinent = (continent, array) => {
  // Filtra o array de países pelo continente selecionado
  /* console.log(array) */
  const filteredCountries = array.countries.filter((country) =>
    country.continents.includes(continent)
  
  );
  return filteredCountries
};

//==============FILTRAR por ordem alfabetica==============


// Ordena os países em ordem alfabética
// Ordena os países em ordem alfabética
export function orderByAlphabetical(array) {
  const filteredCountries = array.slice().sort((a, b) => a.name.common.localeCompare(b.name.common, 'en', { sensitivity: 'base' }));
  return filteredCountries;
}

//==============FILTRAR por total de população==============

// Função para calcular a população total de uma lista de países
export const calculatePopulation = (countries) => {
  return countries.reduce((totalPopulation, country) => {
    return totalPopulation + country.population;
  }, 0);
};





