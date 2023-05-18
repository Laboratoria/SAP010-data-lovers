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
      for (let i = 0; i < titles.length; i){
        titles.push(data.films[films[i]].title);
      }
      something = titles;
      return something;
    }
  }
  //tentando printar o atributo do valor "Studio" só pra testar se consigo acessar ele.
  function trying(data){
    let studio = "";

    for (let x in data){
      studio += x;
    }
    return studio;
  }
}
