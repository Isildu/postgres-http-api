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

const crearTablaProductos = async (req, res) => {
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

const crearTablaUsuarios = async (req, res) => {
    const query = `
    CREATE TABLE IF NOT EXISTS usuarios (
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

const agregarColumnaProductos = async (req, res) => {
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
const agregarColumnaUsuarios = async (req, res) => {
    const query = `
        ALTER TABLE usuarios
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
const eliminarTablaProductos = async (req, res) => {
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
const eliminarTablaUsuarios = async (req, res) => {
    const query = `
DROP TABLE IF EXISTS usuarios;
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
    crearTablaProductos,
    agregarColumnaProductos,
    eliminarTablaProductos,
    crearTablaUsuarios,
    agregarColumnaUsuarios,
    eliminarTablaUsuarios
};