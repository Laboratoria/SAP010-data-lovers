const sortData = { //objeto que agrupa 
  data: function (ordenar){
    return console.log(ordenar, 'aqui data');
  },

  sortBy: function (ordenar){
    return console.log(ordenar, "aqui sortBy");
  },

  sortOrder: function (ordenar){
    return console.log(ordenar + "aqui sorOrder");
  }
}

export default sortData; // exporta o objeto