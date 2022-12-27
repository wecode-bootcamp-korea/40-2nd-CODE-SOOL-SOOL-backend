const { DataSource } = require('typeorm');

const AppData = new DataSource({
  type: process.env.TYPEORM_TYPE,
  host: process.env.TYPEORM_HOST,
  port: process.env.TYPEORM_PORT,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
});

AppData.initialize()
  .then(() => {
    console.log('Data Source has been initialized');
  })
  .catch((err) => {
    console.error('Failed to initialize Data Source', err);
    AppData.destroy();
  });

module.exports = AppData;
