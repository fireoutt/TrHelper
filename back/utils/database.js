const mongoose = require('mongoose');

const DB_URL = process.env.DB_URL || 'mongodb://localhost:27017/myapp';

exports.connect = () => {
  mongoose
    .connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    })
    .then(() => {
      console.log('Подключение к базе данных установлено');
    })
    .catch((error) => {
      console.log(error);
      console.log('Не удалось подключиться к базе данных');
    });
};
