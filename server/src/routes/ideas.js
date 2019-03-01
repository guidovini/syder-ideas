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

router.post("/create", requireAuth, ideasController.createIdea);
router.get("/", ideasController.getIdeas);
router.get("/user", requireAuth, ideasController.getIdeasByUserId);
router.put("/update", requireAuth, ideasController.updateIdea);
router.delete("/delete", requireAuth, ideasController.deleteIdea);

router.put("/favorite", requireAuth, ideasController.favoriteIdea);
router.put("/archive", requireAuth, ideasController.archiveIdea);

module.exports = router;