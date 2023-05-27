//import { data } from "./data.js";
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

  const producer = document.createElement("h4");
  producer.textContent = "Produtor: " +  films.producer;
  
  const description = document.createElement("p");
  description.textContent =  "Sinopse: " + films.description;

  const score = document.createElement("p");
  score.textContent = "Nota no Rotten Tomatoes: " +  films.rt_score;
  
  back.appendChild(description);
  back.appendChild(director);
  back.appendChild(producer);
  back.appendChild(score);
  
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
  })
  .catch(error => {
    console.error('Ocorreu um erro ao carregar os dados:', error);
  });