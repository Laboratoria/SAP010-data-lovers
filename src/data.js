import data from './data/ghibli/ghibli.js';
export const selectTitle = () => {

  data.films[0].title

  const titulos = [];

  for (let i=0; i<data.films.length; i++) {
    titulos.push(data.films[i].title);
  }
  console.log(titulos);
}
