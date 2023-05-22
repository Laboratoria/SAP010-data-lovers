//import { example } from './data.js';
// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

//import ghibli from './data/ghibli/ghibli.js';
//import data from './data/ghibli/ghibli.js';
function createMovieCards(films) {
  const container = document.getElementById('movie-container');

  films.forEach((films) => {
    const card = document.createElement('div');
    card.classList.add('card');

    const image = document.createElement('img');
    image.src = films.poster;
    image.alt = films.title;

    const title = document.createElement('title-h3');
    title.textContent = films.title;

    const date = document.createElement('release_date');
    date.textContent = films.release_date;

    card.appendChild(image);
    card.appendChild(title);
    card.appendChild(date);
    container.appendChild(card);
  });
}
// Carregar dados de um arquivo JSON
fetch('./data/ghibli/ghibli.json')
  .then(ghibli => ghibli.json())
  .then(data => {
    createMovieCards(data.films);
  })
  .catch(error => {
    console.error('Ocorreu um erro ao carregar os dados:', error);
  });


//console.log(example, data);
