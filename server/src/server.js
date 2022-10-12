const mongoose = require('mongoose');
const app = require('./app');

const { PORT, MONGO_SERVER_URL } = process.env;

const connectAndStartServer = async () => {
  try {
    await mongoose.connect(MONGO_SERVER_URL);

    app.listen(PORT, () => {
      console.log(`Успешно соединились. Порт ${PORT}`);
    });
  } catch (e) {
    console.log(`Ошибка при подключении: ${e.toString()}`);
  }
};

connectAndStartServer();
