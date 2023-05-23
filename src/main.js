//import { functionDiretor,  } from './data.js';

//FILMOGRAFIA
function createMovieCardsFront(films) {
  const container = document.getElementById('movie-container-front');

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

function createMovieCardsBack(films) {
  const container = document.getElementById('movie-container-back');

  films.forEach((films) => {
    const card = document.createElement('div');
    card.classList.add('card');

    const description = document.createElement('description');
    description.textContent = films.description;

    const director = document.createElement('director');
    director.textContent = films.director;

    const rt_score = document.createElement('rt_score');
    rt_score.textContent = films.rt_score;

    card.appendChild(description);
    card.appendChild(director);
    card.appendChild(rt_score);
    container.appendChild(card);
  });
}
// Carregar dados de um arquivo JSON
fetch('./data/ghibli/ghibli.json')
  .then(ghibli => ghibli.json())
  .then(data => {
    createMovieCardsFront(data.films),
    createMovieCardsBack(data.films);
  })
  .catch(error => {
    console.error('Ocorreu um erro ao carregar os dados:', error);
  });


//console.log(example, data);
