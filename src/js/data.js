function sort(personagens) {
  const sorted = [...personagens]; // Cria uma cópia do array personagens
  return sorted.sort((a, b) => {
    if (a.fullName < b.fullName) {
      return -1;
    }
    if (a.fullName > b.fullName) {
      return 1;
    }
    return 0;
  });
}

export const ordenarNomes = (personagens, ordem) => {
  const personagensComFamilia = filtrarPersonagensComFamilia(personagens);
  let listaOrdenada = sort(personagensComFamilia);

  if (ordem === 'za') {
    listaOrdenada = listaOrdenada.reverse();
  }

  return listaOrdenada;
};

export const filtrarFamilia = (personagens, familia) => {
  if (familia === "Todas Famílias") {
    return personagens; // Retorna a lista completa de personagens
  } else {
    return personagens.filter(personagem => personagem.family === familia);
  }
};

export const filtrarPersonagensPorFamilia = (personagens, familia) => {
  if (familia === "Todas Famílias") {
    return personagens;
  } else {
    return personagens.filter(personagem => personagem.family.includes(familia));
  }
};

export const filtrarPersonagensComFamilia = (personagens) => {
  return personagens.filter(personagem => personagem.family);
};

export const filtrarPersonagem = (personagens, nome) => {
  if (nome === "Todos Personagens") {
    return personagens; // Retorna a lista completa de personagens
  } else {
    return personagens.filter(personagem => personagem.fullName.includes(nome));
  }
};
