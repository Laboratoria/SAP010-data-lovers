
//import { characteristic,generatio } from 'https://pokeapi.co/api/v2/pokemon';
//import  APIResponse 'https://pokeapi.co/api/v2/pokemon/${pokemon}';


// 1° puxar os elementos do  html 
const pokemonName = document.querySelector('.pokemon__name'); //variável para selecionar um elemento HTML com a classe
const pokemonNumber = document.querySelector('.pokemon__number');
const pokemonImage = document.querySelector('.pokemon__image');

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


  const data = await fetchPokemon(pokemon); //nome do pokemon como parametro 

  if (data) { // se sucesso, if executa 
    pokemonImage.style.display = 'flex';//
    pokemonName.innerHTML = data.name;
    pokemonNumber.innerHTML = data.id;
    pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];

    input.value = '';
    searchPokemon = data.id;


  } else {
    pokemonImage.style.display = 'none';
    pokemonName.innerHTML = 'Not found ';
    pokemonNumber.innerHTML = '';


  }

}


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

