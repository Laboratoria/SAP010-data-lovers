// Objetivo: Arquivo responsável por controlar a página inicial da aplicação

// Importando o model got_cast
const got_cast = require('../model/got_cast');

// Objeto HomeController
const HomeController = {

  // Método para renderizar a página inicial
  index: (req, res) => {

    // Buscando todos os personagens
    const characters = got_cast.findAll();

    // Renderizando a página inicial com os personagens
    res.render('index', { characters });
  }
}

// Exportando o objeto HomeController
module.exports = HomeController;