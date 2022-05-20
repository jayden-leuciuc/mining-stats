var express = require('express');
var cors = require('cors');
const path = require('path');

var coinRoute = require('./serverApi/coin.js');
var hardwareRoute = require('./serverApi/hardware.js');
var exchangeRoute = require('./serverApi/exchange');

const PORT = process.env.PORT || 3001;

var app = express();

app.use(express.static(path.join(__dirname, 'client/build')));

app.use(cors());

//Base Route

app.get('/api', coinRoute.testApi);

//Coin Routes

app.get('/api/coin/:id', coinRoute.getCoinMarketData);

app.get('/api/mineableCoin', coinRoute.getMineableCoins);

app.get('/api/coinInfo/:id', coinRoute.getCoinDescription);

app.get('/api/coinMineableInfo/:id', coinRoute.getCoinMineableData);

app.get('/api/coinNews/:id', coinRoute.getCoinNews);

app.get('/api/pools', coinRoute.getAllPools);

app.get('/api/pools/:id', coinRoute.getPool);

//Hardware Routes

app.get('/api/hardware', hardwareRoute.getAllHardware);

//Exchange Routes
app.get('/api/exchange', exchangeRoute.getExchange);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
