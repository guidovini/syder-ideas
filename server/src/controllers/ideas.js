//
// ─── DATABASE SETUP ─────────────────────────────────────────────────────────────
//

require('dotenv').config();

const pg = require('pg');
const { Pool } = require('pg');

if (process.env.DATABASE_URL) {
  pg.defaults.ssl = true;
} 

let connString = process.env.DATABASE_URL || process.env.DEV_CONF;
const pool = new Pool({
  connectionString: connString
});

pool.connect();

//
// ─── IDEAS CONTROLLER ───────────────────────────────────────────────────────────
//

exports.ideas_create = (req, res, next) => {
  const query = 'INSERT INTO ideas(id, category, name, description, target, user_id) VALUES ($1, $2, $3, $4, $5, $6)';
  const { id:idea_id, category, name, description, target } = req.body;
  const values = [idea_id, category, name, description, target, 'user1'];

  pool.query(query, values, (error, result) => {
    if (error) throw error;
    res.end('Create idea query worked!');
  });
}

exports.ideas_read = (req, res, next) => {
  const query = 'SELECT * FROM ideas';
  
  pool.query(query, (error, results) => {
    if (error) throw error;
    const ideas = results.rows;
    res.send(ideas);
  });
}

exports.ideas_update = (req, res, next) => {
  const query = "UPDATE ideas SET name=$1, description=$2, target=$3 WHERE id=$4";
  const { name, description, target, idea_id } = req.body;
  const values = [name, description, target, idea_id];

  pool.query(query, values, (error, result) => {
    if (error) throw error;
    res.end('Description query worked!');
  });
}

exports.ideas_delete = (req, res, next) => {
  const query = "DELETE FROM ideas WHERE id=$1";
  const { id:idea_id } = req.body;
  const values = [idea_id];

  pool.query(query, values, (error, result) => {
    if (error) throw error;
    res.end('Delete query worked!');
  });
}