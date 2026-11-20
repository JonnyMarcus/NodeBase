const express = require("express");
const app = express();
const UserModels = require("../src/models/users.models.js");
const port = process.env.PORT || 8080;

app.use(express.json());

app.set("views engine", "ejs");
app.set("views", "../src/views");

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

app.get("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModels.findById(id);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

app.get("/views/users", async (req, res) => {
  res.render("index");
});

app.post("/users", async (req, res) => {
  try {
    const user = await UserModels.create(req.body);

    res.status(201).json(user);
  } catch (error) {
    console.error("Erro ao cadastrar usuário:", error);
    res
      .status(500)
      .json({ error: error.message || "Erro ao cadastrar usuário" });
  }
});

app.patch("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModels.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModels.findByIdAndRemove(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = app;
