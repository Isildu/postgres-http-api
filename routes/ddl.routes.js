const express = require("express");
const router = express.Router();
const {
    crearTablaProductos,
    agregarColumnaProductos,
    eliminarTablaProductos,
    crearTablaUsuarios,
    agregarColumnaUsuarios,
    eliminarTablaUsuarios
} = require("../controllers/ddl.controller");

router.post("/createtable/productos", crearTablaProductos);
router.put("/altercolumn/productos", agregarColumnaProductos);
router.delete("/droptable/productos", eliminarTablaProductos);
router.post("/createtable/usuarios", crearTablaUsuarios);
router.put("/altercolumn/usuarios", agregarColumnaUsuarios);
router.delete("/droptable/usuarios", eliminarTablaUsuarios);
router.get("/createuser", formUser);
router.post("/createuser", createUser);

module.exports = router;