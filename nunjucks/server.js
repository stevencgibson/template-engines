'use strict';

const express = require('express');
const nunjucks = require('nunjucks');
const app = express();
const athletes = require('./athletes');

app.set('view engine', 'nunjucks');
nunjucks.configure('./views', {
  autoescape: false,
  express: app
});
app.use(express.static('assets'));

app.get('/', (req, res) => {
  res.render('index.html', {
    title: 'Athletes',
    athletes: athletes
  });
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
