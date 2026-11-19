import { express } from "express";
const app = express();
const port = process.env.PORT;

app.get("/home", (req, res) => {
  res.status(200).send();
});

app.get("/users", (req, res) => {
  const users = [
    {
      name: "jhon doe",
      email: "jhondoe@gmail.com",
    },
    {
      name: "jane",
      email: "janedoe@gmail.com",
    },
  ];
  res.status(200).json(users);
});

app.listen(port, () =>
  console.log(`Servidor com Express rodando na porta ${port}`),
);
