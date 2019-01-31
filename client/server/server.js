const express = require('express');
const path = require('path');
const publicPath = path.join(__dirname, '..', 'build');
const port = process.env.PORT || 5000;
const app = express();

app.use(express.static(path.join(publicPath, 'static')));

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'))
})

app.listen(port, () => console.log(`Listening on port ${port}`))