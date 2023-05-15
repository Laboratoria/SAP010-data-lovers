export const ordenarNomes = (ordenar) => {
  ordenar.sort((a, b) => {
    const nomeA = a.ordenarNomes.common.toUpperCase();
    const nomeB = b.ordenarNomes.common.toUpperCase();

    if (nomeA < nomeB) {
      return -1;
    }
    if (nomeA > nomeB) {
      return 1;
    }
    return 0;
  });
};

/*export const sortBy = (ordenar) => {
  return console.log(ordenar, "aqui sortBy");
};

export const sortOrder = (ordenar) => {
  return console.log(ordenar + "aqui sorOrder");
}*/


