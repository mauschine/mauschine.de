var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/imprint', function(req, res, next) {
    res.render('legal/imprint', {title: 'Mauschine Joke Engine'});
});

router.get('/privacy', function(req, res, next) {
    res.render('legal/privacy', {title: 'Mauschine Joke Engine'});
});

module.exports = router;
