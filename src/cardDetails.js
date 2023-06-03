import pokemon from './data/pokemon/pokemon.js';
import data from './data/pokemon/pokemon.js';

let retrievedId = localStorage.getItem('id');

const filterPokemonDetails = () => {

  return data.pokemon.filter(pokemon => pokemon.num.includes(retrievedId))

}

const attributes = (pokemon) => {

  let information = '';

  for (const data in pokemon) {
    information = `
    <table class="letter-details">
      <tr>
        <th class="subtitles">Rarity</th>
        <td>${pokemon[data]['pokemon-rarity']}</td>
      </tr>
      <tr>
        <th class="subtitles">Heigth</th>
        <td>${pokemon[data].size.height}</td>
      </tr>
      <tr>
        <th class="subtitles">Weigth</th>
        <td>${pokemon[data].size.weight}</td>
      </tr>
      <tr>
        <th class="subtitles top">About</th>
        <td class="justified">${pokemon[data].about}</td>
      </tr>
    </table>
  `;
  }

  return information;

}//attributes

const distributionOfBaseStats = (pokemon) => {

  let stats = Object.values(pokemon);

  stats = stats.map(value => {
    console.log(value);
    return parseInt(value);
  });

  const max = Math.max(...stats);

  stats = stats.filter(value => value !== max);

  const secondMaxValue = Math.max(...stats);

  console.log(secondMaxValue);

  let index = stats.indexOf(secondMaxValue);

  let pixels = []
  for (let i = 0; i < stats.length; i++) {
    if (stats[i] !== stats[index]) {
      pixels.push(((stats[i] / stats[index]) * 100).toFixed(2) + 'px');
    } else if (stats[i] === stats[index]) {
      pixels.push('100px');
    }
  }

  return pixels;

}

const baseStats = (pokemon) => {

  let information = '';

  for (const data in pokemon) {
    const pixels = distributionOfBaseStats(pokemon[data].stats);
    information = `
    <table class="letter-details">
      <tr>
        <th class="subtitles">Attack</th>
        <td>${pokemon[data].stats['base-attack']}</td>
        <td><div class="stats red" style="width: ${pixels[0]};"></div></td>
      </tr>
      <tr>
        <th class="subtitles">Defense</th>
        <td>${pokemon[data].stats['base-defense']}</td>
        <td><div class="stats green" style="width: ${pixels[1]};"></div></td>
      </tr>
      <tr>
        <th class="subtitles">Stamina</th>
        <td class="justified">${pokemon[data].stats['base-stamina']}</td>
        <td><div class="stats red" style="width: ${pixels[2]}"></div></td>
      </tr>
      <tr>
        <th class="subtitles">Max-cp</th>
        <td class="justified">${pokemon[data].stats['max-cp']}</td>
        <td><div class="stats green" style="width: 160px;"></div></td>
      </tr>
      <tr>
        <th class="subtitles">Max-hp</th>
        <td class="justified">${pokemon[data].stats['max-hp']}</td>
        <td><div class="stats red" style="width: ${pixels[3]};"></div></td>
      </tr>
    </table>
  `;
  }

  return information;

}//attributes

const dataPokemonGo = (pokemon) => {
  let information = '';

  for (const data in pokemon) {

    information = `
    <table class="letter-details">
      <tr>
        <th class="subtitles">Flee rate</th>
        <td>${pokemon[data].encounter['base-flee-rate']}</td>
      </tr>
      <tr>
        <th class="subtitles">Capture rate</th>
        <td>${pokemon[data].encounter['base-capture-rate']}</td>
      </tr>
      <tr>
        <th class="subtitles">Egg</th>
        <td>${pokemon[data].egg}</td>
      </tr>
      <tr>
        <th class="subtitles">Buddy distance</th>
        <td>${pokemon[data]['buddy-distance-km']} km</td>
      </tr>
      <tr>
        <th class="subtitles top">Resistant</th>
        <td class="justified">${pokemon[data].resistant.join(', ')}</td>
      </tr>
      <tr>
        <th class="subtitles top">Weaknesses</th>
        <td class="justified">${pokemon[data].resistant.join(', ')}</td>
      </tr>
    </table>
  `;
  }

  return information;

}

