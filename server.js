require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const projetoRoutes = require("./src/routes/projetoRoutes");
const estudanteRoutes = require("./src/routes/estudanteRoutes");
const reportRoutes = require("./src/routes/reportRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use ("/api/projetos", projetoRoutes);
app.use ("/api/estudantes", estudanteRoutes);
app.use("/api", reportRoutes);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
