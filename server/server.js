require('dotenv').config();

const { Client } = require('pg');
const express = require('express');
const bodyParser = require('body-parser');
// const path = require('path');
// const publicPath = path.join(__dirname, '..', 'client/build');
const port = process.env.PORT || 5000;
const app = express();

// Serve static files from the React app
// app.use(express.static(publicPath));

// app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.get('*', (req, res) => {
//   res.sendFile(path.join(publicPath, 'index.html'))
// })

const client = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
});

client.connect();

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

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

// app.post('/api/world', (req, res) => {
//   console.log(req.body);
//   res.send(`I have received your POST request. This is what you sent me: ${req.body.post}`);
// });

app.listen(port, () => console.log(`Listening on port ${port}`))