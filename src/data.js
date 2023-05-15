export {sortByName,   filterByType,   searchByName, };

const sortByName = (data, valor) => {
  const newData = [].concat(data);
  if (valor === "A-Z") {
    newData.sort((a, b) => a.name.localeCompare(b.name));
  } else {
    newData.sort((a, b) => b.name.localeCompare(a.name));
  }
  return newData;
};


const filterByType = (data, valor) => {
  const filterPkmnByType = data.filter(
    (pokemon) => pokemon.type.indexOf(valor.toLowerCase()) > -1
  );
  return filterPkmnByType;
};

const searchByName = (pokemon, name) => {
  return pokemon.filter((pokemon) => {
    return pokemon.name.toLowerCase().includes(name.toLowerCase());
  });
};



