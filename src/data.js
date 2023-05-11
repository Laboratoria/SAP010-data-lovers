const dataFunctions = {
  filtrar: function (characters, value, key) {
    const filtro = characters.filter(function (personagem) {
      const filtrado = personagem[key].toLowerCase() === value;
      return filtrado;
    });

    return filtro;
  },
};

export default dataFunctions;
