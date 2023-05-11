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

 

};


export default dataFunctions;
