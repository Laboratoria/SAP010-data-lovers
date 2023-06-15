// estas funciones son de ejemplo

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};
const directorSelect = document.getElementById("director");
directorSelect.addEventListener("change", filterFilmsByDirector); //Adicionamos um evento de escuta ao elemento select

function filterFilmsByDirector() {    //criamos uma  função para filtrar com base no diretor selecionado
  const selectedDirector = directorSelect.value;
  const filteredFilms = filmList.filter(film => film.director === selectedDirector);
  renderFilms(filteredFilms);
}
function renderFilms(films) { //modificamos a função renderFilms para receber a lista de filmes como paramentro
  section.innerHTML = "";
  for (let i = 0; i < films.length; i++) {
    // Código para renderizar cada filme
  }
}
