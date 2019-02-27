//
// ─── DATABASE SETUP ─────────────────────────────────────────────────────────────
//

const db = require('../db');

//
// ─── FEATURES CONTROLLER ───────────────────────────────────────────────────────────────────────
//

const createFeature = (req, res) => {
  const query = "INSERT INTO features (id, text, idea_id, user_id) VALUES ($1, $2, $3, $4)";
  const { id:feature_id, text, idea_id } = req.body;
  const user_id = req.user.id;
  const values = [feature_id, text, idea_id, user_id];

  db.query(query, values, (err, result) => {
    if (err) throw err;
    res.status(201).send(`Feature ADDED with ID: ${feature_id}`);
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
  const query = 'SELECT * FROM features WHERE user_id=$1';
  const user_id = req.user.id;
  const values = [user_id];

  db.query(query, values, (err, result) => {
    if (err) throw err;
    const features = result.rows;
    res.status(200).json(features);
  });
}

const updateFeature = (req, res) => {
  const query = "UPDATE features SET text=$1 WHERE id=$2";
  const { text, id:feature_id } = req.body;
  const values = [text, feature_id];

  db.query(query, values, (err, result) => {
    if (err) throw err;
    res.status(200).send(`Feature UPDATED with ID: {feature_id}`);
  });
}

const deleteFeature = (req, res) => {
  const query = "DELETE FROM features WHERE id=$1";
  const { id:feature_id } = req.body;
  const values = [feature_id];

  db.query(query, values, (err, result) => {
    if (err) throw err;
    res.status(200).send(`Feature DELETED with ID: ${feature_id}`);
  });
}

const deleteFeaturesAfterIdeaDelete = (req, res) => {
  const query = 'DELETE FROM features WHERE idea_id=$1';
  const { id:idea_id } = req.body;
  const values = [idea_id];

  db.query(query, values, (err, result) => {
    if (err) throw err;
    res.status(200).send(`All features DELETED from idea with ID: ${idea_id}`);
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