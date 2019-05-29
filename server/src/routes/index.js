//
// ─── IMPORTS ────────────────────────────────────────────────────────────────────
//

const express = require('express');
const router = express.Router();

//
// ─── INDEX ROUTER ─────────────────────────────────────────────────────────────
//

router.get("/", (req, res) => {
  res.send('Syder Ideas API. Go to https://syder-ideas-client.herokuapp.com/ to see the client.');
});

module.exports = router;