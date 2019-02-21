//
// ─── IMPORTS ────────────────────────────────────────────────────────────────────
//

const express = require('express');
const router = express.Router();

const ideas_controller = require('../controllers/ideas');

//
// ─── IDEAS ROUTER ───────────────────────────────────────────────────────────────
//

router.post("/create", ideas_controller.ideas_create);
router.get("/api", ideas_controller.ideas_read);
router.post("/update", ideas_controller.ideas_update);
router.post("/delete", ideas_controller.ideas_delete);

module.exports = router;