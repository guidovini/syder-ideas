//
// ─── IMPORTS ─────────────────────────────────────────────────────────────────────
//
  
const express = require('express');

const bodyParser = require('body-parser');
const cors = require('cors');

const indexRouter = require('./routes');
const ideasRouter = require('./routes/ideas');
const featuresRouter = require('./routes/features');
const authRouter = require('./routes/auth');

const app = express();

//
// ─── APP ────────────────────────────────────────────────────────────────────────
//
  
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: '*/*' }));

app.use('/', indexRouter);
app.use('/api/ideas', ideasRouter);
app.use('/api/features', featuresRouter);
app.use('/', authRouter);

module.exports = app;

