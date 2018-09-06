var express = require('express');
var router = express.Router();

router.get("/:testId/alma/:anotherId", function (req, res, next) {
    res.send(req.query);
});

module.exports = router;
