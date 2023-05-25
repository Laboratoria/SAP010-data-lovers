//lógica da função para buscar e filtrar os nomes dos personagens

export function searchName(searchValue, searchType) {
  const filterName = (character) => {
    const fullName = character.fullName.toLowerCase();
    const firstName = character.firstName.toLowerCase();
    const lastName = character.lastName.toLowerCase();

    if (searchType === "fullName" && fullName.includes(searchValue.toLowerCase())) {
      return true;
    } else if (searchType === "firstName" && firstName.includes(searchValue.toLowerCase())) {
      return true;
    } else if (searchType === "lastName" && lastName.includes(searchValue.toLowerCase())) {
      return true;
    }

    return false;
  };

  const filteredNames = characters.got.filter(filterName);
  return filteredNames;
}

//função que ordena os nomes de A a Z

export function ordenarAZ(value, character){
  const ordenarCharacterAZ = [...character]; //cria uma cópia da array para não modificar a original 
  if(value === 'a-z'){
    ordenarCharacterAZ.sort(function (a, b){
      if(a.name < b.name){
        return -1;
      }
    })
  }else{
    ordenarCharacterAZ.sort(function (a, b){
      if(a.name > b.name){
        return -1;
      }
    })
  }
  return ordenarCharacterAZ
}



//Função de calculo agregado de porcentagem

export function calculatePercentageByFamily(family, filteredNames) {
  const numberOfFilteredNames = filteredNames.length;
  const totalFamily = family.length;

  const percentage = (numberOfFilteredNames / totalFamily) * 100;

  return `A porcentagem de personagens por família é de ${percentage.toFixed(2)}%`;
}

const family = ['Stark', 'Lannister', 'Targaryen', 'Baratheon'];
const filteredNames = ['Jon Snow', 'Tyrion Lannister', 'Daenerys Targaryen'];

const percentage = calculatePercentageByFamily(family, filteredNames);
console.log(percentage);

export { 
  searchName, 
  ordenarAZ,
  calculatePercentageByFamily }