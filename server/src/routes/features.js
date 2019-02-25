//
// ─── IMPORTS ────────────────────────────────────────────────────────────────────
//

const express = require('express');
const router = express.Router();

const features_controller = require('../controllers/features');

//
// ─── FEATURES ROUTER ────────────────────────────────────────────────────────────
//

router.post("/create", features_controller.features_create);
router.get("/", features_controller.features_read);
router.post("/edit", features_controller.features_edit);
router.post("/delete", features_controller.features_delete);
router.post("/update", features_controller.features_update);

module.exports = router;