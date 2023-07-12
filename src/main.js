import data from './data/ghibli/ghibli.js';
import {alfabeto, sortRelease, sortRating, renderCardFilms, director, percentRating} from './data.js';

const dataGhibli = data.films;

// const titles = data.films(title);
// const textoSel = element.options[element.selectedIndex].text;
document.getElementById("totoro-logo").addEventListener("mouseover", changeColor);
function changeColor(){
  const changeColor = document.getElementById("totoro-logo");
  changeColor.classList.add("invert-color");
}
document.getElementById("totoro-logo").addEventListener("mouseout", originalColor);
function originalColor(){
  const originalColor = document.getElementById("totoro-logo");
  originalColor.classList.remove("invert-color");
}

document.getElementById("totoro-logo").addEventListener("click", createMenu);
function createMenu(){
  const whereInit = document.getElementById("create-menu");
  //const whereUpdate = document.getElementById("img-logo");
  //const menuInicial = document.createElement('div');

  whereInit.innerHTML = '<ul class=create-ul><li id="item" class="item" name="e"><a id="books" class="item" href="https://studioghibli.com.br/ghiblistore/livros/"> Books </a></li><li id="games" class="item" name="e"><a id= "games" class="item" href="https://studioghibli.com.br/categoria/games/">Games </a></li><li id="Museum" class="item" ><a id="museum" class="item" href="https://www.ghibli-museum.jp/en/">Museum</a></li><li id="Ghibli Park" class="item"><a id="park" class="item" href="https://ghibli-park.jp/en/">Park</a></li></ul>';
  //whereInit.appendChild(menuInicial);
  const rating = percentRating(dataGhibli);
  console.log(rating);
}

document.getElementById("img-header").addEventListener("mouseover", returnFilms);
function returnFilms(){
  document.getElementById("sprite").innerHTML =  '<img class="sprite" src="./images/sprite.gif" alt="Sprite">';
//   const all = dataGhibli.slice();
//   const allCards = [];
//   for (let i = 0; i < all.length; i++) {
//     allCards.push(renderCardFilms(all[i]));
//   }
//   const returnAllCards = allCards.join(" ");
//   document.getElementById("card-container").innerHTML = returnAllCards;
}

document.getElementById("first-filter").addEventListener("change", myFunction);
document.getElementById("second-filter").addEventListener("change", myFunction);
function myFunction(){
  const element1 = document.getElementById("first-filter");
  const valorSel = element1.options[element1.selectedIndex].value;
  const element2 = document.getElementById("second-filter");
  const valorSelDirector = element2.options[element2.selectedIndex].value;
  console.log(valorSelDirector);
  const filterDirector = director(dataGhibli, valorSelDirector);
  console.log(filterDirector);

  if (valorSel === "title-az"){
    const titleAZ = alfabeto(filterDirector);
    const cardsAZ = [];
    console.log(titleAZ);

    for (let i = 0; i < titleAZ.length; i++) {
      cardsAZ.push(renderCardFilms(titleAZ[i]));
    }
    const returnCardsAZ = cardsAZ.join(" ");
    document.getElementById("card-container").innerHTML = returnCardsAZ;
  }

  else if (valorSel === "lancamento"){
    const releaseDate = sortRelease(filterDirector);
    const cardsRelease = [];
    console.log(releaseDate);

    for (let i = 0; i < releaseDate.length; i++) {
      cardsRelease.push(renderCardFilms(releaseDate[i]));
    }
    const returnCardsRelease = cardsRelease.join(" ");
    document.getElementById("card-container").innerHTML = returnCardsRelease;
  }

  else if (valorSel === "rating"){
    const rating = sortRating(filterDirector);
    const cardsRating = [];
    console.log(rating);

    for (let i = 0; i < rating.length; i++) {
      cardsRating.push(renderCardFilms(rating[i]));
    }
    const returnCardsRating = cardsRating.join(" ");
    document.getElementById("card-container").innerHTML = returnCardsRating;
  }

  else {
    console.log(valorSel);
  }
}

const radioInputs = document.querySelectorAll('input[type="radio"]');
// Attach event listener to each radio input
radioInputs.forEach(function(radioInput) {
  radioInput.addEventListener('change', function() {
    // Handle radio input change event
    console.log(this.value);
    const valorSel = this.value;
    console.log(valorSel);

    if (valorSel === "title-az"){
      const titleAZ = alfabeto(dataGhibli);
      const cardsAZ = [];
      console.log(titleAZ);

      for (let i = 0; i < titleAZ.length; i++) {
        cardsAZ.push(renderCardFilms(titleAZ[i]));
      }
      const returnCardsAZ = cardsAZ.join(" ");
      document.getElementById("card-container").innerHTML = returnCardsAZ;
    }

    else if (valorSel === "lancamento"){
      const releaseDate = sortRelease(dataGhibli);
      const cardsRelease = [];
      console.log(releaseDate);

      for (let i = 0; i < releaseDate.length; i++) {
        cardsRelease.push(renderCardFilms(releaseDate[i]));
      }
      const returnCardsRelease = cardsRelease.join(" ");
      document.getElementById("card-container").innerHTML = returnCardsRelease;
    }

    else if (valorSel === "rating"){
      const rating = sortRating(dataGhibli);
      const cardsRating = [];
      console.log(rating);

      for (let i = 0; i < rating.length; i++) {
        cardsRating.push(renderCardFilms(rating[i]));
      }
      const returnCardsRating = cardsRating.join(" ");
      document.getElementById("card-container").innerHTML = returnCardsRating;
    }

    else {
      console.log(valorSel);
    }
  });
});


