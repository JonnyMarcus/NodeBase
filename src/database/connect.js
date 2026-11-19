const { MongoClient } = require("mongodb");

const client = new MongoClient(process.env.MONGODB_URI);

async function connectToMongoDB() {
  try {
    await client.connect();
    console.log("You successfully connected to MongoDB!");
    return client;
  } catch (err) {
    console.error(err);
  }
}

async function disconnectFromMongoDB() {
  await client.close();
}

module.exports = {
  connectToMongoDB,
  disconnectFromMongoDB,
};
