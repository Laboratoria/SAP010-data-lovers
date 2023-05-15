import { example } from './data.js'; //puxa o filtro do data (nome, temporada em que aparece e etc)
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(example, data);

/*utilize src/main.js para todos os códigos que tenham a ver com a exibição dos dados na tela. Com isto nos referimos basicamente à interação com o DOM. Operações como criação de nós, registro de manejadores de eventos (event listeners ou event handlers) e etc.

Esta não é a única forma de dividir seu código. Pode utilizar mais arquivos e pastas, sempre e quando a estrutura estiver clara para suas colegas.

Neste arquivo você encontrará uma séris de imports comentados. Para carregar diferentes fontes de dados, você deverá "descomentar" estos imports. Cada um destes imports criará uma variável data com os dados correspondentes à fonte escolhida.

*/