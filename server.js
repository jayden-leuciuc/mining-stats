var express = require('express');
var cors = require('cors');
var apiRoutes = require('./api/coin.js');
const path = require('path'); // Serve static files from the React frontend app

const PORT = process.env.PORT || 3001;

var app = express();

app.use(express.static(path.join(__dirname, 'client/build'))); // Anything that doesn't match the above, send back index.html

app.use(cors());

app.get('/api', cors(), apiRoutes.testApi);

app.get('/api/coin/:id', cors(), apiRoutes.getCoinMarketData);

app.get('/api/coinInfo/:id', cors(), apiRoutes.getCoinDescription);

app.get('/api/coinNews/:id', cors(), apiRoutes.getCoinNews);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
