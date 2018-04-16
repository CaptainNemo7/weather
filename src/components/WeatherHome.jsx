import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Search from './Search';
import DaysList from './DaysList';


class WeatherHome extends Component {
	constructor(props) {
		super(props);

		this.state = {
			location: {lat: null, long: null},
      locationName: '',
      days: []
		}

		this.searchGeolocation = this.searchGeolocation.bind(this);
    this.createDays = this.createDays.bind(this);
	}

  createDays(timeInputs) {
    let dailyData = timeInputs.data.daily.data;
    this.setState({
      days: dailyData
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
					.then((weather) => {
            this.createDays(weather);
            console.log(this.state)
					})
					.catch((error) => {
						console.log('Error: ', error)
					})
			} else {
				console.log('Error: ', status);
			}
		})
	}

	render() {
		return (
	    <div>
	    	<Search searchGeolocation={this.searchGeolocation} />

        <DaysList 
          locationName={this.state.locationName} 
          days={this.state.days} 
        />

	      <Link to="/tests">Go To Test Page</Link>
	    </div>
	  )
	}
}


export default WeatherHome;