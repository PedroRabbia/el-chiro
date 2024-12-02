const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Serve frontend static files
app.use(express.static(path.join(__dirname, "../frontend")));

// Endpoints del backend
app.post("/api/login", (req, res) => {
  // Lógica de autenticación
});

app.get("/api/data", (req, res) => {
  // Lógica para enviar datos
});

app.post("/api/data", (req, res) => {
  // Lógica para agregar datos
});

// Puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
