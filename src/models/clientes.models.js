import mysql from 'mysql2/promise';
import connection from '../db.js'

// Función para crear la tabla
export default async function createTable() {
    try {
        // Establece la conexión a la base de datos
        await connection.connect();

        // Crea la tabla
        const query = `
      CREATE TABLE IF NOT EXISTS usuarios (
        id INT PRIMARY KEY AUTO_INCREMENT,
        nombre VARCHAR(50),
        email VARCHAR(50),
        edad INT
      )
    `;
        await connection.query(query);

        console.log('Tabla creada exitosamente');
    } catch (error) {
        console.error('Error al crear la tabla:', error);
    } finally {
        // Cierra la conexión a la base de datos
        // await connection.end();
    }
}