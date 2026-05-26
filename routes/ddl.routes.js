const express = require("express");
const router = express.Router();
const {
crearTabla,
agregarColumna,
eliminarTabla
} = require("../controllers/ddl.controller");
router.post("/create", crearTabla);
router.put("/alter", agregarColumna);
router.delete("/drop", eliminarTabla);
module.exports = router;