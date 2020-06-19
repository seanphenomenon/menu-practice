const express = require ('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
  })
  
  app.listen(3000, function(){
    console.log('Listening on http://localhost:3000');
  });





