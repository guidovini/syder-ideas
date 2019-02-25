//
// ─── DATABASE SETUP ─────────────────────────────────────────────────────────────
//

const db = require('../db');

//
// ─── IDEAS CONTROLLER ───────────────────────────────────────────────────────────
//

const createIdea = (req, res) => {
  const query = 'INSERT INTO ideas(id, category, name, description, target, created_at, user_id) VALUES ($1, $2, $3, $4, $5, $6, $7)';
  const { id:idea_id, category, name, description, target, created_at } = req.body;
  const values = [idea_id, category, name, description, target, created_at, 'user1'];

  db.query(query, values, (err, result) => {
    if (err) throw err;
    res.status(201).send(`Idea ADDED with ID: ${idea_id}`);
  });
}

const getIdeas = (req, res) => {
  const query = 'SELECT * FROM ideas';
  
  db.query(query, (err, results) => {
    if (err) throw err;
    const ideas = results.rows;
    res.status(200).json(ideas);
  });
}

const updateIdea = (req, res) => {
  const query = "UPDATE ideas SET name=$1, description=$2, target=$3, last_edited=$4 WHERE id=$5";
  const { name, description, target, idea_id, last_edited } = req.body;
  const values = [name, description, target, last_edited, idea_id];

  db.query(query, values, (err, result) => {
    if (err) throw err;
    res.status(200).send(`Idea UPDATED with ID: ${idea_id}`);
  });
}

const deleteIdea = (req, res) => {
  const query = "DELETE FROM ideas WHERE id=$1";
  const { id:idea_id } = req.body;
  const values = [idea_id];

  db.query(query, values, (err, result) => {
    if (err) throw err;
    res.status(200).send(`Idea DELETED with ID: ${idea_id}`);
  });
}

module.exports = {
  createIdea,
  getIdeas,
  updateIdea,
  deleteIdea
}