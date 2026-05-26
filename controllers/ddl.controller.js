const pool = require("../database");

// CREATE TABLE
const crearTabla = async (req, res) => {
    const query = `
    CREATE TABLE IF NOT EXISTS productos (
        id SERIAL PRIMARY KEY,
        nombre VARCHAR(100),
        precio NUMERIC(10,2),
        stock INTEGER DEFAULT 0
        );
`;
    try {
        await pool.query(query);
        res.status(201).json({
            ok: true,
            mensaje: "Tabla creada"
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            error: error.message
        });
    }
};

// ALTER TABLE

const agregarColumna = async (req, res) => {
    const query = `
        ALTER TABLE productos
        ADD COLUMN categoria VARCHAR(50);
        `;
    try {
        await pool.query(query);
        res.status(200).json({
            ok: true,
            mensaje: "Columna agregada"
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            error: error.message
        });
    }
};

// DROP TABLE
const eliminarTabla = async (req, res) => {
    const query = `
DROP TABLE IF EXISTS productos;
`;
    try {

        await pool.query(query);
        res.status(200).json({
            ok: true,
            mensaje: "Tabla eliminada"
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            error: error.message
        });
    }
};
module.exports = {
    crearTabla,
    agregarColumna,
    eliminarTabla
};