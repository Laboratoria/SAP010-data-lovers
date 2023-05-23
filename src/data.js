export const filtrarNomes = (dados, nomePesquisado) => { //é criada uma variavel para filtrar nomes
  return dados.filter(cards => cards.name.toUpperCase().includes(nomePesquisado.toUpperCase())); // retorna um filtro que vai filtrar os dados das cartas
  // é criada uma função in line chamada cards, cards.name pega o nome da carta no tarot.js, includes verifica se o nome pesquisado é true e retorna ele
};

export const filtrarNumeros = (dados, numeroPesquisado) => {
  return dados.filter(cards => String(cards.value).includes(numeroPesquisado));
};











// estas funciones son de ejemplo

/*export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};*/
