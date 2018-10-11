const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const app = express();
const Pokemon = require('./model/pokemon.js');

app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(express.static('static'));

app.get('/pokemon/:index', (req,res) => {
  const context = {
  pokemon:  Pokemon[req.params.index]
  }
  res.render('show.ejs',context);
});
app.get('/pokemon', (req, res) => {
  const context = {
    pokemon: Pokemon
  }
  res.render('index.ejs',context)
});

app.listen(3000, () => {
  console.log('server is listening on port 3000')
});
