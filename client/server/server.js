const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const publicPath = path.join(__dirname, '..', 'build');
const port = process.env.PORT || 5000;
const app = express();

// // Serve static files from the React app
app.use(express.static(publicPath));

// app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'))
})

app.listen(port, () => console.log(`Listening on port ${port}`))