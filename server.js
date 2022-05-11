var express = require('express');
var cors = require('cors');
var apiRoutes = require('./serverApi/coin.js');
const path = require('path');

const PORT = process.env.PORT || 3001;

var app = express();

app.use(express.static(path.join(__dirname, 'client/build')));

app.use(cors());

app.get('/api', apiRoutes.testApi);

app.get('/api/coin/:id', apiRoutes.getCoinMarketData);

app.get('/api/coinInfo/:id', apiRoutes.getCoinDescription);

app.get('/api/coinNews/:id', apiRoutes.getCoinNews);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
