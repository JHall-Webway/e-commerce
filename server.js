const express = require('express');
const app = express();
const routes = require('./routes');
const sequelize = require('./config/connection');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  const PORT = process.env.PORT || 3001;
  app.listen(PORT, () => console.log('Now listening'));
});
