
export function pokeType(pokeArray, pokeChange) {
    const typeFiltered = pokeArray.filter(pokemon => pokemon.type.includes(pokeChange))
    return typeFiltered;
}
