const dataLol = {
  // filtra os campeões de acordo com uma tag específica
  buscarTag: function(campeoes, tag) {
    return campeoes.filter(campeao => campeao.tags.includes(tag));
  },

  // filtra os campeões de acordo com um nome específico
  buscarNome: function(campeoes, nome) {
    const filtraCampeoes = campeao => campeao.name.toUpperCase().includes(nome.toUpperCase());
    const filter = campeoes.filter(filtraCampeoes);
    return filter;
  },

  // ordena os campeões de acordo com uma ordem específica
  ordenarCampeoes: function(campeoes, ordem) {
    return campeoes.sort((campeaoA, campeaoB) => {
      switch (ordem) {
      case "maior-defesa":
        return campeaoB.info.defense - campeaoA.info.defense;
      case "menor-defesa":
        return campeaoA.info.defense - campeaoB.info.defense;
      case "maior-ataque":
        return campeaoB.info.attack - campeaoA.info.attack;
      case "menor-ataque":
        return campeaoA.info.attack - campeaoB.info.attack;
      case "maior-magia":
        return campeaoB.info.magic - campeaoA.info.magic;
      case "menor-magia":
        return campeaoA.info.magic - campeaoB.info.magic;
      case "maior-dificuldade":
        return campeaoB.info.difficulty - campeaoA.info.difficulty;
      case "menor-dificuldade":
        return campeaoA.info.difficulty - campeaoB.info.difficulty;
      default:
        return 0;
      }
    });
  },
  calcularPorcentagem: function(campeoes, tag) {
    const campeoesFiltrados = this.buscarTag(campeoes, tag);
    const numeroCampeoesFiltrados = campeoesFiltrados.length;
    const totalDeCampeoes = campeoes.length;
    return (numeroCampeoesFiltrados / totalDeCampeoes) * 100;
  },
}


export default dataLol;
