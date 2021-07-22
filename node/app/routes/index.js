var express = require('express');
var router = express.Router();
var consumo = require('../consumo/consumo');

/* GET home page. */
router.get('/', consumo.consumo);
module.exports = router;
