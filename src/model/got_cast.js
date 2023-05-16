// Importando as dependências
const db = require('../database/got.json');
const fs = require('fs');
const path = require('path');

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
}

// Exportando o objeto got_cast
module.exports = got_cast;