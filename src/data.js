//lógica da função para filtrar os nomes dos personagens
function searchName(fullName) {
    const filterName = (character) => {
      if (character.fullName.toLowerCase().includes(fullName.toLowerCase())) {
        return true;
      }
      return false;
    };
  
    const filteredNames = characters.got.filter(filterName);
    return filteredNames;
  }

function Aggregate(family, filteredNames) {
    const numeroNomesFiltrados = filteredNames.length;
    const totalFamily = family.length;
    return `O tipo selecionado corresponde à ${((numbercharacterfiltered / totalFamily) * 100).toFixed(2)}% pertencente à família.`;
  }

  export {
    buscarNome,
    calculoAgragado
  }