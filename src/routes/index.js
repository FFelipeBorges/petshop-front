const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/teste-sobre', function(req, res, next) {
  res.render('sobre', { title: 'Express' });
});

module.exports = router;
