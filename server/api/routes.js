var express = require('express');
var coinCtrl = require('./coin.js');

var router = express.Router();

async function getCoinMarketData(req, res) {
  res.json({ status: 'ok!!!' });
}

router.route('/').get(getCoinMarketData);

router.route('/coin/:id').get(coinCtrl.getCoinMarketData);

router.route('/coinInfo/:id').get(coinCtrl.getCoinDescription);

router.route('/coinNews/:id').get(coinCtrl.getCoinNews);

module.exports = router;
