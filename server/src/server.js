import mongoose from 'mongoose';

import app from './app';

const PORT = process.env.PORT || 5000;

const connectAndStartServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_SERVER_URL);

    app.listen(PORT, () => {
      console.log(`Успешно соединились. Порт ${PORT}`);
    });
  } catch (e) {
    console.log(`Ошибка при подключении: ${e.toString()}`);
  }
};

connectAndStartServer();
