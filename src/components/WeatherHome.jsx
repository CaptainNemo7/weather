import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import APIKeys from '../../apiKeys';
// create APIKeys file and save keys there = dark=darkSkyWeatherAPIKey / google=googleGeolocationAPIKey

import Search from './Search';


class WeatherHome extends Component {
	constructor(props) {
		super(props);

		this.state = {
			location: {lat: null, long: null}
		}

		this.searchGeolocation = this.searchGeolocation.bind(this);
	}

	searchGeolocation(address) {
		let geocoder = new google.maps.Geocoder();
		geocoder.geocode({address: address}, (res, status) => {
			if ( status === 'OK' ) {
				console.log(res[0].geometry.location.lat());
				console.log(res[0].geometry.location.lng());
			} else {
				console.log('Error: ', status);
			}
		})
	}

	render() {
		return (
	    <div>
	    	<Search searchGeolocation={this.searchGeolocation} />
	      <h1>Here is the WeatherHome</h1>
	      <Link to="/tests">Go To Test Page</Link>

	    </div>
	  )
	}
}


export default WeatherHome;