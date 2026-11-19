const express = require("express");
const app = express();
const UserModels = require("../src/models/users.models.js");

const port = process.env.PORT || 8080;

// Permite receber JSON no corpo das requisições
app.use(express.json());

app.get("/home", (req, res) => {
  res.status(200).send("Servidor funcionando!");
});

app.get("/users", async (req, res) => {
  try {
    const users = await UserModels.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/users", async (req, res) => {
  try {
    const user = await UserModels.create(req.body);

    res.status(201).json(user);
  } catch (error) {
    console.error("Erro ao cadastrar usuário:", error);
    res.status(500).json({ error: error.message || "Erro ao cadastrar usuário" });
  }
});

module.exports = app;
