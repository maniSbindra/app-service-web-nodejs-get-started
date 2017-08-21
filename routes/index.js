var express = require('express');
var router = express.Router();

var eventName = process.env.EVENT_NAME || 'Express';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: eventName });
});

module.exports = router;
