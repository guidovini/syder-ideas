//
// ─── DATABASE IMPORT ────────────────────────────────────────────────────────────
//

const db = require('../db/index');

//
// ─── IMPORTS ────────────────────────────────────────────────────────────────────
//

const bcrypt = require('bcrypt');
const jwt = require('jwt-simple');

const config = require('../../config');

//
// ─── HELPERS ────────────────────────────────────────────────────────────────────
//

const tokenForUser = (user) => {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub:user.id, iat:timestamp }, config.secret)
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

exports.signup = (req, res) => {
  const { id, email, password } = req.body;

  if (!email || !password) {
    return res.status(422).send({ error: 'Please provide an email and password' });
  }

  const createUser = (id, email, hashedPassword) => {
    const query = 'INSERT INTO users(id, username, password, email) VALUES($1, $2, $3, $4)';
    const values = [id, email, hashedPassword, email];
    db.query(query, values, (err, result) => {
      if (err) { return res.status(422).send({ error: 'Error creating user' }) };
      res.json({ token: tokenForUser({ id }) })
    });
  }

  hashPassword(password)
    .then(hashedPassword => createUser(id, email, hashedPassword))
    .catch(err => console.log(err))
}

exports.login = (req, res) => {
  res.send({ token: tokenForUser(req.user) });
}

exports.blocked_access = (req, res) => {
  res.send({ message: 'You have unlocked blocked content' });
}