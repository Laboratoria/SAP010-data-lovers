import breakingbad from "./data/breakingbad/breakingbad";


export const ordenarNomes = (breakingbad);
ordenarNomes.sort((atorA, atorB) => atorA.name.localecompare(atorB.name)); 
// ordenando em ordem crescente 
ordenarNomes.sort((atorA, atorB)=> atorB.name.localecompare(atorA.name));
// ordenando de ordem decrescente 

// o metodo sort() ele ordena em ordem crescente um propriedade de uma matriz. o localecompare() compara
// a string de propriedade name de cada objeto. 


export const pesquisarNomes = (breakingbad, nomePesquisado).filter((objeto => objeto.name.toUpperCase().includes(nomePesquisado.toUpperCase())))
// o metodo filter irá realizar a filtragem dentro da propriedade name do objeto. O toUpperCase() é usado para identificar o nome
// pesquisado, idependente se é maíusculo ou minusculo. E o metodo includes() ele retorna se o nome está ou nao incluido. 
// constante criada para filtrar o nome 

 








// export const anotherExample = () => {
//   return 'OMG';
// };
