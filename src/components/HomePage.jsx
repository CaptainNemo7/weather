import React, { Component } from 'react';
import { Link } from 'react-router-dom';


const HomePage = (props) => {
	return (
		<div>
			<h1>Here is the HomePage</h1>
			<Link to="/tests">Go To Test Page</Link>
		</div>
	)
}


export default HomePage;