const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Usuarios registrados
const users = [
  { username: "oficina", password: "1234", role: "OFICINA" },
  { username: "chofer", password: "5678", role: "CHOFER" },
];

// Datos simulados de despachos
const data = [
  {
    chofer: "Pedro",
    cliente: "Cliente 1",
    kilos: 500,
    destino: "Depósito A",
  },
];

// Login de usuarios
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    res.json({ success: true, role: user.role });
  } else {
    res.status(401).json({ success: false, message: "Usuario o contraseña inválidos" });
  }
});

// Obtener datos para OFICINA
app.get("/api/data", (req, res) => {
  res.json(data);
});

// Agregar datos para CHOFER
app.post("/api/data", (req, res) => {
  const { chofer, cliente, kilos, destino } = req.body;
  data.push({ chofer, cliente, kilos, destino });
  res.json({ success: true });
});

module.exports = app;
