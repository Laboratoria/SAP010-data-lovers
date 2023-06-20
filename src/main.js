import data from './data/pokemon/pokemon.js';
import { pokeType } from './data.js'


//for (let i = 0; i < data.pokemon.length; i++){ //Atribuimos o valor 0 ao I, e definimos que se i for menos que o comprimento da pasta de pokemons, seria adicionado mais 1, tornando i=1. Fazendo isso consequentemente até que chegue ao numero certo//
//console.log (data.pokemon[i].name); // Aqui printamos no console o nome de todos os pokemons. Primeiro acessamos o data, depois o pokemon e o seu indice (i) e depois acessamos seu nome.
//}

const pokeCards = document.getElementById("cards");
const pokeFilterType = document.getElementById("elements");
const pokeFilterOrganize = document.getElementById("order");
const dataPokemon = data.pokemon; //Criei uma variavel pra colocar os dados de todos os pokemons

function createCards(pokemons) {
    return ` 
<div id= "all-content"> 
    <div id= "poke-numbers">
    <h4>Nº: ${pokemons.num} </h4> 
    </div>

    <div id= "poke-image">
    <img src="${pokemons.img}" alt="Imagem do Pokémon">
    </div>

    <div id="poke-info">
   <h2>${pokemons.name.charAt(0).toUpperCase() + pokemons.name.slice(1)}</h2> 

   <div id="poke-types">
    <p> ${pokemons.type.join(" ")} </p>  
    </div>

   <p> Raridade: ${pokemons["pokemon-rarity"]}</p>
</div>
</div>
`
}
const allPokemons = dataPokemon.map(pokemons => createCards(pokemons)).join(" ");

pokeCards.innerHTML = allPokemons;

pokeFilterType.addEventListener("change", function (event) {
    const pokeChange = event.target.value;
    const pokemonFiltered = pokeType(dataPokemon, pokeChange);
    const returnCard = pokemonFiltered.map(pokemons => createCards(pokemons)).join(" ");
    pokeCards.innerHTML = returnCard;
});






