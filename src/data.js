import characters from "./data/got/got.js";

export function searchName(searchValue) {
  const filteredNames = characters.got.filter(character => {
    const family = character.family.toLowerCase();
    const firstName = character.firstName.toLowerCase();
    const fullName = character.fullName.toLowerCase();

    if (family.includes(searchValue.toLowerCase())) {
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

export function ordenarAZ(value, character) {
  const ordenarCharacterAZ = [...character]; // cria uma cópia da array para não modificar a original 

  if (value === 'a-z') {
    ordenarCharacterAZ.sort((a, b) => a.fullName.localeCompare(b.fullName));
  } else {
    ordenarCharacterAZ.sort((a, b) => b.fullName.localeCompare(a.fullName));
  }

  return ordenarCharacterAZ;
}

export function calculatePercentageByFamily(family, filteredNames) {
  const numberOfFilteredNames = filteredNames.length;
  const totalFamily = family.length;

  const percentage = (numberOfFilteredNames / totalFamily) * 100;

  return `A porcentagem de personagens por família é de ${percentage.toFixed(2)}%`;
}


