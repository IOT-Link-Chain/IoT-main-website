var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'IotLink Chain || Home Page' });
});
/* GET contact page. */
router.get('/contact', function(req, res) {
  res.render('contact', { title: 'Home Page' });
});
/* GET started page. */
router.get('/get-started', function(req, res) {
  res.render('get-started', { title: 'Home Page' });
});
/* GET roadmap page. */
router.get('/roadmap', function(req, res) {
  res.render('roadmap', { title: 'Home Page' });
});
/* GET team page. */
router.get('/team', function(req, res) {
  res.render('team', { title: 'Home Page' });
});

module.exports = router;
