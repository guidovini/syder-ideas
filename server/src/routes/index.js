//
// ─── IMPORTS ────────────────────────────────────────────────────────────────────
//

const express = require('express');
const router = express.Router();

//
// ─── INDEX ROUTER ─────────────────────────────────────────────────────────────
//

router.get("/", (req, res, next) => {
  res.send('This is the main page. Go to /ideas/api to fetch ideas data and to /ideas/features to fetch features data');
});

module.exports = router;