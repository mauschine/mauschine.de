var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/imprint', function(req, res, next) {
    res.render('legal/imprint');
});

router.get('/privacy', function(req, res, next) {
    res.render('legal/privacy');
});

module.exports = router;
