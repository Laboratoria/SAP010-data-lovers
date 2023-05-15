

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
  console.log(array)
  const filteredCountries = array.countries.filter((country) =>
    country.continents.includes(continent)
  
  );
  return filteredCountries
 
};

/* // Ordena os países em ordem alfabética
export const orderByAlphabetical = () => {
  // Faz uma cópia do array de países e ordena em ordem alfabética
  const sortedCountries = data.countries
    .slice()
    .sort((a, b) => a.name.common.localeCompare(b.name.common));
  // Renderiza a lista de países ordenada
  renderCountryList(sortedCountries);
};
 */


