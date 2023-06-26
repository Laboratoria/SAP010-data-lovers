
import data from './data/ghibli/ghibli.js';

const dataGhibli = data.films;
//nao preciso acessar o titulo nessa constante, ele sera acessado na funcao!!
export function sortAlphabet(dataGhibli){
  const orderByAlphabet = [];
  orderByAlphabet.sort((a, b) => {
    if (a.title.toUpperCase < b.title.toUpperCase){
      return -1;
    }
  })
  return orderByAlphabet;
}

export function sortRealease(dataGhibli){
  const orderByRealease = [];
  orderByRealease.sort((a, b) => {
    if (a.release_date < b.release_date) {
      return -1;
    }
  })
  return orderByRealease;
}

export function sortRating(dataGhibli){
  const orderByRating = [];
  orderByRating.sort((a, b) => {
    if (a.rt_score < b.rt_score){
      return -1;
    }
  })
  return orderByRating;
}
export function filterDirector(){
  //
}


// const order = {
//   byAlphabet: function() {
//     const orderByAlphabet = [];
//     orderByAlphabet.sort((a, b) => {
//       if (a.title.toUpperCase < b.title.toUpperCase){
//         return -1;
//       }
//     })
//     return orderByAlphabet;
//   },

//   byRealease: function() {
//     const orderByRealease = [];
//     orderByRealease.sort((a, b) =>
//       a.release_date - b.release_date
//     )
//     return orderByRealease;
//   },

//   byRating: function() {
//     <>.sort((a, b) => a.title - b.title);
//   }


// //const dataFilms = data.films.title;


// export const searchTitle = (titles, name) => {
//   const filterTitle = title => title.name.toUpperCase().includes(name.toUpperCase());
//   const filter = titles.filter(filterTitle);
//   return filter;
//   return filter;
// }


{/* export function orderByNumber(arr){
  arr.sort((a, b) => a.title - b.title);
}
orderByAZ(data); */}
}
