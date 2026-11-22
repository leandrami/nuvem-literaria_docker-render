const express = require('express');
const cors = require('cors');
const bookRoutes = require('./routes/bookRoutes');

const app = express();

// CORS: só o endereço do front pode chamar a API.
// FRONTEND_URL vem do Render (sem "/" no final), se não existir, libera tudo.
app.use(cors({ origin: process.env.FRONTEND_URL || '*' }));

// Faz a API entender o JSON que o front envia nas requisições.
app.use(express.json());

app.use('/api/books', bookRoutes);

module.exports = app;