const dataFunctions = {
  filterCards: function(characters, value, key) {
    return characters.filter(function(character) {
      return character[key].toLowerCase() === value.toLowerCase();
    });  
  }

  /*Key: o parâmetro key representa o nome da propriedade em cada objeto 
  do array de caracteres que deve ser comparado ao parâmetro value.;

  Value: o parâmetro value representa o valor que a propriedade "key" de 
  cada objeto na matriz de caracteres deve corresponder.*/

  ordenarCrescente: function(characters) {
    const ordem = characters.sort(function (a, b) {
        if (a.name > b.name) {
          return 1;
        }else {
          return -1;
        }            
        
      });  

    return ordem;
},   

ordenarDecrescente: function(characters) {
    const ordem = characters.sort(function (a, b) {            
        if (a.name > b.name) {
          return -1;
        }else {
          return 1;
        }            
        
      });   

    return ordem;
},   

ordenar: function(characters, sortBy) {        
    const copy = [...characters]; 

    if(sortBy === "ascending") {
        return dataFunctions.ordenarCrescente(copy);
    }
    else if(sortBy === "descending" ) {
        return dataFunctions.ordenarDecrescente(copy);
    }
},


 

};


export default dataFunctions;
