require('dotenv').config();

const { createApp } = require('./app');
const AppData = require('./src/models/dataSource');
const startServer = async () => {
  const app = createApp();
  const PORT = process.env.PORT;
  await AppData.initialize();

  app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`);
  });
};

startServer();
