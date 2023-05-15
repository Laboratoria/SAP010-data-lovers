test('pokemonName deve retornar os dados do pokemon correto', async () => {
//(test async () => { ) é a estrutura padrão para formular um test 

  const pokemonName = 'pikachu'; // APIresponse busca e retorna as informações solicitadas  "pikachu"
  const pokemonData = await pokemonName('pikachu');// await busca as informações de forma assincronica 
  expect(pokemonData.name).toEqual('pikachu'); // verifica se o nome do pokemon retornado na constante pokedata é igual a pikachu / toEqual quer dizer que é igual 
  expect(pokemonData.id).toEqual(25); //para verificar se o id do Pokémon retornado na constante pokemonData é igual a undefined / toEqual quer dizer que é igual 
});

test('pokemonName deve retornar Not found quando o pokemon não é encontrado', async () => {
  const pokemonName = 'not-found-pokemon'; // simula uma resposta da API quando a função é chamada com um Pokémon
  const pokemonData = await pokemonName(); //é chamada assincronamente 
  expect(pokemonData).toBeNull();
});

//console.log()