var express = require('express');
var router = express.Router();

/* --- Home page Routes --- */
router.get('/', function(req, res, next) {
  /** @function: API Home page Routing */
  res.render('index', { title: 'Practice Management Portal API' });
});

module.exports = router;
