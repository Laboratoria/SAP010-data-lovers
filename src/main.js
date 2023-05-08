// Importa os dados dos países
import data from './data/countries/countries.js';

// Seleciona o elemento do seletor e da lista de países
const selectorElement = document.querySelector('#selector');
const countryListElement = document.querySelector('#country-list');

// Ordena os países em ordem alfabética
const orderByAlphabetical = () => {
  // Faz uma cópia do array de países e ordena em ordem alfabética
  const sortedCountries = data.countries.slice().sort((a, b) => a.name.common.localeCompare(b.name.common));
  // Renderiza a lista de países ordenada
  renderCountryList(sortedCountries);
};

// Função para renderizar a lista de países
const renderCountryList = (countries) => {
  // Limpa a lista antes de renderizar
  countryListElement.innerHTML = '';
  
  // Para cada país, cria um elemento <li> e um elemento <img>
  countries.forEach((country) => {
    const liElement = document.createElement('li');
    const imgElement = document.createElement('img');
    
    // Define o atributo src do elemento <img> como a URL da bandeira e o atributo alt com o nome do país
    imgElement.src = country.flags.png; // Acessa a propriedade flags.png do objeto country para definir a URL da bandeira
    imgElement.alt = `Flag of ${country.name.common}`; // Acessa a propriedade name.common do objeto country para definir o nome do país no atributo alt da imagem
    
    // Cria um elemento <span> com o nome do país e adiciona-o como filho do elemento <li>
    const nameElement = document.createElement('span');
    nameElement.textContent = country.name.common; // Acessa a propriedade name.common do objeto country para definir o nome do país no elemento <span>
    liElement.appendChild(imgElement);
    liElement.appendChild(nameElement);
    
    // Adiciona o elemento <li> como filho da lista de países
    countryListElement.appendChild(liElement);
  });
};

// Event listener para mudanças no seletor
selectorElement.addEventListener('change', (event) => {
  // Verifica o valor do seletor
  const value = event.target.value;
  if (value === 'country') {
    // Renderiza a lista de países não ordenada
    renderCountryList(data.countries.slice()); // Acessa o array de países através da propriedade countries do objeto data e cria uma cópia dele com a função slice(). Depois, passa essa cópia como parâmetro para a função renderCountryList.
  } else if (value === 'alphabetical') {
    // Ordena os países em ordem alfabética e renderiza a lista
    orderByAlphabetical();
  }
});

/*
  O bloco "if" verifica se o valor selecionado no seletor é "country".
  Se for, chama a função "renderCountryList" passando uma cópia do array de países 
  (para evitar modificar o array original) usando o método "slice". 
  Isso renderiza a lista de países em ordem original (não ordenada).

  O bloco "else if" verifica se o valor selecionado no seletor é "alphabetical". 
  Se for, chama a função "orderByAlphabetical", que ordena o array de países 
  em ordem alfabética e chama a função "renderCountryList" com o array ordenado, 
  para renderizar a lista de países em ordem alfabética.
*/





