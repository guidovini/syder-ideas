//
// ─── IMPORTS ─────────────────────────────────────────────────────────────────────
//

const express = require('express');
const router = express.Router();

const authController = require('../controllers/auth');

const passportService = require('../services/passport'); // ? DO NOT DELETE THIS LINE
const passport = require('passport');
const requireLogin = passport.authenticate('local', { session: false });
const requireAuth = passport.authenticate('jwt', { session: false });

//
// ─── AUTH ROUTER ────────────────────────────────────────────────────────────────
//

router.post('/signup', authController.signup);
router.post('/login', requireLogin, authController.login);

router.get('/test', requireAuth, authController.test);

module.exports = router;