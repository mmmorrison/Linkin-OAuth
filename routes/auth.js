var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/auth/linkedin', function(req, res, next) {
  passport.authenticate('linkedin')
});

module.exports = router;
