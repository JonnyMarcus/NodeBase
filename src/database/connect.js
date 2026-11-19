const mongoose = require("mongoose");

async function connectToMongoDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Conectado ao MongoDB!");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

module.exports = { connectToMongoDB };
