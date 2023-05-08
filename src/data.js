import data from './data/rickandmorty/rickandmorty.js';

// estas funciones são de exemplo

/*export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};
import data from './data/rickandmorty/rickandmorty.js';
*/
function filterData(data, condition) {
  return data.slice().filter(item => item.gender === condition);
};

function filterStatus(data, condition) {
  return data.slice().filter(item => item.status === condition);
};

function sortNames(arr, condition) {
  if (condition === "sortAZ") {
    return arr.slice().sort((a, b) => (a.name > b.name ? 1 : -1));
  } else if (condition === "sortZA") {
    return arr.slice().sort((a, b) => (a.name > b.name ? -1 : 1));
  } else {
    document.location.reload(true);
  }
};

function percCalculation(data) {
  return ((data.length * 100) / 493).toFixed();
};

function filterName(data, condition) {
  return data.slice().filter(item => item.name.toUpperCase() === condition);
};

app = {
  filterData,
  filterStatus,
  sortNames,
  percCalculation,
  filterName,
};
