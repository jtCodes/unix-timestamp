var express = require('express');
var router = express.Router();
var moment = require('moment');
moment().format();
/* GET users listing. */
router.get('/:date', function (req, res, next) {
  console.log(req.params.date)
  if (moment(req.params.date, 'MMM DD, YYYY').isValid())
    res.send({ Unix: moment(req.params.date).format('X'), Date: moment(req.params.date).format('MMM DD, YYYY') });
  else
    res.send({ Unix: "NULL", Date: "NULL" });
});

module.exports = router;
