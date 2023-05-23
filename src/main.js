import { filtroAz, filtroCont, calcularPercentualIngles } from "./data.js";
import countries from "./data/countries/countries.js";

function exibirPaises(arr) {
  const exibirFlagsDiv = document.getElementById("exibirFlags");
  exibirFlagsDiv.innerHTML = "";

  const flagsCountries = arr.map((country) => {
    const flagsDiv = document.createElement("div");
    const nameElement = document.createElement("h4");
    const flagElement = document.createElement("img");
    const languagesElement = document.createElement("p");
    const capitalElement = document.createElement("p");
    const populationElement = document.createElement("p");
    flagElement.classList.add("imgBand");
    nameElement.textContent = country.name.common;
    flagElement.src = country.flags.png;

    // Verificar se a propriedade "languages" existe e é um objeto
    if (country.languages && typeof country.languages === "object") {
      // Obter os valores das linguagens e unir em uma string separada por vírgula
      const languages =
        "IDIOMA: " + Object.values(country.languages).join(", ");
      languagesElement.textContent = languages;
    } else {
      // Caso a propriedade "languages" não exista ou não seja um objeto, exibir uma mensagem de ausência de dados
      languagesElement.textContent = "N/A";
    }

    capitalElement.textContent = "CAPITAL: " + country.capital;
    populationElement.textContent =
      "POPULAÇÃO: " + country.population.toLocaleString("pt-BR");

    flagsDiv.appendChild(nameElement);
    flagsDiv.appendChild(flagElement);
    flagsDiv.classList.add("bands");
    flagsDiv.appendChild(languagesElement);
    flagsDiv.appendChild(capitalElement);
    flagsDiv.appendChild(populationElement);

    return flagsDiv;
  });

  flagsCountries.forEach((flag) => {
    exibirFlagsDiv.appendChild(flag);
  });
}

// Chamar a função ao carregar a página
window.addEventListener("load", function () {
  exibirPaises(countries.countries);
});

// Adicionar o evento de mudança ao select
const a = document.getElementById("porcentagem");
const filtroOp = document.getElementById("opcao");
filtroOp.addEventListener("change", function () {
  const op = filtroOp.value;
  const filteredCountries = filtroCont(countries.countries, op);
  exibirPaises(filteredCountries);
  const b = calcularPercentualIngles(filteredCountries);
  a.classList.add("curiosidade");
  a.innerHTML =
    "<h3>O continente escolhido tem " +
    b +
    "% de países que usa o inglês como seu idioma oficial!</h3>";
});

const elementosDeOrdenacao = document.getElementById("az");
elementosDeOrdenacao.addEventListener("change", function () {
  const ord = elementosDeOrdenacao.value;
  const op = filtroOp.value;
  const resultado = filtroAz(filtroCont(countries.countries, op), ord);
  exibirPaises(resultado);
});
