export function filterAmericaSul() {
    let americaSul = [];
    continents.forEach(function(countries) {
      if(countries.subregion === "South America") {
        americaSul.push(continents); //
      }
    })
    return americaSul
  };



export const anotherExample = () => {
  return 'OMG';
};

