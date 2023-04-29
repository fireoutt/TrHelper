const express = require('express');
const app = express();

const routes = require('./routes');
const database = require('./utils/database');

const PORT = process.env.PORT || 3000;

// Подключение к базе данных
database.connect();

// Настройка маршрутов
app.use(routes);

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
