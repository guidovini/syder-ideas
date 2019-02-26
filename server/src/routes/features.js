//
// ─── IMPORTS ────────────────────────────────────────────────────────────────────
//

const express = require('express');
const router = express.Router();

const featuresController = require('../controllers/features');

//
// ─── FEATURES ROUTER ────────────────────────────────────────────────────────────
//

router.post("/create", featuresController.createFeature);
router.get("/", featuresController.getFeatures);
router.put("/update", featuresController.updateFeature);
router.delete("/delete", featuresController.deleteFeature);

router.delete("/clear", featuresController.deleteFeaturesAfterIdeaDelete);

module.exports = router;