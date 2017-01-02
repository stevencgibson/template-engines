'use strict';

const express = require('express');
const Handlebars = require('hbs');
const app = express();
const athletes = require('./athletes');

app.set('view engine', 'hbs');
app.set('views', './views');
app.use(express.static('assets'));

Handlebars.registerPartials(__dirname + '/views/includes');

Handlebars.registerHelper('json', (context) => {
  return JSON.stringify(context);
});

Handlebars.registerHelper('toUpperCase', (context) => {
  return context.toUpperCase();
})

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Athletes',
    athletes: athletes
  });
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
