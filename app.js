const express = require("express");
const app = express();

app.use(express.json());
const ddlRoutes = require("./routes/ddl.routes");
app.use("/api/ddl", ddlRoutes);
app.listen(3000, () => {
console.log("Servidor ejecutándose en puerto 3000");
});