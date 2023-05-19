export const filtrarNomes = (dados, nomePesquisado) => {
  return dados.filter(cards => cards.name.toUpperCase().includes(nomePesquisado.toUpperCase()));
};












// estas funciones son de ejemplo

/*export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};*/
