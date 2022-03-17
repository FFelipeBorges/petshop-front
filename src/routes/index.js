const express = require('express');
const mainController = require('../controller/mainController');
const router = express.Router();

/* GET home page. */
router.get('/', mainController.index);

router.get('/sobre', function(req, res, next) {
  res.render('sobre', { title: 'Express' });
});

router.get('/servicos', function(req, res, next) {
  res.render('servicos', { title: 'Express' });
});

router.get('/contato', function(req, res, next) {
  res.render('contato', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

module.exports = router;
