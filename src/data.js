const dataFunctions = {
  filtrar: function (characters, value, key) {
    const filtro = characters.filter(function (personagem) {
      const filtrado = personagem[key].toLowerCase() === value;
      return filtrado;
    });

    return filtro;
  },

  ordenarCrescente: function (characters) {
    const ordem = characters.sort(function (a, b) {
      if (a.name > b.name) {
        return 1;
      } else {
        return -1;
      }
    });

    return ordem;
  },

  ordenarDecrescente: function (characters) {
    const ordem = characters.sort(function (a, b) {
      if (a.name > b.name) {
        return -1;
      } else {
        return 1;
      }
    });

    return ordem;
  },

  ordenar: function (characters, sortBy) {
    const copy = [...characters];

    if (sortBy === "ascending") {
      return dataFunctions.ordenarCrescente(copy);
    } else if (sortBy === "descending") {
      return dataFunctions.ordenarDecrescente(copy);
    }
  },

  buscarPorNome: function (characters, name) {
    const filtro = characters.filter(function (personagem) {
      const buscaFiltrada = personagem.name
        .toLowerCase()
        .includes(name.toLowerCase());
      return buscaFiltrada;
    });
    return filtro;
  },

  calcularPorcentagem: function (tamanhoList, tamanhoListaFiltrada) {
    return Math.round((tamanhoListaFiltrada * 100) / tamanhoList);
  },
};

export default dataFunctions;
