//
// ─── DATABASE SETUP ─────────────────────────────────────────────────────────────
//

const db = require('../db');

//
// ─── FEATURES CONTROLLER ───────────────────────────────────────────────────────────────────────
//

exports.features_create = (req, res, next) => {
  const query = "INSERT INTO features (id, text, idea_id, user_id) VALUES ($1, $2, $3, $4)";
  const { id:feature_id, text, idea_id } = req.body;
  const values = [feature_id, text, idea_id, 'user1'];

  db.query(query, values, (error, result) => {
    if (error) throw error;
    res.end('Feature added!');
  });
}

exports.features_read = (req, res, next) => {
  const query = 'SELECT * FROM features';
  
  db.query(query, (error, results) => {
    if (error) throw error;
    const features = results.rows;
    res.send(features);
  });
}

// ! check .update .edit 
exports.features_update = (req, res, next) => {
  const query = 'DELETE FROM features WHERE idea_id=$1';
  const { id:idea_id } = req.body;
  const values = [idea_id];

  db.query(query, values, (error, result) => {
    if (error) throw error;
    res.send('Features deleted!');
  });
}

exports.features_delete = (req, res, next) => {
  const query = "DELETE FROM features WHERE id=$1";
  const { id:feature_id } = req.body;
  const values = [feature_id];

  db.query(query, values, (error, result) => {
    if (error) throw error;
    res.end('Feature deleted!');
  });
}

// ! check .update .edit 
exports.features_edit = (req, res, next) => {
  const query = "UPDATE features SET text=$1 WHERE id=$2";
  const { text, id:feature_id } = req.body;
  const values = [text, feature_id];

  db.query(query, values, (error, result) => {
    if (error) throw error;
    res.end('Feature edited!');
  });
}