const data = {
  getMovies: async function () {
    try {
      const response = await fetch('./data/ghibli/ghibli.json');
      const data = await response.json();
      return data.films || [];
    } catch (error) {
      console.log('Ocorreu um erro ao obter os dados dos filmes:', error);
      return [];
    }
  },

  getDirectors: async function () {
    try {
      const response = await fetch('./data/ghibli/ghibli.json');
      const data = await response.json();
      const directors = new Set(data.films.map((film) => film.director));
      return Array.from(directors);
    } catch (error) {
      console.log('Ocorreu um erro ao obter os diretores:', error);
      return [];
    }
  }
};

// Função para transformar os objetos em array
export function convertToArray(obj) {
  if (!obj || typeof obj !== 'object') {
    return [];
  }
  return Object.keys(obj).map(key => obj[key]);
}

// Função para filtrar os filmes por diretor
export function filterByDirector(movies, director) {
  if (director === "all") {
    return movies;
  } else {
    return movies.filter(movie => movie.director === director);
  }
}

// Função para filtrar os personagens por filme
export function filterCharactersByMovie(movies, title) {
  if (title === "all") {
    const allCharacters = movies.flatMap(movie => movie.people);
    return allCharacters;
  }
  else {
    return movies.filter(movie => movie.title === title)
      .map(movie => movie.people)
      .flat();
  }
}

// Função para filtrar os personagens por gênero
export function filterByGender(movies, gender) {
  if (gender === "all") {
    return movies.flatMap(movie => movie.people);
  } else {
    const filteredMovies = movies.filter(movie => {
      return movie.people.some(person => person.gender === gender);
    });

    return filteredMovies.flatMap(movie => movie.people);
  }
}

// Função para ordenar os filmes em ordem alfabética de A-Z
export function sortByTitleAZ(movies) {
  return movies.sort((a, b) => a.title.localeCompare(b.title));
}

// Função para ordenar os filmes em ordem alfabética de Z-A
export function sortByTitleZA(movies) {
  return movies.sort((a, b) => b.title.localeCompare(a.title));
}

// Função para ordenar os filmes por ano de lançamento (do mais antigo ao mais recente)
export function sortByReleaseYearOld(movies) {
  return movies.sort((a, b) => a.release_date - b.release_date);
}
// Função para ordenar os filmes por ano de lançamento (mais recente ao mais antigo)
export function sortByReleaseYearNew(movies) {
  return movies.sort((a, b) => b.release_date - a.release_date);
}
// Função para ordenar os filmes por nota do Rotten Tomatoes (do maior ao menor)
export function sortByRottenTomatoesHigh(movies) {
  return movies.sort((a, b) => b.rt_score - a.rt_score);
}
// Função para ordenar os filmes por nota do Rotten Tomatoes (do menor ao maior)
export function sortByRottenTomatoesLow(movies) {
  return movies.sort((a, b) => a.rt_score - b.rt_score);
}

//AINDA NAO
// Função para calcular as estatísticas de gênero dos personagens por filme
export function calculateGenderStats(movies, movieTitle) {
  const characters = filterCharactersByMovie(movies, movieTitle);
  const totalCharacters = characters.length;
  const femaleCharacters = characters.filter(character => character.gender === 'Female').length;
  const maleCharacters = characters.filter(character => character.gender === 'Male').length;
  const femalePercentage = (femaleCharacters / totalCharacters) * 100;
  const malePercentage = (maleCharacters / totalCharacters) * 100;

  return {
    totalCharacters,
    femaleCharacters,
    maleCharacters,
    femalePercentage,
    malePercentage
  };
}

export let movies = [];

fetch('./data/ghibli/ghibli.json')
  .then(response => response.json())
  .then(data => {
    movies = data.films;
  })
  .catch(error => {
    console.error('Ocorreu um erro ao carregar os filmes:', error);
  });

export { data };
