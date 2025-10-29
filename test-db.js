require('dotenv').config();
const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
});

async function testConnection() {
  try {
    await client.connect();
    console.log('Connected to the database successfully!');
  } catch (err) {
    console.error('Error connecting to the database:', err);
  } finally {
    await client.end();
  }
}

testConnection();
