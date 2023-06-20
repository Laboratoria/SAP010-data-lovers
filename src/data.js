<<<<<<< HEAD

export function sortAlphabet(){
  //const titulos = [];
  //sort(escolha)
}

=======
//import data from './data/ghibli/ghibli.js';

export const searchTitle = (titles, name) => {
  const filterTitle = title => title.name.toUpperCase().includes(name.toUpperCase());
  const filter = titles.filter(filterTitle);
  return filter;
}

export function sortAlphabet(){
  const orderByAlphabet = [];
  orderByAlphabet.sort((a, b) => {
    if (a.title.toUpperCase < b.title.toUpperCase){
      return -1;
    }
  })
}

>>>>>>> b0b5421 (atualizacoes html css js)
export function sortRealease(){
  //string p number
  //sort
}

export function sortRating(){
  //string p number
  //sort
}

export function filterDirector(){
  //
}

