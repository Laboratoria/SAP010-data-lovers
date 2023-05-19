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
  if (familia === "Todas Famílias") {
    return personagens; // Retorna a lista completa de personagens
  } else {
    return personagens.filter(personagem => personagem.family === familia);
  }
}

export const filtrarPersonagens = (personagens, nome) => {
  if (nome === "Todos Personagens") {
    return personagens; // Retorna a lista completa de personagens
  } else {
    return personagens.filter(personagem => personagem.fullName.includes(nome));
  }
}