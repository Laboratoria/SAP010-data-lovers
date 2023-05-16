function filtroAz (arr, opcao) {
  if (opcao == 'az'){
    return arr.sort((a, b) => {
      if (a.name.common < b.name.common) {
          return -1;
      }
      if (a.name.common > b.name.common) {
          return 1;
      }
      return 0;
  })
}

else if(opcao == 'za'){
  return arr.sort((a, b) => {
    if (a.name.common > b.name.common) {
      return -1;
    } 
    if (a.name.common < b.name.common) {
      return 1;
    } 
      return 0;
    });
    } else{arr}
  }


  function filtroCont(arr, opcao) {
    const america = [];
    const europe = [];
    const asia = [];
    const africa = [];
    const oceania = [];
    const antarctica = [];

    for (let i = 0; i < arr.length; i++) {
      if (arr[i].continents == "America") {
        america.push(arr[i]);
      }
      else if (arr[i].continents == "Europe") {
        europe.push(arr[i]);
      }
      else if (arr[i].continents == "Asia") {
        asia.push(arr[i]);
      }else if (arr[i].continents == "Africa") {
        africa.push(arr[i]);
      }else if (arr[i].continents == "Oceania") {
        oceania.push(arr[i]);
      }
      else  {
        antarctica.push(arr[i]);
      }
  }
  if(opcao == 'Oceania'){
    return oceania
  }
  else if (opcao == 'Ásia'){
    return asia
  }
  else if (opcao == 'Europa'){
    return europe
  }
  else if (opcao == 'América'){
  return america
}
else if (opcao == 'África'){
  return africa
}
else if (opcao == 'Antártida'){
  return antarctica
}
else {
  return arr
}
}

  


export { filtroAz, filtroCont}