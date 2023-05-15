test('fetchPokemon deve retornar os dados do pokemon correto', async ()=>{
//teste

const pokemonName= 'pikachu';
const pokemonData= await fetchPokemon (pokemonName);
expect (pokemonData.name).toEqual('pikachu');
expect (pokemonData.id).toEqual(25);
});

test('fetchPokemon deve retornar null quando o pokemon não é encontrado', async () => {
  const pokemonName= 'nãoexiste';
  const PokemonData= await fetchPokemon (pokemonName);
  expect (PokemonData).toBeNull();
});
it('returns `anotherExample`',() => {
expect(anotherExample()).toBe('OMG');
});

console.log()