const filterPokemonsEvolutions = (pokemon) => {

  const pokemonsEvolution = [];

  pokemonsEvolution.push(pokemon[0])

  for (let i = 0; i < pokemonsEvolution.length; i++) {
    console.log(pokemonsEvolution[i])


    if (Object.keys(pokemonsEvolution[i].evolution).filter((key) => key.includes('next-evolution')).length > 0) {

      for (let j = 0; j < pokemonsEvolution[i].evolution['next-evolution'].length; j++) {
        const idNextEvolution = pokemonsEvolution[i].evolution['next-evolution'][j].num;

        for (const evolution in data.pokemon) {

          if (data.pokemon[evolution].num.includes(idNextEvolution)) {

            pokemonsEvolution.push(data.pokemon[evolution]);

          }

        }

      }

    }

  }

  return pokemonsEvolution;

}

const evolutions = (pokemons) => {

  let information = `
    <h1 class="letter-details title-next-evolutions">Next Evolution</h1>
    <div class="container-evolurion">
    `;

  if(pokemons.length > 1) {
    for(let i = 1; i < pokemons.length; i++){
      information += `
          <div>
            <picture>
              <img  class="img-evolution" src=${pokemons[i].img}>
            </picture>
              <p class=" letter-details subtitles name-evolution">${pokemons[i].name}</p>
          </div>
        `;

      if(i !== pokemons.length-1 && pokemons[0].name !== 'eevee'){
        information += `
        <picture>
          <img class="arrow" src="/images/arrow.png">
        </picture>
        `;
      }

     }
  } else {
    information += `
      <p class=" letter-details subtitles name-evolution">Não possui próximas evoluções</p>
    `;
  }

  information += `</div>`;
  return information;

}


const buildCardDetails = (pokemon) => {

  const cardDetails = document.getElementById("cardDetails");

  let tagsHtml = "";

  for (const data in pokemon) {

    let detailsPokemon = `
      <div class="display-flex-align-center-row wrap container border space-around column  color-type-${pokemon[data].type[0]}">
        <div class="display-flex-align-center-row gap">
          <h1 class="letter-card">${pokemon[data].name}</h1>
          <p class="letter-card">${pokemon[data].num}</p>
        </div>
        <div class="display-flex-align-center-row gap">
    `;

    pokemon[data].type.forEach(type => {
      detailsPokemon += `

        <p class="letter-card type ${type}">${type}</p>

      `;
    })

    detailsPokemon += `
      </div>
        <img class="img-details" src=${pokemon[data].img}>
    </div>
    <div class="display-flex-align-center-row border container-details column">
      <nav>
        <div class="menu">
          <ul class="letter-details">
            <li class="subtitles">Attributes</li>
            <li class="subtitles">Base Stats</li>
            <li class="subtitles">Pokemon GO</li>
            <li class="subtitles">Evolutions</li>
          </ul>
        </div>
      </nav>
      <div id="details" class="display-flex-align-center-row column"></div>
    </div>
    `;

    tagsHtml += detailsPokemon;

  }

  cardDetails.innerHTML = tagsHtml;

  const menuDetails = cardDetails.querySelectorAll('ul li');
  const detailsContainer = cardDetails.querySelector('#details');

  menuDetails.forEach(item => {

    item.addEventListener('click', () => {
      /*
      item.style.color = '#84817A';
      item.style['text-decoration'] = 'underline';
       <div>
        <h2>Rarity</h2>
        <p>${pokemon['pokemon-rarity']}</p>
      </div>
      */
      switch (item.textContent) {
        case 'Attributes':
          detailsContainer.innerHTML = attributes(pokemon);
          break;
        case 'Base Stats':
          detailsContainer.innerHTML = baseStats(pokemon);
          break;
        case 'Pokemon GO':
          detailsContainer.innerHTML = dataPokemonGo(pokemon);
          break;
        case 'Evolutions':
          const evolution = filterPokemonsEvolutions(pokemon);
          console.log(evolution)
          detailsContainer.innerHTML = evolutions(evolution);
          break;
      }
    })
  });

}//endCardDetails

window.addEventListener('load', () => {
  const pokemon = filterPokemonDetails();
  buildCardDetails(pokemon);
  const detailsContainer = cardDetails.querySelector('#details');
  detailsContainer.innerHTML = attributes(pokemon);
})



