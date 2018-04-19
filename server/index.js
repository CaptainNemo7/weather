const express = require('express');
const app = express();
const axios = require('axios');
const moment = require('moment');
// const db = require('../database/index')
const APIKeys = process.env.darkSkyWeatherAPIKey;
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

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req,res) => {
  res.send('good to go')
})

app.get('/search', (req,res) => {
  let lat = req.query.lat;
  let lng = req.query.lng;
  let graphData = {};
  let currentWeather;

  let five = moment().subtract(5, 'years').unix();
  let two = moment().subtract(2, 'years').unix();
  let one = moment().subtract(1, 'years').unix();

  // api calls to set graph data and curent weather data
  axios.get(`https://api.darksky.net/forecast/${APIKeys.Keys.darkSkyWeatherAPIKey}/${lat},${lng}`)
    .then((weatherData) => {
      // initial data and current highs and lows
      currentWeather = weatherData.data;
      graphData.currentLow = currentWeather.daily.data[0].temperatureLow;
      graphData.currentHigh =  currentWeather.daily.data[0].temperatureHigh;
    })
    .then((weather) => {
      axios.get(`https://api.darksky.net/forecast/${APIKeys.Keys.darkSkyWeatherAPIKey}/${lat},${lng},${five}`)
      .then((newData) => {
        // get five year data
        graphData.fiveLow = newData.data.daily.data[0].temperatureLow;
        graphData.fiveHigh = newData.data.daily.data[0].temperatureHigh; 
        axios.get(`https://api.darksky.net/forecast/${APIKeys.Keys.darkSkyWeatherAPIKey}/${lat},${lng},${two}`)
        .then((moreData) => {
          // get two year data
          graphData.twoLow = moreData.data.daily.data[0].temperatureLow;
          graphData.twoHigh = moreData.data.daily.data[0].temperatureHigh; 
          axios.get(`https://api.darksky.net/forecast/${APIKeys.Keys.darkSkyWeatherAPIKey}/${lat},${lng},${one}`)
          .then((finalData) => {
            // get one year data and send over to client
            graphData.oneLow = finalData.data.daily.data[0].temperatureLow;
            graphData.oneHigh = finalData.data.daily.data[0].temperatureHigh; 
            res.send([currentWeather, graphData]);
          })
          .catch(error => {
            console.log('year one error: ', error);
          })
        })
        .catch(error => {
          console.log('year two error: ', error);
        })
      })
      .catch(error => {
        console.log('year five error: ', error);
      })
    })
    .catch((error) => {
      console.log('current year Error: ', error);
    })
})

// Init server
app.listen(app.get('port'));
console.log('Listening on', app.get('port'));