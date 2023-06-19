// estas funciones son de ejemplo

export const filmsDirector = (valor, dados) => { //o parametro é o que a gente quer que função retorne
  const filmList = dados.filter(film => film.director === valor) //metodo filter já faz o trabalho do for ou if else
  return filmList
};
 

//export const anotherExample = () => {
//  return 'OMG';
//};

