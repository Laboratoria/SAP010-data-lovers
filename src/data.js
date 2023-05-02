const dataLol = {
  // filtra os campeões de acordo com uma tag específica
  buscarTag: function(campeoes, tag) {
    return campeoes.filter(campeao => campeao.tags.includes(tag));
  },
  // filtra os campeões de acordo com um nome específico
  buscarNome: function(campeoes, nome) {
    const filtraCampeoes = campeao => campeao.name.includes(nome);
    return campeoes.filter(filtraCampeoes);
  }
}


export default dataLol;
