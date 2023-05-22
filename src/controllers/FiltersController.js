// Objetivo: Arquivo responsável por controlar os filtros da aplicação

// Importando o model got_cast
const got_cast = require('../model/got_cast');

// Objeto FiltersController
const FiltersController = {

    // Método para ordenar os personagens em ordem alfabética
    alphabeticalOrder: (req, res) => {
        // Verificando se está chegando até aqui
        // console.log('Chegou na página de filtros');
        // Ordenando os personagens em ordem alfabética

        // Array para armazenar os personagens
        var characters = [];

        characters = got_cast.Alphabetical();

        // Renderizando a página de filtros
        res.render('index', { characters });
    },


    targaryanOrder: (req, res) => {
        var Tcharacters = [];

        Tcharacters = got_cast.Targaryan();

        res.render('index', {Tcharacters});
    }
}

// Exportando o objeto FiltersController
module.exports = FiltersController;