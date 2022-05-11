var express = require('express');
var cors = require('cors');
var routes = require('./api/routes');
const path = require('path'); // Serve static files from the React frontend app

const PORT = process.env.PORT || 3001;
var app = express();

app.use(cors());

app.use('/api', routes);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.use(express.static(path.join(__dirname, 'client/build'))); // Anything that doesn't match the above, send back index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});
