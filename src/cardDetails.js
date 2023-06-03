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
        <th class="subtitles">Heigth</th>
        <td>${pokemon[data].size.height}</td>
      </tr>
      <tr>
        <th class="subtitles">Weigth</th>
        <td>${pokemon[data].size.weight}</td>
      </tr>
      <tr>
        <th class="subtitles about">About</th>
        <td class="justified">${pokemon[data].about}</td>
      </tr>
    </table>
  `;
  }

  return information;

}//attributes


const buildCardDetails = (pokemon) => {

  const cardDetails = document.getElementById("cardDetails");
  console.log(cardDetails)

  let tagsHtml = "";

  for (const data in pokemon) {

    let detailsPokemon = `
      <div class="display-flex-align-center-row wrap container border space-around column">
        <div class="display-flex-align-center-row gap">
          <h1 class="letter-card">${pokemon[data].name}</h1>
          <p class="letter-card">${pokemon[data].num}</p>
        </div>
        <div class="display-flex-align-center-row gap">
    `;

    pokemon[data].type.forEach(type => {
      detailsPokemon += `

        <p class="letter-card type">${type}</p>

      `;
    })

    detailsPokemon += `
      </div>
        <img src=${pokemon[data].img}>
    </div>
    <div class="display-flex-align-center-row border container-details column">
      <nav>
        <div class="menu">
          <ul class="letter-details">
            <li class="subtitles">Attributes</li>
            <li class="subtitles">Base Stats</li>
            <li class="subtitles">Resistance</li>
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

  console.log(menuDetails);


  menuDetails.forEach(item => {
    console.log(item);
    item.addEventListener('click', () => {
      /*
      item.style.color = 'blue';
      item.style['text-decoration'] = 'underline';
      */
      switch (item.textContent) {
        case 'Attributes':
          detailsContainer.innerHTML = attributes(pokemon);
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



