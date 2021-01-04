const path = require('path');

const data = require('./../data/data.json');

const express = require('express');

const router = express.Router();

router.get('/products', (req, res, next) => {
    res.header("Content-Type",'application/json');
    res.send(JSON.stringify(data));
});

module.exports = router;