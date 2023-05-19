// estas funciones son de ejemplo
/* 
import countries from "./data/countries/countries";

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};
 */

function filtroAz(arr, opcao) {
  if (opcao === "az") {
    return arr.sort((a, b) => {
      if (a.name.common < b.name.common) {
        return -1;
      } else if (a.name.common > b.name.common) {
        return 1;
      }
      return 0;
    });
  } else if (opcao === "za") {
    return arr.sort((a, b) => {
      if (a.name.common > b.name.common) {
        return -1;
      } else if (a.name.common < b.name.common) {
        return 1;
      }
      return 0;
    });
  } else {
    arr;
  }
}

function filtroCont(arr, opcao) {
  const america = [];
  const europe = [];
  const asia = [];
  const africa = [];
  const oceania = [];
  const antarctica = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].continents[0] === "America") {
      america.push(arr[i]);
    } else if (arr[i].continents[0] === "Europe") {
      europe.push(arr[i]);
    } else if (arr[i].continents[0] === "Asia") {
      asia.push(arr[i]);
    } else if (arr[i].continents[0] === "Africa") {
      africa.push(arr[i]);
    } else if (arr[i].continents[0] === "Oceania") {
      oceania.push(arr[i]);
    } else {
      antarctica.push(arr[i]);
    }
  }
  if (opcao === "Oceania") {
    return oceania;
  } else if (opcao === "Ásia") {
    return asia;
  } else if (opcao === "Europa") {
    return europe;
  } else if (opcao === "América") {
    return america;
  } else if (opcao === "África") {
    return africa;
  } else if (opcao === "Antártida") {
    return antarctica;
  } else {
    return arr;
  }
}

function calcularPercentualIngles(paises) {
  const totalPaises = paises.length;
  let paisesQueFalamIngles = 0;

  for (let i = 0; i < totalPaises; i++) {
    const idiomas = paises[i].languages;

    if (idiomas && idiomas.eng === "English") {
      paisesQueFalamIngles++;
    }
  }

  const percentual = (paisesQueFalamIngles / totalPaises) * 100;
  return percentual.toFixed(2);
}

export { filtroAz, filtroCont, calcularPercentualIngles };