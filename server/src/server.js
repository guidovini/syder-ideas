// require('dotenv').config();

const { Client } = require('pg');
const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const app = express();

// app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const client = new Client({
  // user: process.env.DB_USER,
  // host: process.env.DB_HOST,
  // database: process.env.DB_NAME,
  // password: process.env.DB_PASS,
  // port: process.env.DB_PORT,
  connectionString: process.env.DATABASE_URL,
  ssl: true
});

client.connect();

app.get("/", (req, res) => {
  res.send('This is the main page. Go to /api/ideas to gather data and to /api/create to add a new idea')
});

app.get("/api/ideas", function(req, res) {
  const query = 'SELECT * FROM ideas';
  client.query(query, (err, results) => {
    if (err) throw err;
    const ideas = results.rows;
    res.send({ ideas })
    // res.render("home", {data: count});
  });
});

app.get("/api/create", function(req, res) {
  const query = 'INSERT INTO ideas(category, name, description, target, user_id) VALUES ($1, $2, $3, $4, $5)'
  const values = ['Web app', 'Syder Ideas', 'A solution for people who wants to store their ideas', 'People who wants to store their ideas', 1];
  client.query(query, values, (err, result) => {
    if (err) throw err;
    res.redirect("/api/ideas");
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`))