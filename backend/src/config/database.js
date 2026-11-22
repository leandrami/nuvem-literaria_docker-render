const { Pool } = require('pg');
require('dotenv').config();

// Se existir DATABASE_URL (q é o caso no Render), usa ela: uma URL única com usuário, senha, host e banco. Senão, usa as variáveis separadas (DB_HOST etc.) como antes, para continuar funcionando no PC.
const pool = new Pool(
  process.env.DATABASE_URL
    ? {
        connectionString: process.env.DATABASE_URL,
        // SSL = conexão criptografada. A conexão externa do Render exige; a interna não. Por isso é opcional: DB_SSL=true.
        ssl: process.env.DB_SSL === 'true' ? { rejectUnauthorized: false } : false,
      }
    : {
        host: process.env.DB_HOST || 'localhost',
        port: Number(process.env.DB_PORT) || 5432,
        user: process.env.DB_USER || 'postgres',
        password: process.env.DB_PASSWORD || 'postgres',
        database: process.env.DB_NAME || 'books_db',
      }
);

const initDatabase = async () => {
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS books (
      id SERIAL PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      author VARCHAR(255) NOT NULL,
      published_year INTEGER,
      isbn VARCHAR(50),
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );
  `;
  await pool.query(createTableQuery);
};

module.exports = {
  pool,
  query: (text, params) => pool.query(text, params),
  initDatabase,
};

