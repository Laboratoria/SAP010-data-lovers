import data from "./data/got/got.js"

function showCharacterCards() {
  const container = document.getElementById("characterContainer");

  // Limpa o conteúdo do container
  container.innerHTML = "";

  // Itera sobre os personagens e cria os cards dinamicamente
  characters.got.forEach(character => {
    const card = document.createElement("div");
    card.classList.add("card");

    const image = document.createElement("img");
    image.src = character.imageUrl;

    const name = document.createElement("h2");
    name.textContent = character.fullName;

    const title = document.createElement("p");
    title.textContent = character.title;

    const family = document.createElement("p");
    family.textContent = "Family: " + character.family;

    const born = document.createElement("p");
    born.textContent = "Born: " + character.born;

    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(title);
    card.appendChild(family);
    card.appendChild(born);

    container.appendChild(card);
  });
}

// Chama a função para exibir os cards dos personagens
showCharacterCards();

//let charactersFullname = data.got[0].fullName

document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.querySelector(".menu-icon")
  menuIcon.addEventListener("click", switchMenu);


  function switchMenu() {
    const menuDisplay = document.querySelector(".menu").style.display
    if (menuDisplay === "none" || !menuDisplay) {
      document.querySelector(".menu").style.display = 'flex'
      document.querySelector(".menu-icon").innerHTML = "<i class='fas fa-times fa-lg'></i>"
    } else {
      document.querySelector(".menu").style.display = 'none'
      document.querySelector(".menu-icon").innerHTML = "<i class='fas fa-bars fa-lg'></i>"
    }
  }
  console.log(data.got);
})