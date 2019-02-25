//
// ─── IMPORTS ─────────────────────────────────────────────────────────────────────
//

const express = require('express');
const router = express.Router();

const passportService = require('../services/passport'); // ! DO NOT DELETE THIS LINE
const passport = require('passport');

const authController = require('../controllers/auth');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireLogin = passport.authenticate('local', { session: false });

//
// ─── AUTH ROUTER ────────────────────────────────────────────────────────────────
//

router.get('/blocked-access', requireAuth, authController.blocked_access);
router.post('/signup', authController.signup);
router.post('/login', requireLogin, authController.login);

module.exports = router;