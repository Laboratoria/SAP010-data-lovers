import { example } from './data.js'; //importando do data.js

import data from './data/got/got.js'; // importando do got.js


document.getElementById("buscar").addEventListener("click", onClickEnviar); // add o evento de clique ao botão vinculando a função

function onClickEnviar() {
 console.log(example, data);


    const ordenar = document.getElementById('ordenar'); //lê o input 'ordenar'
    const familia = document.getElementById('familia'); //lê o input 'familia'

}