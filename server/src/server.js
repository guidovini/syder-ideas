//
// ─── IMPORTS ─────────────────────────────────────────────────────────────────────
//
  
require('dotenv').config();

const express = require('express');

const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 5000;

const indexRouter = require('./routes/index');
const ideasRouter = require('./routes/ideas');
const featuresRouter = require('./routes/features');

const app = express();

//
// ─── APP ────────────────────────────────────────────────────────────────────────
//
  
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', indexRouter)
app.use('/ideas', ideasRouter);
app.use('/features', featuresRouter);

app.listen(port, () => console.log(`Listening on port ${port}`));