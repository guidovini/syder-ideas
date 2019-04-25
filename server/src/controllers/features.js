//
// ─── DATABASE SETUP ─────────────────────────────────────────────────────────────
//

const db = require('../db');

const uuidv4 = require('uuid/v4');

//
// ─── FEATURES CONTROLLER ───────────────────────────────────────────────────────────────────────
//

const createFeature = (req, res) => {
  const { id=uuidv4(), text, idea_id } = req.body; // ! id generated in the back end
  const user_id = req.user.id;

  const query = "INSERT INTO features (id, text, idea_id, user_id) VALUES ($1, $2, $3, $4)";
  const values = [id, text, idea_id, user_id];

  db.query(query, values, (err, result) => {
    if (err) throw err; // ! SERVER ERRORS
    res.status(201).send({ featureId: id }); // ! message
  });
}

const getFeatures = (req, res) => {
  const query = 'SELECT * FROM features';
  
  db.query(query, (err, result) => {
    if (err) throw err;
    const features = result.rows;
    res.status(200).json(features);
  });
}

const getFeaturesByUserId = (req, res) => {
  const user_id = req.user.id;

  const query = 'SELECT * FROM features WHERE user_id=$1';
  const values = [user_id];

  db.query(query, values, (err, result) => {
    if (err) throw err;
    const features = result.rows;
    res.status(200).json(features);
  });
}

const updateFeature = (req, res) => {
  const { id, text } = req.body;

  const query = "UPDATE features SET text=$1 WHERE id=$2";
  const values = [text, id];

  db.query(query, values, (err, result) => {
    if (err) throw err;
    res.status(200).send(`Feature UPDATED with ID: ${id}`); // ! message
  });
}

const deleteFeature = (req, res) => {
  const { id } = req.body;

  const query = "DELETE FROM features WHERE id=$1";
  const values = [id];

  db.query(query, values, (err, result) => {
    if (err) throw err;
    res.status(200).send(`Feature DELETED with ID: ${id}`); // ! message
  });
}

const deleteFeaturesAfterIdeaDelete = (req, res) => {
  const { id:idea_id } = req.body;

  const query = 'DELETE FROM features WHERE idea_id=$1';
  const values = [idea_id];

  db.query(query, values, (err, result) => {
    if (err) throw err;
    res.status(200).send(`All features DELETED from idea with ID: ${idea_id}`); // ! message
  });
}

module.exports = {
  createFeature,
  getFeatures,
  getFeaturesByUserId,
  updateFeature,
  deleteFeature,
  deleteFeaturesAfterIdeaDelete,
}