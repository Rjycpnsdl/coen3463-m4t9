var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'ROTTEN TOMATO', user: req.user });
});

module.exports = router;
