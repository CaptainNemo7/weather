const express = require('express');
const app = express();
// const db = require('../database/index')
// const APIKeys = '../apiKeys'

let bodyParser = require('body-parser');



// Set port
app.set('port', process.env.PORT || 4568);


// Static Files
app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.all('*',function(req,res,next) {
  if (!req.get('Origin')) {
    return next();
  } 

  res.set('Access-Control-Allow-Origin','http://localhost:8080');
  res.set('Access-Control-Allow-Methods','GET,POST');
  res.set('Access-Control-Allow-Headers','X-Requested-With,Content-Type');

  if ('OPTIONS' == req.method) {
    return res.send(200);
  }

  next();
});

app.get('/', (req,res) => {
  res.send('good to go')
})


// Init server
app.listen(app.get('port'));
console.log('Listening on', app.get('port'));