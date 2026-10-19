const sqlite3 = require('sqlite3').verbose();
const { error } = require('console');
const path = require('path');

const database = path.resolve(__dirname, 'data.db');

function abrirDB(){
    try {
        console.log(`Base abierta correctamente`);
        return new sqlite3.Database(database);
    } catch (error) {
        console.log(`Error al abrir la base de datos: ${error.message}`);
        return null;
    }
}

function cerrarDB(database){
    database.close((error) => {
        if (error) {
            console.log(`Error al abrir la base de datos: ${error.message}`);
        } else {
            console.log(`Base cerrada correctamente`);
        }
    });
}

module.exports = { abrirDB, cerrarDB }