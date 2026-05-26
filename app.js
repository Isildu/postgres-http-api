const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const ddlRoutes = require("./routes/ddl.routes");
app.use("/api/ddl", ddlRoutes);

app.get("/", (req, res) => {
res.send("Bienvenido a la API de PostgreSQL");
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en puerto ${PORT}`);
});