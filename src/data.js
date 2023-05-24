// ordenando em ordem crescente
export const orderAZ = (breaking_bad) => {
  breaking_bad.sort((a, b) => a.name.localeCompare(b.name));
  return breaking_bad;
};

// ordenando de ordem decrescente
export const orderZA = (breaking_bad) => {
  breaking_bad.sort((a, b) => b.name.localeCompare(a.name));
  return breaking_bad;
};
// // o metodo sort() ele ordena em ordem crescente um propriedade de uma matriz. o localecompare() compara
// // a string de propriedade name de cada objeto.

// retorna os personagens por temporada
export const filterBreakingBad = (dados, temporada) => {
  const temporadaNumerosInteiros = parseInt(temporada.toString().replace('Temporada ', ''));
  return dados.filter(breaking_bad_item =>
    breaking_bad_item.appearance.includes(temporadaNumerosInteiros)
  );
};


export const porcentagemTemporada = (filterBreakingBad, dados) => {
  return ((filterBreakingBad.length / dados.length) * 100).toFixed(2); // to fixed retorna somente 2 casas depois da vírgula
};

// barra de pesquisa
export const filtroNomes = (dados, nomePesquisado) => {
  const nomeUpper = nomePesquisado.toUpperCase(); // converte o nome pesquisado para letras MAIÚSCULAS
  return dados.filter((nome) => nome.name.toUpperCase().includes(nomeUpper));
};

// função para filtrar os personagens da serie Better Call Saul
export const filterBetterCallSaul = (dados) => {
  return dados.filter(
    (personagem) => personagem.better_call_saul_appearance.length > 0
  );
};