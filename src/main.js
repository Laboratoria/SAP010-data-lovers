import data from './data/ghibli/ghibli.js';
import {alfabeto, sortRelease, sortRating, renderCardFilms, director, better, avaliarDiretor, rt_score} from './data.js';

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
}

document.getElementById("img-header").addEventListener("mouseover", returnFilms);
function returnFilms(){
  document.getElementById("sprite").innerHTML =  '<img class="sprite" src="./images/sprite.gif" alt="Sprite">';
}

document.getElementById("second-filter").addEventListener("change", betterFilms);

function betterFilms() {
  const element2 = document.getElementById("second-filter");
  const valorSelDirector = element2.options[element2.selectedIndex].value;
  console.log(better(dataGhibli, valorSelDirector));
  console.log(avaliarDiretor(dataGhibli, valorSelDirector));
  console.log(rt_score(dataGhibli, valorSelDirector));
  const info = avaliarDiretor(dataGhibli, valorSelDirector);
  document.getElementById("infos").innerHTML = info;
}

document.querySelector('input[type="radio"]').addEventListener("checked", handleChange);
function handleChange(event) {
  // Lógica para o evento de mudança
  console.log("Mudança detectada:", event.target.value);
  const valorSel = event.target.value;
  const element2 = document.getElementById("second-filter");
  const valorSelDirector = element2.options[element2.selectedIndex].value;
  const array = dataGhibli.slice();
  if (valorSelDirector === "all") {
    if (valorSel === "title-az"){
      const titleAZ = alfabeto(array);
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
  }
  else{
    const filterDirector = director(dataGhibli, valorSelDirector);
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
}
const inputRadios = document.querySelectorAll('input[type="radio"]');
inputRadios.forEach(function(inputRadio) {
  inputRadio.addEventListener('change', handleChange);
});


