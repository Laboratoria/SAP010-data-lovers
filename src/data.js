const data = {
  getMovies: async function() {
    try {
      const response = await fetch('./data/ghibli/ghibli.json');
      const data = await response.json();
      return data.films || [];
    } catch (error) {
      console.log('Ocorreu um erro ao obter os dados dos filmes:', error);
      return [];
    }
  },
  
  getDirectors: async function() {
    try {
      const response = await fetch('./data/ghibli/ghibli.json');
      const data = await response.json();
      const directors = new Set(data.films.map((film) => film.director));
      return Array.from(directors);
    } catch (error) {
      console.log('Ocorreu um erro ao obter os diretores:', error);
      return [];
    }
  }
};

export { data };
