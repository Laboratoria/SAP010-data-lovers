// Objetivo: Arquivo responsável pelas rotas da página inicial
const express = require('express');
const HomeController = require ('../controllers/HomeController');

// Router
const router = express.Router();

// Rota para a página inicial
router.get('/', HomeController.index);

// Exportando o router
module.exports = router;