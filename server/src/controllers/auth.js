//
// ─── DATABASE IMPORT ────────────────────────────────────────────────────────────
//

const db = require('../db/index');

//
// ─── IMPORTS ────────────────────────────────────────────────────────────────────
//

const bcrypt = require('bcrypt');
const jwt = require('jwt-simple');
const uuidv4 = require('uuid/v4');

const config = require('../../config');

//
// ─── HELPERS ────────────────────────────────────────────────────────────────────
//

const tokenForUser = ({ id }) => {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub:id, iat:timestamp }, config.secret);
}

const hashPassword = (password) => {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(password, salt, (err, hash) => {
        err ? reject(err) : resolve(hash);
      });
    });
  });
}

//
// ─── AUTH CONTROLLER ────────────────────────────────────────────────────────────
//

const signup = (req, res) => {
  const { email, password } = req.body; // ! CHANGED id, it now uses uuidv4
  const id = uuidv4();

  if (!email || !password) {
    // return res.status(422).send({ error: 'Please provide an email and password' }); // ! manage error messages
    return res.sendStatus(422);
  }

  const createUser = (id, email, hashedPassword) => {
    const query = 'INSERT INTO users(id, username, password, email) VALUES($1, $2, $3, $4)';
    const values = [id, email, hashedPassword, email];

    db.query(query, values, (err, result) => {
      if (err) { return res.sendStatus(422) };
      res.status(201).send({ token: tokenForUser({ id }) })
    });
  }

  hashPassword(password)
    .then(hashedPassword => createUser(id, email, hashedPassword))
    .catch(err => console.log(err))
}

const login = (req, res) => {
  res.status(200).send({ token: tokenForUser(req.user) });
}

const test = (req, res) => {
  res.send({ message: 'You have unlocked new content' });
}

module.exports = {
  signup,
  login,
  test
}