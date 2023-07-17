// estas funciones son de ejemplo

//const filtroIdependecia = countries.filter(filtro)

// 1 fazer o DOM das select
//2 funções
//3 transformar em 1 só
// trazer os continentes pelo parametro

export function filtrarPorContinente(array, continente) {
  //Filtra os países com base no continente especificado
  const paisesFiltrados = array.filter(function (elemento) {
    return elemento.continents[0] === continente;
  });

  // Retorna o resultado da filtragem
  return paisesFiltrados;
}
//console.log(filtroIdependecia);

export function filtrarPorIndependencia(array, independencia) {
  const filtroIdependencia = array.filter(function (elemento) {
    if (independencia === "Independente") {
      return elemento.independent === true;
    }
    return elemento.independent === false;
  });
  return filtroIdependencia;
}
