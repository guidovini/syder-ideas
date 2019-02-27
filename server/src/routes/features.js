//
// ─── IMPORTS ────────────────────────────────────────────────────────────────────
//

const express = require('express');
const router = express.Router();

const featuresController = require('../controllers/features');

const passportService = require('../services/passport'); // ! DO NOT DELETE THIS LINE
const passport = require('passport');
const requireAuth = passport.authenticate('jwt', { session: false });

//
// ─── FEATURES ROUTER ────────────────────────────────────────────────────────────
//

router.post("/create", requireAuth, featuresController.createFeature);
router.get("/", featuresController.getFeatures);
router.get("/user", requireAuth, featuresController.getFeaturesByUserId);
router.put("/update", requireAuth, featuresController.updateFeature);
router.delete("/delete", requireAuth, featuresController.deleteFeature);

router.delete("/clear", requireAuth, featuresController.deleteFeaturesAfterIdeaDelete);

module.exports = router;