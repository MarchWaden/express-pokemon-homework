const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const app = express();
const Pokemon = require('./model/pokemon.js');

app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(express.static('static'));


app.delete('/pokemon/:index', (request, response) => {
  Pokemon.splice(request.params.index,1);
  response.redirect('/pokemon');
});
app.get('/pokemon/:index/edit',(request, response) => {
  context = {
    pokemon: Pokemon[request.params.index],
    index: request.params.index
  }
  response.render('edit.ejs',context)
});
app.get('/pokemon/new', (request, response) => {
    response.render('new.ejs');
  });
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
app.put('/pokemon/:index/edit', (request, response) => {
  Pokemon[request.params.index].name = request.body.name;
  Pokemon[request.params.index].img = request.body.img;
  response.redirect('/pokemon');
});
app.post('/pokemon/new', (request, response) => {
  pokemon = {
  name: request.body.name,
  img: request.body.img
  };
  Pokemon.push(pokemon);
  response.redirect('/pokemon');
});
app.listen(3000, () => {
  console.log('server is listening on port 3000')
});

module.exports=(app);
