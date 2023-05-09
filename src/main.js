import { example } from './data.js'; //importando do data.js

import data from './data/got/got.js'; // importando do got.js


document.getElementById("buscar").addEventListener("click", onClickEnviar); // add o evento de clique ao botão vinculando a função

function onClickEnviar() {
    console.log(example, data);
}
