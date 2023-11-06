import { filmsDirector, filteredFilms, orderFilms } from './data.js';
import data from './data/ghibli/ghibli.js';
const filmList = data.films
const section = document.querySelector(".container-films")

function renderFilms(filmList) {
  section.innerHTML = "";
  for (let i = 0; i < filmList.length; i++) {
    const card = document.createElement("section")
    card.classList.add("films")
    card.innerHTML = `
      <img src=${filmList[i].poster}>
      <h3>${filmList[i].title}</h3>
      <h3>${filmList[i].release_date}</h3>
      `;
    section.appendChild(card)
  }
}
const directorSelect = document.getElementById("director");
directorSelect.addEventListener("change", filterFilmsByDirector); //Adicionamos um evento de escuta ao elemento select

function filterFilmsByDirector() {    //criamos uma  função para filtrar com base no diretor selecionado
  const selectedDirector = directorSelect.value;
  const filteredFilms = filmsDirector(selectedDirector, filmList) //executou aqui a função, com valor= selectedDirector e com dados=filmList

  renderFilms(filteredFilms);
}
renderFilms(filmList);


const selectElement = document.getElementById("title");
selectElement.addEventListener("change", filterFilmsByTitle);

function filterFilmsByTitle() {
  const selectedTitle = selectElement.value;
  const filterFilmsResult = filteredFilms(selectedTitle, filmList);
  renderFilms(filterFilmsResult);
}

const filterOrder = document.getElementById("order");
filterOrder.addEventListener("change", orderFilmsByName);

function orderFilmsByName() {
  const selectedOrder = filterOrder.value;
  const orderFilmsResult = orderFilms(selectedOrder, filmList);
  renderFilms(orderFilmsResult); // Usei filmList no lugar de a, b e ouve movimentação na ordem dos filmes, contudo, só mudou a posição dos dois primeiros 
}

//filterFilmsByTitle()

//renderFilms(filmList);

//console.log(data.films[0].poster)


