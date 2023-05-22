// Importando as dependências
const db = require('../database/got.json');
const fs = require('fs');
const path = require('path');
const { all } = require('../routes/FiltersRouter');

// Objeto got_cast
const got_cast = {
  
  // Método para listar todos os personagens
  findAll: () => {

    // Array para armazenar os personagens
    const character = [];

    // Percorrendo o array de personagens
    db.got.map(charac => {
      // Adicionando os personagens no array
      character.push({
        id: charac.id,
        firstName: charac.firstName,
        lastName: charac.lastName,
        fullName: charac.fullName,
        title: charac.title,
        family: charac.family,
        image: charac.imageUrl,
        born: charac.born
      })
    });

    return character;
  },  

  // Método para ordenar os personagens em ordem alfabética
  Alphabetical: () => {
    // Array para armazenar os personagens
    const character = [];

    // Percorrendo o array de personagens
    db.got.map(charac => {
      // Adicionando os personagens no array
      character.push({
        id: charac.id,
        firstName: charac.firstName,
        lastName: charac.lastName,
        fullName: charac.fullName,
        title: charac.title,
        family: charac.family,
        image: charac.imageUrl,
        born: charac.born
      })
    });

    // Ordenando os personagens em ordem alfabética
    character.sort((a, b) => {
      if (a.fullName < b.fullName) {
        return -1;
      }
      if (a.fullName > b.fullName) {
        return 1;
      }
      return 0;
    });

    // Retornando os personagens em ordem alfabética
    return character;
  }
},



// Método para listar os personagens targaryan
    Targaryan_house: () => {
  
      // Array para armazenar os personagens
      const character = [];
  
      // Percorrendo o array de personagens
      db.got.map(charac.family === targaryan => {
        // Adicionando os personagens no array
        character.push ({
          id: charac.id,
          firstName: charac.firstName,
          lastName: charac.lastName,
          fullName: charac.fullName,
          title: charac.title,
          family: charac.family,
          image: charac.imageUrl,
          born: charac.born
        })
      });
  
      return character;
    }
  


// Exportando o objeto got_cast
module.exports = got_cast;