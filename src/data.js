// estas funciones son de ejemplo

export const filmsDirector = (valor, dados) => {
  if (valor === "Todos") {
    return dados
  }                                         //o parametro é o que a gente quer que função retorne
  const filmList = dados.filter(film => film.director === valor) //metodo filter já faz o trabalho do for ou if else
  return filmList
};


export const filteredFilms = (title, dados) => {
  if (title === "Todos") {
    return dados
  }
  const film = dados.filter(film => film.title === title)
  return film
};

export function orderFilms(selectedOrder, filmList) {
  const ordered = filmList.sort((a, b) => { //.sort ordena array
        if (a.title > b.title) return 1
    if (a.title < b.title) return -1
      return 0
    } //só falta ver o retorno de a-z e z-a como fazer para retornar?
      )
  console.log(ordered)
}

 