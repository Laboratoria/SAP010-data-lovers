export const buscarNome = (personagens, name) => {
  const filtraPersonagens = personagem => personagem.name.toUpperCase().includes(name.toUpperCase());
  const filtro = personagens.filter(filtraPersonagens);
  return filtro;
}


export function ordenarAZ(value, personagens){
  const ordenarPersonagensAZ = [...personagens]; //cria uma cópia da array para não modificar a original
  if(value === 'a-z'){
    ordenarPersonagensAZ.sort(function (a, b){
      if(a.name < b.name){
        return -1;
      }
    })
  }else{
    ordenarPersonagensAZ.sort(function (a, b){
      if(a.name > b.name){
        return -1;
      }
    })
  }
  return ordenarPersonagensAZ
}

//filtro por tipo
export function filtrar (personagens, value, key) {
  const filtro = personagens.filter(function(personagem) {
    const filtrado = personagem[key].toLowerCase() === value;
    return filtrado
  });

  return filtro;
}

//calculo porcentagem
export function calcularPorcentagem (tamanhoDaLista, tamanhoDaListaFiltrada){
  return Math.round((tamanhoDaListaFiltrada*100)/tamanhoDaLista);
}
