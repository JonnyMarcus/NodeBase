require("dotenv").config();

const app = require("./models/express");
const { connectToMongoDB } = require("./src/database/connect");

const port = process.env.PORT || 8080;

connectToMongoDB().then(() => {
  app.listen(port, () => {
    console.log(`Servidor com Express rodando na porta ${port}`);
  });
});
