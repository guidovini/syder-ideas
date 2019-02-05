require('dotenv').config();

const { Pool } = require('pg');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.set("views", __dirname + '/views')
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
  // connectionString: process.env.DATABASE_URL,
  // ssl: true
});

pool.connect();

app.get("/", (req, res) => {
  res.send('This is the main page. Go to /api/ideas to gather data and to /api/form to add a new idea')
});

app.get("/api/ideas", (req, res) => {
  const query = 'SELECT * FROM ideas';

  pool.query(query, (err, results) => {
    if (err) throw err;
    const ideas = results.rows;
    res.send(ideas);
  });
});

app.get("/api/form", (req, res) => {
  res.render("form");
})

app.post("/create", (req, res) => {
  const query = 'INSERT INTO ideas(id, category, name, description, target, user_id) VALUES ($1, $2, $3, $4, $5, $6)';
  const { id, category, name, description, target } = req.body;
  const values = [id, category, name, description, target, 'user1'];

  pool.query(query, values, (err, result) => {
    if (err) throw err;
    res.redirect("/api/ideas");
  });
});

app.post("/create/description", (req, res) => {
  const query = "UPDATE ideas SET name=$1, description=$2, target=$3 WHERE id=$4";
  const { name, description, target, idea_id } = req.body;
  const values = [name, description, target, idea_id];

  pool.query(query, values, (err, result) => {
    if (err) throw err;
    res.redirect("/api/ideas")
  });
})

app.listen(port, () => console.log(`Listening on port ${port}`))