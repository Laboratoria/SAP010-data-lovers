//Importando as dependências
const express = require('express');
const path = require('path');
const homeRouter = require('./src/routes/HomeRouter');

// Variáveis
const app = express();
const port = 3000;

// Configuração / Middlewares
app.set('view engine', 'ejs');

// Configuração do caminho das views
app.set('views', path.resolve("src", "views"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Arquivos estáticos
app.use(express.static(path.resolve("src", "public")));

// Rotas
app.use(homeRouter);

app.use((req, res, next) => {
  res.status(404);
});

// Iniciando o servidor
app.listen(port, () => {
  console.log(`App rodando em http://localhost:${port}`);
});