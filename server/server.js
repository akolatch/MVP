const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './../client/dist')));

app.get('/', (req, res) => {
  res.json('Hello World');
});

module.exports = app;
