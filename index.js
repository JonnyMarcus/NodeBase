require("dotenv").config();

const {
  connectToMongoDB,
  disconnectFromMongoDB,
} = require("./src/database/connect");

connectToMongoDB();
