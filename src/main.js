import pokemon from './data/pokemon/pokemon.js';
import data from './data/pokemon/pokemon.js';

//for (let i = 0; i < data.pokemon.length; i++){ //Atribuimos o valor 0 ao I, e definimos que se i for menos que o comprimento da pasta de pokemons, seria adicionado mais 1, tornando i=1. Fazendo isso consequentemente até que chegue ao numero certo//
//console.log (data.pokemon[i].name); // Aqui printamos no console o nome de todos os pokemons. Primeiro acessamos o data, depois o pokemon e o seu indice (i) e depois acessamos seu nome.
//}

//faz as etapas: 1- printa no console as infos que vc quer do primeiro pokemon. ✔ 
//2- faz um loop pra printar no console essas mesmas infos, mas agora de todos os pokemons.  ✔ 
//3- cria uma template string com essas infos, como se fosse um html. 
//4-inserir no dom essa template string no dom com innerHTML 


const dataPokemon = data.pokemon; //Criei uma ariavel pra colocar os dados de todos os pokemons

const allPokemons = dataPokemon.map(pokemons => ({ //Criei uma variável e usei o map para pegar somente as informações que eu queria da outra variável
    "Nº": pokemons.num,// Usei arrow function (preciso estudar mais e tentar fazer uma função a parte, para testar o entendimento)
    "Nome": pokemons.name,//Dentro da minha variável puxei as informações que eu queria
    "Tipo": pokemons.type.join(","), // Usei o join para concatenar os tipos e todos aparecerem
    "Raridade": pokemons["pokemon-rarity"],
    "Imagem": pokemons.img,
}))

console.log(allPokemons) // Fiz um console.log para confirmar se consegui puxar essas informações

 


