
export function pokeType(pokeArray, pokeChange) {
    if (pokeChange === "allPoke") {
        return pokeArray
    }
    const typeFiltered = pokeArray.filter(pokemon => pokemon.type.includes(pokeChange))
    return typeFiltered;
};

/*export function pokeOrder(pokeChangeOrder) {
    const ordered = pokeChangeOrder.sort((a,z) => {
        if (a > z) return 1
        if (a < z) return -1
        return 0
    }
)}*/


