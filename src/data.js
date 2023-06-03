//Função de busca dos personagens por nome, sobrenome, nome completo
export function searchName(searchValue) {
  const filteredNames = characters.got.filter(character => {
    const lastName = character.lastName.toLowerCase();
    const firstName = character.firstName.toLowerCase();
    const fullName = character.fullName.toLowerCase();

    if (lastName.includes(searchValue.toLowerCase())) {
      return true;
    }
    if (firstName.includes(searchValue.toLowerCase())) {
      return true;
    }
    if (fullName.includes(searchValue.toLowerCase())) {
      return true;
    }
    

    return false;
  });

  return filteredNames;
}

//Função para ordenar os personagens de A-Z e Z-A
export function ordenarAZ(value, character) {
  const ordenarCharacterAZ = [...character]; // cria uma cópia da array para não modificar a original 

  if (value === 'a-z') {
    ordenarCharacterAZ.sort((a, b) => a.fullName.localeCompare(b.fullName));
  } else {
    ordenarCharacterAZ.sort((a, b) => b.fullName.localeCompare(a.fullName));
  }

  return ordenarCharacterAZ;
}

//Função para filtrar os personagens por família
export function filterCharactersByFamily(characters, family) {
  return characters.filter(character => character.family === family);
}



//Função para calcular a porcentagem por família
export function calculateFamilyPercentage(filteredCharacters, totalCharacters) {
  return ((filteredCharacters.length / totalCharacters.length) * 100).toFixed(2);
}


