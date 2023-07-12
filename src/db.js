import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME
});


async function connectToDatabase() {
    // Verificar conexión exitosa
    console.log('Conexión exitosa a MySQL');

    // Crear una base de datos
    const databaseName = process.env.DB_NAME;
    await connection.query(`CREATE DATABASE IF NOT EXISTS ${databaseName}`);
    console.log(`Base de datos ${databaseName} creada correctamente`);

    // Seleccionar la base de datos
    await connection.query(`USE ${databaseName}`);
    console.log(`Usando la base de datos ${databaseName}`);

    // Realiza tus operaciones con la base de datos aquí

    // connection.end();
}

connectToDatabase().catch(error => {
    console.error('Error al conectar a MySQL:', error);
});


export default connection;