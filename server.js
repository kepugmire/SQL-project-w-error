const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');

const app = express();

var conn = null;

massive({
  host: 'localhost',
  port: '5432',
  database: 'products_db'
}).then(function (db) {
  app.set('db', db)
  conn = db;
});

const productsCtrl = require('./productsCtrl')

var port = 3000;

app.get('/api/products', productsCtrl.getProducts)

app.post('/api/products', productsCtrl.makeNew)


app.listen(port, function () {
  console.log("Started server on port", port);
})