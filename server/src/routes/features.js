//
// ─── IMPORTS ────────────────────────────────────────────────────────────────────
//

const express = require('express');
const router = express.Router();

const { 
  createFeature, 
  getFeatures, 
  updateFeature, 
  deleteFeature, 
  deleteFeaturesAfterIdeaDelete 
} = require('../controllers/features');

//
// ─── FEATURES ROUTER ────────────────────────────────────────────────────────────
//

router.post("/create", createFeature);
router.get("/", getFeatures);
router.put("/update", updateFeature);
router.delete("/delete", deleteFeature);

router.delete("/clear", deleteFeaturesAfterIdeaDelete);

module.exports = router;