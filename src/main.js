/** @type {import('jest').Config} */ 
//import { characteristic,generatio } from 'https://pokeapi.co/api/v2/pokemon';
//import  APIResponse 'https://pokeapi.co/api/v2/pokemon/${pokemon}';


// 1° puxar os elementos do  html 
const pokemonName = document.querySelector('.pokemon__name'); //variável para selecionar um elemento HTML com a classe
const pokemonNumber = document.querySelector('.pokemon__number');
const pokemonImage = document.querySelector('.pokemon__image');
const pokemonAbilities = document.querySelector('.pokemon__abilities');

const form = document.querySelector('.form'); // variável para selecionar um elemento no HTML com a classe .form.
const input = document.querySelector('.input__search'); //variável para selecionar um elemento no HTML com a classe .input
const buttonPrev = document.querySelector('.btn-prev'); //variável para selecionar um elemento no HTML com a classe .btn (botão)
const buttonNext = document.querySelector('.btn-next'); ////variável para selecionar um elemento no HTML com a classe .btn (botão)

let searchPokemon = 1; //variável "searchPokemon" 1, que representa o número do Pokémon que vai começar  inicialmente.

//2° gerar a função para buscar API 

const fetchPokemon = async (pokemon) => { //função aceita um argumento pokemon /assíncrona esperar por uma resposta do servidor sem bloquear o restante do código
  const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`); //fetch para fazer uma solicitação HTTP / API autorizada / await para esperar a resposta da inf.

  if (APIResponse.status === 200) { //Verifica a resposta da solicitação tem um código de status HTTP 200, indicando que está tudo ok 
    const data = await APIResponse.json(); // se ok, json() para converte a resposta em um objeto JavaScript.
    //console.log(data)
    return data; //dados como um objeto JS
  }
}

// 3° transferir as informações para o usuario 
const renderPokemon = async (pokemon) => {

  pokemonName.innerHTML = 'Loading...';
  pokemonNumber.innerHTML = '';
  // pokemonAbilities.innerHTML = '';

  const data = await fetchPokemon(pokemon); //nome do pokemon como parametro 

  if (data) { // se sucesso, if executa 
    pokemonImage.style.display = 'flex';//
    pokemonName.innerHTML = data.name;
    pokemonNumber.innerHTML = data.id;
    pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
    pokemonAbilities.innerHTML = data.abilities.map(a => a.ability.name).join(", "); // MAP - converte o resultado recebido do arrey para 
    input.value = '';
    searchPokemon = data.id;


  } else {
    pokemonImage.style.display = 'none';
    pokemonName.innerHTML = 'Not found ';
    pokemonNumber.innerHTML = '';
    pokemonAbilities.innerHTML = '';

  }

}



//eventos do botão

form.addEventListener('submit', (event) => {
  event.preventDefault();
  renderPokemon(input.value.toLowerCase());
});

buttonPrev.addEventListener('click', () => {
  if (searchPokemon > 1) {
    searchPokemon -= 1;
    renderPokemon(searchPokemon);
  }
});

buttonNext.addEventListener('click', () => {
  searchPokemon += 1;
  renderPokemon(searchPokemon);

});

renderPokemon(searchPokemon);


