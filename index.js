const express = require ('express');
const path = require('path');
const morgan = require('morgan');
const nodemon = require('nodemon');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

console.log('Server Started')

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/public/index.html'));
  })
  
  app.listen(3000, function(){
    console.log('Listening on http://localhost:3000');
  });





