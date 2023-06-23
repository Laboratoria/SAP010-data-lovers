
//import data from './data/ghibli/ghibli.js';

export const searchTitle = (titles, name) => {
  const filterTitle = title => title.name.toUpperCase().includes(name.toUpperCase());
  const filter = titles.filter(filterTitle);
  return filter;
}

export function sortAlphabet(){
  const orderByAlphabet = [];
  if (valorSel === "title-az"){
    orderByAlphabet.sort((a, b) => {
      if (a.title.toUpperCase < b.title.toUpperCase){
        return -1;
      }
    })
  }
  return orderByAlphabet;
}

export function sortRealease(){
  const orderByRealease = [];
  if (valorSel === "lancamento"){
    orderByRealease.sort((a, b) => {
      if (a.release_date < b.release_date) {
        return -1;
      }
    })
  }
  return orderByRealease;
}

export function sortRating(){
  const orderByRating = [];
  if (valorSel === "rating"){
    orderByRating.sort((a, b) => {
      if (a.rt_score < b.rt_score){
        return -1;
      }
    })
  }
  return orderByRating;
}
export function filterDirector(){
  //
}

