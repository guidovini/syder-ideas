//
// ─── IMPORTS ────────────────────────────────────────────────────────────────────
//

const express = require('express');
const router = express.Router();

const ideasController = require('../controllers/ideas');

const passportService = require('../services/passport'); // ! DO NOT DELETE THIS LINE
const passport = require('passport');
const requireAuth = passport.authenticate('jwt', { session: false });

//
// ─── IDEAS ROUTER ───────────────────────────────────────────────────────────────
//

router.post("/create", ideasController.createIdea);
router.get("/", ideasController.getIdeas);
router.get("/:userId", requireAuth, ideasController.getIdeasByUserId);
router.put("/update", ideasController.updateIdea);
router.delete("/delete", ideasController.deleteIdea);

module.exports = router;