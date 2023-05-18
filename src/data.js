// // estas funciones son de ejemplo

// export const example = () => {
//   return 'example';
// };

// export const anotherExample = () => {
//   return 'OMG';
// };

export const selectTitle = (films, data) => {

  const titles = [];
  //for (let j = 0; j = films.length; j++){
  //substituindo por for of
  function filmsArray(data){
    for (let something of data.films){
      for (let i = 0; i < 19; i++){
        titles.push(data.films[i].title);
      }
      something = titles;
      return something;
    }
  }
}
