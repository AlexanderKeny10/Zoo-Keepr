
const express = require('express');
const app = express();
const { animals } = require('./data/animal');

app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
  });
app.get('/api/animals', (req, res) => {
  res.send('Hello!');
});