//import { functionDiretor,  } from './data.js';
import { data } from "./data.js";

// FILMOGRAFIA NOVA

function createMovieCard(films) {
  const container = document.getElementById('movie-container');
  const card = document.createElement("div");
  card.classList.add("card");
  
  const front = document.createElement("div");
  front.classList.add("front");
  
  const image = document.createElement("img");
  image.src = films.poster;
  
  const title = document.createElement("h3");
  title.textContent = films.title;  
  
  const releaseDate = document.createElement("p");
  releaseDate.textContent = "Ano de lançamento: " + films.release_date;
  
  front.appendChild(image);
  front.appendChild(title);
  front.appendChild(releaseDate);
  
  const back = document.createElement("div");
  back.classList.add("back");

  const director = document.createElement("h4");
  director.textContent = "Diretor: " +  films.director;
  
  const description = document.createElement("p");
  description.textContent =  "Sinopse: " + films.description;

  const score = document.createElement("p");
  score.textContent = "Nota no Rotten Tomatoes: " +  films.rt_score;
  
  back.appendChild(description);
  back.appendChild(director)
  back.appendChild(score)
  
  card.appendChild(front);
  card.appendChild(back);
  container.appendChild(card);
  
  // Adicionar função de flip ao card
  card.addEventListener("click", function() {
    card.classList.toggle("flipped");
    console.log(1);
  });
  
  return card;
}

// Carregar dados de um arquivo JSON
fetch('./data/ghibli/ghibli.json')
  .then(ghibli => ghibli.json())
  .then(data => {
    for(let i = 0; i < data.films.length; i++ ){
      const filme = data.films[i];
      console.log(filme);
      createMovieCard(filme);
    }

    //criar um loop para converter o array for it
    //createMovieCard(data.films);
  })
  .catch(error => {
    console.error('Ocorreu um erro ao carregar os dados:', error);
  });

//FILTROS 

  
document.addEventListener("DOMContentLoaded", function() {
  // Filtrar por filme
  const movieFilter = document.getElementById("movie-filter");
  movieFilter.addEventListener("change", function() {
    const selectedMovie = movieFilter.value;
    filterMovies(selectedMovie);
  });
  
  // Filtrar por diretor
  const directorFilter = document.getElementById("director-filter");
  directorFilter.addEventListener("change", function() {
    const selectedDirector = directorFilter.value;
    filterDirectors(selectedDirector);
  });
  
  // Ordenar filmes
  const sortOrder = document.getElementById("sort-order");
  sortOrder.addEventListener("change", function() {
    const selectedOrder = sortOrder.value;
    sortMovies(selectedOrder);
  });
  
  // Filtrar por gênero
  const genderFilter = document.getElementById("gender-filter");
  genderFilter.addEventListener("change", function() {
    const selectedGender = genderFilter.value;
    filterGender(selectedGender);
  });
  
  // Carregar filmes e diretores
  loadMovies();
  loadDirectors();
});

async function loadMovies() {
  try {
    const movies = await data.getMovies();
    if (!Array.isArray(movies)) {
      console.log('Os dados dos filmes não são válidos.');
    }
    
    const movieFilter = document.getElementById("movie-filter");
  
    // Limpar opções existentes
    while (movieFilter.firstChild) {
      movieFilter.removeChild(movieFilter.firstChild);
    }
  
    // Adicionar opções
    const allOption = document.createElement("option");
    allOption.value = "all";
    allOption.textContent = "Todos";
    movieFilter.appendChild(allOption);
  
    movies.forEach(function(movie) {
      const option = document.createElement("option");
      option.value = movie.title;
      option.textContent = movie.title;
      movieFilter.appendChild(option);
    });
  
    // Atualizar a visualização dos filmes
    showMovies(movies);
  } catch (error) {
    console.log('Ocorreu um erro ao carregar os filmes:', error);
  }
}

async function loadDirectors() {
  try {
    const directors = await data.getDirectors();
    const directorFilter = document.getElementById("director-filter");
  
    // Limpar opções existentes
    while (directorFilter.firstChild) {
      directorFilter.removeChild(directorFilter.firstChild);
    }
  
    // Adicionar opções
    const allOption = document.createElement("option");
    allOption.value = "all";
    allOption.textContent = "Todos";
    directorFilter.appendChild(allOption);
  
    directors.forEach(function(director) {
      const option = document.createElement("option");
      option.value = director;
      option.textContent = director;
      directorFilter.appendChild(option);
    });
  } catch (error) {
    console.log('Ocorreu um erro ao carregar os diretores:', error);
  }
}

// Resto do código permanece igual...
function filterMovies(selectedMovie) {
  const movies = data.getMovies();
  
  if (selectedMovie === "all") {
    showMovies(movies);
  } else {
    const filteredMovies = movies.filter(function(movie) {
      return movie.title === selectedMovie;
    });
    showMovies(filteredMovies);
  }
}

function filterDirectors(selectedDirector) {
  const movies = data.getMovies();
  
  if (selectedDirector === "all") {
    showMovies(movies);
  } else {
    const filteredMovies = movies.filter(function(movie) {
      return movie.director === selectedDirector;
    });
    showMovies(filteredMovies);
  }
}

function sortMovies(selectedOrder) {
  const movies = data.getMovies();
  
  if (selectedOrder === "az") {
    movies.sort(function(a, b) {
      return a.title.localeCompare(b.title);
    });
  } else if (selectedOrder === "za") {
    movies.sort(function(a, b) {
      return b.title.localeCompare(a.title);
    });
  } else if (selectedOrder === "year") {
    movies.sort(function(a, b) {
      return a.release_date - b.release_date;
    });
  }
  
  showMovies(movies);
}

function filterGender(selectedGender) {
  const movies = data.getMovies();
  
  if (selectedGender === "all") {
    showMovies(movies);
  } else {
    const filteredMovies = movies.filter(function(movie) {
      const femaleCount = movie.people.filter(function(person) {
        return person.gender === "Female";
      }).length;
      const maleCount = movie.people.filter(function(person) {
        return person.gender === "Male";
      }).length;
      
      if (selectedGender === "female") {
        return femaleCount > maleCount;
      } else if (selectedGender === "male") {
        return maleCount > femaleCount;
      }
    });
    
    showMovies(filteredMovies);
  }
}

function showMovies(movies) {
  const cardsContainer = document.getElementById("cards-container");
  
  // Limpar cards existentes
  while (cardsContainer.firstChild) {
    cardsContainer.removeChild(cardsContainer.firstChild);
  }
  
  movies.forEach(function(movie) {
    const card = createFilterCard(movie);
    cardsContainer.appendChild(card);
  });
}

function createFilterCard(movie) {
  const card = document.createElement("div");
  card.classList.add("card");
  
  const front = document.createElement("div");
  front.classList.add("front");
  
  const image = document.createElement("img");
  image.src = movie.poster;
  
  const releaseDate = document.createElement("p");
  releaseDate.textContent = "Ano de lançamento: " + movie.release_date;
  
  const title = document.createElement("h3");
  title.textContent = movie.title;
  
  front.appendChild(image);
  front.appendChild(title);
  front.appendChild(releaseDate);
  
  
  const back = document.createElement("div");
  back.classList.add("back");
  
  const description = document.createElement("p");
  description.textContent = movie.description;
  
  back.appendChild(description);
  
  card.appendChild(front);
  card.appendChild(back);
  
  // Adicionar função de flip ao card
  card.addEventListener("click", function() {
    card.classList.toggle("flipped");
  });
  
  return card;
}
