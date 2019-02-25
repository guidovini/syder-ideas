//
// ─── IMPORTS ────────────────────────────────────────────────────────────────────
//

const express = require('express');
const router = express.Router();

const { 
  createIdea, 
  getIdeas, 
  updateIdea, 
  deleteIdea 
} = require('../controllers/ideas');

//
// ─── IDEAS ROUTER ───────────────────────────────────────────────────────────────
//

router.post("/create", createIdea);
router.get("/", getIdeas);
router.put("/update", updateIdea);
router.delete("/delete", deleteIdea);

module.exports = router;