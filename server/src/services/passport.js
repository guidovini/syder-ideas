require('dotenv').config();

//
// ─── DATABASE REFERENCE ─────────────────────────────────────────────────────────
//

const db = require('../db');

//
// ─── IMPORTS ────────────────────────────────────────────────────────────────────
//

const bcrypt = require('bcrypt');

const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');

const configSecret = process.env.SECRET;
// const config = require('../../config');

//
// ─── AUTH VIA JWT ─────────────────────────────────-─────────────────────────────
//
  
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: configSecret
};

const jwtLogin = new JwtStrategy(jwtOptions, (payload, done) => {
  db.query('SELECT * FROM users WHERE id=$1', [payload.sub], (err, result) => {
    const user = result.rows[0];
    if (err) { return done(err); }
    if (user) { 
      return done(null, user) 
    } else {
      return done(null, false)
    }
  });
});

//
// ─── AUTH VIA LOCAL ─────────────────────────────────────────────────────────────
//

const localOptions = {
  usernameField: 'email'
};

const localLogin = new LocalStrategy(localOptions, (email, password, done) => {
  db.query('SELECT * FROM users WHERE email=$1', [email], (err, result) => {
    if (err) { return done(err); }
    const user = result.rows[0];
    if (!user) { return done(null, false); }

    const comparePassword = (candidatePassword, storedPassword, callback) => {
      bcrypt.compare(candidatePassword, storedPassword, (err, isMatch) => {
        if (err) { return callback(err); }
        callback(null, isMatch);
      });
    };

    comparePassword(password, user.password, (err, isMatch) => {
      if (err) { return done(err); }
      if (!isMatch) { return done(null, false); } 
      return done(null, user);
    });
  });
});

//
// ─── PASSPORT USE ───────────────────────────────────────────────────────────────
//

passport.use(jwtLogin);
passport.use(localLogin);