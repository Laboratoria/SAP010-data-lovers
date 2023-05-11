//import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/athletes/athletes.js';
// import data from './data/rickandmorty/rickandmorty.js';




const atletas = data.athletes

const esportes = atletas.map(modalidades => modalidades.sport)



const país = atletas.map(países => países.team)


const esportesFiltrados = new Set()
esportes.forEach((esporte) => {
    esportesFiltrados.add(esporte)
})
console.log(esportesFiltrados)

const paísesFiltrados = new Set()
país.forEach((países) => {
    paísesFiltrados.add(países)
})




/*Muitas modalidades para colocar no menu

const modalidade = atletas.map(estilo => estilo.event)

const modalidadesFiltradas = new Set()
modalidade.forEach((modalidades) => {
    modalidadesFiltradas.add(modalidades)*/