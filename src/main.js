//import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/athletes/athletes.js';



const atletas = data.athletes //filtra atletas dentro do array





//menu esportes:
const esportes = atletas.map(modalidades => modalidades.sport) //filtra modalidade esportes dentro do array atletas

const esportesFiltrados = new Set()  //filtra os esportes repetidos
esportes.forEach((esporte) => {
    esportesFiltrados.add(esporte) 
})
const esportesMenuArray = [...esportesFiltrados].sort() //converte 'seet' em array e coloca em ordem alfabetica

const esportesMenu = esportesMenuArray.map(esporte => `<option value="" selected disabled hidden>Esportes</option>
<option value="${esporte}">${esporte}</option> ` ) //laço que concatena cada variável dentro do html

const selecionarEsporte = document.querySelector(".selecionar-esporte") //variável que linka com o html
selecionarEsporte.innerHTML = esportesMenu //joga a variável para o html



//menu de países
const país = atletas.map(países => países.team)

const paísesFiltrados = new Set()
país.forEach((países) => {
    paísesFiltrados.add(países)
})

const paísesMenuArray = [...paísesFiltrados].sort() // converte o 'seet' para array e ordena em ordem alfabetica


const paísesMenu = paísesMenuArray.map(países =>  `<option value="" selected disabled hidden>Países</option>
<option value="${países}">${países}</option> ` ) //laço que concatena cada variável dentro do html

const selecionarPaíses = document.querySelector(".selecionar-país")//variável que linka com o html
selecionarPaíses.innerHTML = paísesMenu //joga a variável para o html



// menu de categorias

const modalidade = atletas.map(estilo => estilo.event)

const modalidadesFiltradas = new Set()
modalidade.forEach((modalidades) => {
    modalidadesFiltradas.add(modalidades)
})

const modalidadesMenuArray = [...modalidadesFiltradas].sort() //converte o 'seet' para array e ordena em ordem alfabetica

console.log(modalidadesMenuArray)

const modalidadesMenu = modalidadesMenuArray.map(modalid => `<option value="" selected disabled hidden>Categorias</option>
<option value="${modalid}">${modalid}</option> ` ) //laço que concatena cada variável dentro do html

const selecionarCategoria = document.querySelector(".selecionar-categoria")// variável que linka com html
selecionarCategoria.innerHTML = modalidadesMenu // joga variável para o html