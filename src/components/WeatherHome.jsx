import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Search from './Search';
import DaysList from './DaysList';
import DataGraph from './DataGraph';
import Container from '../styles/Container';

class WeatherHome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: {lat: null, long: null},
      locationName: '',
      days: [],
      currentTemp: {low: null, high: null},
      graphTemps: null,
    }

    this.searchGeolocation = this.searchGeolocation.bind(this);
    this.createDays = this.createDays.bind(this);
    this.setGraphData = this.setGraphData.bind(this);
  }

  createDays(timeInputs) {
    let dailyData = timeInputs.data[0].daily.data;
    this.setState({
      days: dailyData,
    })
    this.setGraphData(timeInputs.data[1]);
  }

  setGraphData(pastWeatherData) {
    this.setState({
      graphTemps: {
        current: {low: pastWeatherData.currentLow, high: pastWeatherData.currentHigh},
        five: {low: pastWeatherData.fiveLow, high: pastWeatherData.fiveHigh},
        two: {low: pastWeatherData.twoLow, high: pastWeatherData.twoHigh},
        one: {low: pastWeatherData.oneLow, high: pastWeatherData.oneHigh}
      }
    })
  }

  searchGeolocation(address) {
    let geocoder = new google.maps.Geocoder();
    geocoder.geocode({address: address}, (res, status) => {
      if ( status === 'OK' ) {
        this.setState({
          locationName:res[0].formatted_address
        });
        let lat = res[0].geometry.location.lat();
        let lng = res[0].geometry.location.lng();
        axios.get('http://localhost:4568/search', {params: {lat:lat, lng:lng }})
          .then((currentWeather) => {
            this.createDays(currentWeather);
          })
          .catch((error) => {
            console.log('Error: ', error);
          })
      } else {
        console.log('Error: ', status);
      }
    })
  }


  render() {
    return (
      <Container main>
        <Search searchGeolocation={this.searchGeolocation} />      
        <h3><a href="https://github.com/CaptainNemo7/weather">See the Code Here</a></h3>
        <DaysList 
          locationName={this.state.locationName} 
          days={this.state.days} 
        />
        <DataGraph graphTemps={this.state.graphTemps}/>
      </Container>
    )
  }
}


export default WeatherHome;