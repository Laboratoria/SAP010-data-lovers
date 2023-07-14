// estas funciones son de ejemplo

//const filtroIdependecia = countries.filter(filtro)

// 1 fazer o DOM das select
//2 funções
//3 transformar em 1 só
// trazer os continentes pelo parametro
export function filtro(array) {
  const filtrandoAmerica = array.filter(filtroAmerica);
  //console.log(filtrandoAmerica)
  function filtroAmerica(elementos) {
    //console.log(elementos.continents)
    return elementos.continents[0] === "America";
  }
  return filtrandoAmerica;
}
//console.log(filtroIdependecia);

export const anotherExample = () => {
  return "OMG";
};
