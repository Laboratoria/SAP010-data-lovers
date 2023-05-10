test('fetchPokemon deve retornar os dados do pokemon correto', async () => {


  const pokemonName = 'pikachu';
  const pokemonData = await fetchPokemon(pokemonName);
  expect(pokemonData.name).toEqual('pikachu');
  expect(pokemonData.id).toEqual(25);
});

test('fetchPokemon deve retornar null quando o pokemon não é encontrado', async () => {
  const pokemonName = 'naoexiste';
  const pokemonData = await fetchPokemon(pokemonName);
  expect(pokemonData).toBeNull();
});
it('returns `anotherExample`', () => {
expect(anotherExample()).toBe('OMG');
});

console.log()