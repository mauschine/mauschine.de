var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('page/jokes', {title: 'Mauschine Joke Engine'});
});

module.exports = router;
