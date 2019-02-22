//
// ─── IMPORTS ─────────────────────────────────────────────────────────────────────
//
  
require('dotenv').config();

const express = require('express');

const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 5000;

const indexRouter = require('./routes');
const ideasRouter = require('./routes/ideas');
const featuresRouter = require('./routes/features');
const authRouter = require('./routes/auth');

const app = express();

//
// ─── APP ────────────────────────────────────────────────────────────────────────
//
  
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: '*/*' }));

app.use('/', indexRouter);
app.use('/ideas', ideasRouter);
app.use('/features', featuresRouter);
app.use('/', authRouter)

app.listen(port, () => console.log(`Listening on port ${port}`));