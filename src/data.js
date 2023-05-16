export const orderAZ = (breaking_bad) => {
  breaking_bad.sort((a, b) => a.name.localeCompare(b.name));
  return breaking_bad;
};
// ordenando em ordem crescente
export const orderZA = (breaking_bad) => {
  breaking_bad.sort((a, b) => b.name.localeCompare(a.name));
  // ordenando de ordem decrescente
  return breaking_bad;
};
// // o metodo sort() ele ordena em ordem crescente um propriedade de uma matriz. o localecompare() compara
// // a string de propriedade name de cada objeto.

export const filterBreakingBad = (appearance, breaking_bad) => {
  return breaking_bad.filter(breaking_bad_item =>
    breaking_bad_item.name.includes(appearance)
  );
};

// barra de pesquisa
export const filtroNomes = (dados, nomePesquisado) => {
  const nomeUpper = nomePesquisado.toUpperCase(); // converte o nome pesquisado para letras MAIÚSCULAS
  return dados.filter(nome => nome.name.toUpperCase().includes(nomeUpper));
};

