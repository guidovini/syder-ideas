require('dotenv').config();

const pg = require('pg');
const { Pool } = require('pg');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.set("views", __dirname + '/views');
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

if (process.env.DATABASE_URL) {
  pg.defaults.ssl = true;
} 

let connString = process.env.DATABASE_URL || process.env.DEV_CONF;

const pool = new Pool({
  connectionString: connString
});

pool.connect();

app.get("/", (req, res) => {
  res.send('This is the main page. Go to /api/ideas to gather data and to /api/form to add a new idea');
});

app.get("/api/ideas", (req, res) => {
  const query = 'SELECT * FROM ideas';

  pool.query(query, (error, results) => {
    if (error) throw error;
    const ideas = results.rows;
    res.send(ideas);
  });
});

app.get("/api/features", (req, res) => {
  const query = 'SELECT * FROM features';

  pool.query(query, (error, results) => {
    if (error) throw error;
    const features = results.rows;
    res.send(features)
  });
});

app.post("/create/idea", (req, res) => {
  const query = 'INSERT INTO ideas(id, category, name, description, target, user_id) VALUES ($1, $2, $3, $4, $5, $6)';
  const { id:idea_id, category, name, description, target } = req.body;
  const values = [idea_id, category, name, description, target, 'user1'];

  pool.query(query, values, (error, result) => {
    if (error) throw error;
    res.end('Create idea query worked!');
  });
});

app.post("/create/description", (req, res) => {
  const query = "UPDATE ideas SET name=$1, description=$2, target=$3 WHERE id=$4";
  const { name, description, target, idea_id } = req.body;
  const values = [name, description, target, idea_id];

  pool.query(query, values, (error, result) => {
    if (error) throw error;
    res.end('Description query worked!');
  });
});

app.post("/delete/idea", (req, res) => {
  const query = "DELETE FROM ideas WHERE id=$1";
  const { id:idea_id } = req.body;
  const values = [idea_id];

  pool.query(query, values, (error, result) => {
    if (error) throw error;
    res.end('Delete query worked!');
  });
});

app.post("/create/feature", (req, res) => {
  const query = "INSERT INTO features (id, text, idea_id, user_id) VALUES ($1, $2, $3, $4)";
  const { id:feature_id, text, idea_id } = req.body;
  const values = [feature_id, text, idea_id, 'user1'];

  pool.query(query, values, (error, result) => {
    if (error) throw error;
    res.end('Feature added!')
  });
});

app.post("/edit/feature", (req, res) => {
  const query = "UPDATE features SET text=$1 WHERE id=$2";
  const { text, id:feature_id } = req.body;
  const values = [text, feature_id];

  pool.query(query, values, (error, result) => {
    if (error) throw error;
    res.end('Feature edited!')
  });
});

app.post("/delete/feature", (req, res) => {
  const query = "DELETE FROM features WHERE id=$1";
  const { id:feature_id } = req.body;
  const values = [feature_id];

  pool.query(query, values, (error, result) => {
    if (error) throw error;
    res.end('Feature deleted!');
  });
});


app.listen(port, () => console.log(`Listening on port ${port}`));