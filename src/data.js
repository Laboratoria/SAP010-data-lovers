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


export function orderFilms(selectedOrder, filmList) { //orderFilms é o nome da função e dentro dos parenteses estão os parametros
  if (selectedOrder === "a-z") { //se o 1º parametro for identico a string "a-z" o resultados será ordered "a-z"(linha 28)
    const ordered = filmList.sort((a, b) => { //.sort ordena, mas altera a array. É usada como uma função de comparação que compara a `title`propriedade de dois filmes (`a`e `b`).
      if (a.title >= b.title) return 1; 
      if (a.title <= b.title) return -1;
      return 0; 
    });
    return ordered
  } else if (selectedOrder === "z-a") { //se não, sendo o 1º parametro identico a string "z-a" o resultados será ordered "z-a"
    const ordered = filmList.sort((a, b) => { //idem linha 23
      if (b.title >= a.title) return 1;
      if (b.title <= a.title) return -1;
      return 0;
    });
  
    return ordered
  }
}