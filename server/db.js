// db.js
require('dotenv').config({ path: "./server/.env" })
const { Client } = require('pg');

// configure the PostgreSQL client
const client = new Client({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    ssl: {
        rejectUnauthorized: false,
    },
});

// connect to the database
client.connect()
    .then(() => {
        console.log('Connected to PostgreSQL database');
    })
    .catch((err) => {
        console.error('Database connection error', err.stack);
    });

module.exports = client;