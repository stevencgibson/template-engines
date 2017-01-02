'use strict';

const express = require('express');
const app = express();
const athletes = require('./athletes');

app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.static('assets'));

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Athletes',
    athletes: athletes
  });
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
