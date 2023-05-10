import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';


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




