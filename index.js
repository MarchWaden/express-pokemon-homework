const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const app = express();
const Pokemon = require('./model/pokemon.js');

app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));

app.get('/pokemon', (req, res) => {
  res.send(Pokemon)
});

app.listen(3000, () => {
  console.log('server is listening on port 3000')
});
