const express = require('express');
const api_helper = require('./API_helper');

const PORT = process.env.PORT || 3001;

const app = express();

app.get('/api', (req, res) => {
  res.json({ status: 'Ok' });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
