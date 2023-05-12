const dataFunctions = {
  filter: function (characters, value, key) { /*esta função faz o filtro de todas as categorias */
  console.log(characters, value, key)
    const filter = characters.filter(function (character) {
      
      const filtered = character[key].includes(value)
      
      return filtered;
    });
    console.log({filter})
    return filter; 
  },

  ascending: function (characters) {
    const order = characters.sort(function (a, b) {
      if (a.name > b.name) {
        return 1;
      } else {
        return -1;
      }
    });

    return order;
  },

  descending: function (characters) {
    const order = characters.sort(function (a, b) {
      if (a.name > b.name) {
        return -1;
      } else {
        return 1;
      }
    });

    return order;
  },

  order: function (characters, sortBy) {
    const copy = [...characters];

    if (sortBy === "ascending") {
      return dataFunctions.ascending(copy);
    } else if (sortBy === "descending") {
      return dataFunctions.descending(copy);
    }
  },

  searchForName: function (characters, name) {
    const filter = characters.filter(function (character) {
      const filteredSearch = character.name
        .toLowerCase()
        .includes(name.toLowerCase());
      return filteredSearch;
    });
    return filter;
  },

  calculatePercentage: function (sizeList, sizefilteredList) {
    return Math.round((sizefilteredList * 100) / sizeList);
  },
};

export default dataFunctions;
