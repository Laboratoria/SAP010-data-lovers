/* // Importa a lista de países em JSON
import countries from "./countries.json";

// Objeto que mapeia as sub-regiões para identificadores
const subregions = {
"South America": "amer_sul",
"Central America": "amer_central",
"North America":"amer_norte"
};

// Objeto vazio que será preenchido com cada país mapeado para sua sub-região correspondente
const countrySubregions = {};

// Loop através de cada país para mapeá-lo para a sub-região correspondente
countries.forEach((country) => {
// Se a sub-região do país existe no objeto subregions
if (subregions[country.subregion]) {
// Se a sub-região ainda não tem nenhum país mapeado para ela, inicialize um array vazio para a sub-região
if (!countrySubregions[subregions[country.subregion]]) {
countrySubregions[subregions[country.subregion]] = [];
}
// Adicione o país ao array correspondente na sub-região
countrySubregions[subregions[country.subregion]].push(country);
}
});

// Função que retorna a lista de países da América do Sul
function filterAmericaSul() {
return countrySubregions.amer_sul || [];
}

// Função que retorna a lista de países da América Central
function filterCentralAmerica() {
return countrySubregions.amer_central || [];
}

// Função que retorna a lista de países da América do Norte
function filterAmericaNorte() {
return countrySubregions.amer_norte || [];
}

// Exporta um objeto com a lista completa de países e as funções de filtro por sub-região
export const countriesBySubregion = {
countries,
filterAmericaSul,
filterCentralAmerica,
filterAmericaNorte
};


//Objeto que mapeia cada continente para identificadores


const continents = {
"Asia": "asia",
"Africa": "africa",
"Oceania":"oceania",
"Europe":"europa"
};

// Objeto vazio que será preenchido com cada país mapeado para seu continente correspondente
const countryContinents = {};

// Loop através de cada país para mapeá-lo para o continente correspondente

// Percorre a lista de países e adiciona cada país ao seu continente correspondente
countries.forEach((country) => {
if (continents[country.continents]) {
    if (!countryContinents[continents[country.continents]]) {
    countryContinents[continents[country.continents]] = [];
    }
    countryContinents[continents[country.continents]].push(country);
}

  // Repita para outros continentes, conforme necessário
});


/* Função que retorna a lista de países da Ásia */
/*function filterAsia() {
    return countryContinents.asia || [];
}

// Função que retorna a lista de países da Europa
function filterEuropa() {
return countryContinents.europa || [];
}

// Função que retorna a lista de países da Oceania
function filterOceania() {
return countryContinents.oceania || [];
}
// Função que retorna a lista de países da Afica
function filterAfrica() {
return countryContinents.africa || [];
}

// Exporta um objeto com a lista completa de países e as funções de filtro por continente
export const countriesByContinents = {
countries,
filterAsia,
filterEuropa,
filterOceania,
filterAfrica,
};   */