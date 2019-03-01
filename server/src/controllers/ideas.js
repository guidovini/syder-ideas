//
// ─── DATABASE SETUP ─────────────────────────────────────────────────────────────
//

const db = require('../db');

//
// ─── IDEAS CONTROLLER ───────────────────────────────────────────────────────────
//

const createIdea = (req, res) => {
  const { id, category, name='Undefined idea' } = req.body;
  const user_id = req.user.id;

  const query = 'INSERT INTO ideas(id, category, name, user_id) VALUES ($1, $2, $3, $4)';
  const values = [id, category, name, user_id];

  db.query(query, values, (err, result) => {
    if (err) throw err;
    res.status(201).send(`Idea ADDED with ID: ${id}`);
  });
}

const getIdeas = (req, res) => {
  const query = 'SELECT * FROM ideas';
  
  db.query(query, (err, result) => {
    if (err) throw err;
    const ideas = result.rows;
    res.status(200).json(ideas);
  });
}

const getIdeasByUserId = (req, res) => {
  const user_id = req.user.id;

  const query = 'SELECT * FROM ideas WHERE user_id=$1';
  const values = [user_id];

  db.query(query, values, (err, result) => {
    if (err) throw err;
    const ideasByUser = result.rows;
    res.status(200).json(ideasByUser);
  });
}

const updateIdea = (req, res) => {
  const { 
    id, 
    name = 'Untitled idea', 
    description = '', 
    target = '', 
    last_edited
  } = req.body; 

  const query = "UPDATE ideas SET name=$1, description=$2, target=$3, last_edited=$4 WHERE id=$5";
  const values = [name, description, target, last_edited, id];

  db.query(query, values, (err, result) => {
    if (err) throw err;
    res.status(200).send(`Idea UPDATED with ID: ${id}`);
  });
}

const deleteIdea = (req, res) => {
  const query = "DELETE FROM ideas WHERE id=$1";
  const { id } = req.body;
  const values = [id];

  db.query(query, values, (err, result) => {
    if (err) throw err;
    res.status(200).send(`Idea DELETED with ID: ${id}`);
  });
}

const favoriteIdea = (req, res) => {
  const id = req.body.id;

  const query = "UPDATE ideas SET favorite=NOT favorite WHERE id=$1";
  const values = [id];

  db.query(query, values, (err, result) => {
    if (err) throw err;
    res.status(200).send(`Idea FAVORITED with ID: ${id}`);
  });
}

const archiveIdea = (req, res) => {
  const id = req.body.id;

  const query = "UPDATE ideas SET archive=NOT archive WHERE id=$1";
  const values = [id];

  db.query(query, values, (err, result) => {
    if (err) throw err;
    res.status(200).send(`Idea ARCHIVED with ID: ${id}`);
  });
}

module.exports = {
  createIdea,
  getIdeas,
  getIdeasByUserId,
  updateIdea,
  deleteIdea,
  favoriteIdea,
  archiveIdea
}