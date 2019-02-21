require('dotenv').config();

const { Pool } = require('pg');

if (process.env.DATABASE_URL) {
  pg.defaults.ssl = true
} 

let connString = process.env.DATABASE_URL || process.env.DEV_CONF;

const pool = new Pool({
  connectionString: connString
});

pool.connect();

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback)
  }
}