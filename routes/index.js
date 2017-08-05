var express = require('express');
var router = express.Router();
var moment = require('moment');
moment().format();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({date:moment().format('X')});
});

module.exports = router;
