import data from "./data/rickandmorty/rickandmorty.js"; // pego meus dados de data e trago pra essa página
const resultado = data.results; // aqui estou atribuindo os resultados do meu arquivo data para uma variavel

//crio uma function que a finalidade é ver se o personagem ta vivo ou morto  Coloco o export pois essa função vai ser usada no meu arquivo main.js
export function filterByStatus(status) {
  const filteredStatus = resultado.filter((resultado) => {
    //aqui se usa uma arrow function e e estamos filtrando o personagem usando o metodo .filter essa expressão é para filtrar os personagens e retornar uma nova lista com personagens que atendam a esse critério
    return resultado.status === status;
    // nessa linha estamos acessando o estado de vida do personagem e verificando se os dois valores são iguais
  });
  return filteredStatus;
  //aqui retorna true se for igual e mantem na lista e false se for diferente e descarta
}

//função com finalidade de ver a especie do personagem,a lista dos personagens que queremos filtrar e especies que é a especie que queremos filtrar a lista
export function filterSpecies(species) {
  //se usa o metodo filter para criar uma nova lista contendo apenas as especies cuja é igual a specie desejada
  const filteredSpecies = resultado.filter(
    (resultado) => resultado.species === species
  );
  //aqui retorna a lista filtrada
  return filteredSpecies;
}

export function filterGender(gender) {
  const filteredGender = resultado.filter((resultado) => {
    return resultado.gender === gender;
  });
  return filteredGender;
}

//função com finalidade de filtrar planeta,primeiro de personagens que queremos filtrar e o segundo planeta que queremos filtrar
//export function filterPlanets(planet) {
//const filteredPlanets = resultado.filter((resultado) => resultado.origin.name === planet
//aqui usamos o metodo filter para criar uma nova lista dos planetas que queremos, o character representa cada elemento do meu array characters. o .origem.name é para acessar a propriedade name que tá dentro do objeto origin
//);
// return filteredPlanets;}

//Ordenação de A-Z
export function sortAll(order, resultado) {
  const charactersCopy = [...resultado];
  //o metodo sort ordena a copia do array de personagens
  charactersCopy.sort((A, Z) => {
    //a função localcompare compara os nomes de personagens e retorna um valor negativo,zero ou positivo.
    if (order) {
      return A.name.localeCompare(Z.name);
    } else {
      return Z.name.localeCompare(A.name);
    }
  });
  return charactersCopy;
}
