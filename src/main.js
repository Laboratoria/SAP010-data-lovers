import pokemonArquivo from "./data/pokemon/pokemon.json";

pokemonArquivo().then(data => { // operação assíncrona /"pokemonArquivo()"= busca o arquivo/ "the(data=>)" pega o result. e executa o codigo
    console.log(data); // Imprime o objeto com os dados dos Pokémons no console

})



import  pokemonArquivo2 from "./data/pokemon/pokemon.js";
// import data from './data/lol/lol.js';  
pokemonArquivo2().then(data => { // operação assíncrona /"pokemonArquivo()"= busca o arquivo/ "the(data=>)" pega o result. e executa o codigo
    console.log(data); // Imprime o objeto com os dados dos Pokémons no console

})



