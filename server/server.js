const express = require('express');
var routes = require('./api/routes');

const PORT = process.env.PORT || 3001;
const app = express();

app.use('/api', routes);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
