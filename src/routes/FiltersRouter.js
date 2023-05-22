const express = require('express');
const FiltersController = require('../controllers/FiltersController');

// Router
const router = express.Router();

// Rota para a página de filtros
router.get('/alphabetical', FiltersController.alphabeticalOrder);

// Rota para a página targaryan
router.get('/targaryan', FiltersController.targaryanOrder);

// Exportando o router
module.exports = router;