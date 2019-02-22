//
// ─── IMPORTS ─────────────────────────────────────────────────────────────────────
//

const express = require('express');
const router = express.Router();

const passportService = require('../services/passport');
const passport = require('passport');

const auth_controller = require('../controllers/auth');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireLogin = passport.authenticate('local', { session: false });

//
// ─── AUTH ROUTER ────────────────────────────────────────────────────────────────
//

router.get('/blocked-access', requireAuth, auth_controller.blocked_access);
router.post('/signup', auth_controller.signup);
router.post('/login', requireLogin, auth_controller.login);

module.exports = router;