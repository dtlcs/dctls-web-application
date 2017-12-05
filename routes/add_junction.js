var express = require('express');
var router = express.Router();

/* GET add_Junction page. */
router.get('/junction', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

module.exports = router;
