export const ordenarNomes = (personagens, ordem) => {
  let listaOrdenada = sort(personagens); // chamando a função que ordena de forma crescente
  if (ordem === 'za'){
    listaOrdenada = listaOrdenada.reverse(); //inverte a lista ordenada para decrescente
  }
  return listaOrdenada;
};

// export const ordenarNomes = (personagens, ordem) => {
//   if (ordem === 'az'){
//     return sort(personagens);
//   } else {
//     const listaCrescente = sort(personagens);
//     return listaCrescente.reverse(); 
//   }
// };

function sort(personagens) {
  return personagens.sort((a, b) => {
    if (a.fullName < b.fullName) {
      return -1;
    }
    if (a.fullName > b.fullName) {
      return 1;
    }
    return 0;
  });
}

export const filtrarFamilia = (personagens, familia) => {
  return personagens.filter(personagem => personagem.family === familia);
}

/*export const sortBy = (ordenar) => {
  return console.log(ordenar, "aqui sortBy");
};

export const sortOrder = (ordenar) => {
  return console.log(ordenar + "aqui sorOrder");
}*/


