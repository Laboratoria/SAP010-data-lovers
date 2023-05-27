import { data } from "./data.js";
import { filterByDirector, filterByGender, filterCharactersByMovie, sortByTitleAZ, sortByTitleZA, sortByReleaseYearOld, sortByReleaseYearNew, sortByRottenTomatoesHigh, sortByRottenTomatoesLow, calculateGenderStats } from './data.js';
import { movies } from './data.js';

// MENU HAMBURGUER


const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

//FILTROS

async function loadDirectors() {
  try {
    const directors = await data.getDirectors();
    const directorFilter = document.getElementById("director-filter");
    while (directorFilter.firstChild) {
      directorFilter.removeChild(directorFilter.firstChild);
    }

    // Adicionar opções
    const allOption = document.createElement("option");
    allOption.value = "all";
    allOption.textContent = "Todos";
    directorFilter.appendChild(allOption);

    directors.forEach(function (director) {
      const option = document.createElement("option");
      option.value = director;
      option.textContent = director;
      directorFilter.appendChild(option);
    });
  } catch (error) {
    console.log('Ocorreu um erro ao carregar os diretores:', error);
  }
}


document.addEventListener('DOMContentLoaded', function () {
  const directorFilter = document.getElementById('director-filter');

  directorFilter.addEventListener('change', function () {
    const selectedDirector = directorFilter.value;
    const filteredMovies = filterByDirector(movies, selectedDirector);
    showMovies(filteredMovies);
    console.log(filteredMovies);
  });


  loadDirectors();
  loadMovies();


  async function loadMovies() {
    try {
      const movies = await data.getMovies();
      const movieFilter = document.getElementById("movieFilter");
      while (movieFilter.firstChild) {
        movieFilter.removeChild(movieFilter.firstChild);
      }

      // Adicionar opções
      const allOption = document.createElement("option");
      allOption.value = "all";
      allOption.textContent = "Todos";
      movieFilter.appendChild(allOption);

      movies.forEach(function (movies) {
        const option = document.createElement("option");
        option.value = movies.title;
        option.textContent = movies.title;
        movieFilter.appendChild(option);
      });

      genderFilter.addEventListener('change', function () {

        const selectedGender = genderFilter.value;
        const filteredMovies = filterByGender(movies, selectedGender);
        showCharacter(filteredMovies);
        console.log(filteredMovies);
      });
    }
    catch (error) {
      console.log('Ocorreu um erro ao carregar os personagens:', error);
    }
  }

  window.addEventListener('DOMContentLoaded', loadMovies); {
    const movieFilter = document.getElementById('movieFilter');

    movieFilter.addEventListener('change', function () {
      const selectedMovie = movieFilter.value;
      const filteredCharacter = filterCharactersByMovie(movies, selectedMovie);
      showCharacter(filteredCharacter);
      console.log(filteredCharacter);
    })
  }
  sortAZButton.addEventListener('click', function () {
    const sortedAZ = sortAZButton.value;
    const sortedMovies = sortByTitleAZ(movies, sortedAZ);
    showMovies(sortedMovies);
    console.log(sortedMovies);
  });
  sortZAButton.addEventListener('click', function () {
    const sortedZA = sortZAButton.value;
    const sortedMovies = sortByTitleZA(movies, sortedZA);
    showMovies(sortedMovies);
    console.log(sortedMovies);
  });
  sortReleaseYearButtonOld.addEventListener('click', function () {
    const sortedYear = sortReleaseYearButtonOld.value;
    const sortedMovies = sortByReleaseYearOld(movies, sortedYear);
    showMovies(sortedMovies);
    console.log(sortedMovies);
  });
  sortReleaseYearButtonNew.addEventListener('click', function () {
    const sortedYear = sortReleaseYearButtonNew.value;
    const sortedMovies = sortByReleaseYearNew(movies, sortedYear);
    showMovies(sortedMovies);
    console.log(sortedMovies);
  });
  sortRottenTomatoesButtonHigh.addEventListener('click', function () {
    const sortedRT = sortRottenTomatoesButtonHigh.value;
    const sortedMovies = sortByRottenTomatoesHigh(movies, sortedRT);
    showMovies(sortedMovies);
    console.log(sortedMovies);
  });
  sortRottenTomatoesButtonLow.addEventListener('click', function () {
    const sortedRT = sortRottenTomatoesButtonLow.value;
    const sortedMovies = sortByRottenTomatoesLow(movies, sortedRT);
    showMovies(sortedMovies);
    console.log(sortedMovies);
  });

  function showMovies(movies) {
    const moviesContainer = document.getElementById('cards-container');
    moviesContainer.innerHTML = ''; // Limpa o conteúdo atual

    movies.forEach(movie => {
      const movieCard = createMovieCard(movie);
      moviesContainer.appendChild(movieCard);
    });
  }

  function createMovieCard(movie) {
    const card = document.createElement('div');
    card.classList.add('movie-card');

    // Frente do card
    const front = document.createElement('div');
    front.classList.add('card-front');
    front.innerHTML = `
    <img src="${movie.poster}" alt="${movie.title}" />
    <h3>${movie.title}</h3>
    <h4>Ano de Lançamento: ${movie.release_date}</h4>
  `;

    // Verso do card
    const back = document.createElement('div');
    back.classList.add('card-back');
    back.innerHTML = `
    <h3>${movie.description}</h3>
    <h4>Diretor: ${movie.director}</h4>
    <h4>Nota no Rotten Tomatoes: ${movie.rt_score}</h4>
  `;

    card.appendChild(front);
    card.appendChild(back);

    // Adicione qualquer lógica adicional para interatividade, como o efeito de flip do card

    return card;
  }


  function showCharacter(characters) {
    const characterContainer = document.getElementById('cards-container');
    characterContainer.innerHTML = ''; // Limpa o conteúdo atual

    characters.forEach(charac => {
      const characterCard = createCharacterCard(charac);
      characterContainer.appendChild(characterCard);
    });
  }

  function createCharacterCard(charac) {
    const card = document.createElement('div');
    card.classList.add('character-card');

    // Frente do card
    const front = document.createElement('div');
    front.classList.add('card-front');
    front.innerHTML = `
    <img src="${charac.img}" alt="${charac.name}" />
    <h3>${charac.name}</h3>
    <h4>Idade: ${charac.age}</h4>
  `;

    // Verso do card
    const back = document.createElement('div');
    back.classList.add('card-back');
    back.innerHTML = `
    <h4>Espécie: ${charac.specie}</h4>
    <h4>Gênero: ${charac.gender}</h4>
    <h4>Cor dos Olhos: ${charac.eye_color}</h4>
    <h4>Cor do Cabelo: ${charac.hair_color}</h4>
  `;

    card.appendChild(front);
    card.appendChild(back);

    // Adicione qualquer lógica adicional para interatividade, como o efeito de flip do card

    return card;
  }
})
