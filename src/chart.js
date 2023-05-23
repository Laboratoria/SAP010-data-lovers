import { computeStats } from './data.js';
import data from './data/pokemon/pokemon.js';



const plotChart = (percentage) => {

  let labelsChart = []

  let dataPokemon = []

  for (const type in percentage) {

    labelsChart.push(type);

    dataPokemon.push(percentage[type])

  }//endFor
  const datas = {

    labels: labelsChart,
    datasets: [{
      label: 'Percentual',
      data: dataPokemon,
      backgroundColor: [
        'rgb(97, 170, 32)',
        'rgb(170, 130, 200)',
        'rgb(255, 151, 65)',
        'rgb(137, 180, 260)',
        'rgb(40, 140, 300)',
        'rgb(131, 195, 0)',
        'rgb(145, 154, 162)',
        'rgb(251, 210, 0)',
        'rgb(218, 129, 69)',
        'rgb(225, 44, 106)',
        'rgb(209, 110, 109)',
        'rgb(201, 160, 135)',
        'rgba(113,205,226,255)',
        'rgb(190, 103, 207)',
        'rgba(11,116,173,255)',
        'rgb(251, 138, 236)',
        'rgb(91, 83, 102)',
        'rgb(90, 143, 163)'
      ],
      hoverOffset: 4
    }]
  };


  const config = {
    type: 'pie',
    data: datas,
  };

  const ctx = document.getElementById('myChart');

  new Chart(ctx, config);

}//endPlotChart

plotChart(computeStats.calculatePokemonTypesInPercentages(data))
