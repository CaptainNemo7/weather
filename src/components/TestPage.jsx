import React, { Component } from 'react';
import { Link } from 'react-router-dom';



const TestPage = (props) => {
	return (
		<div>
			<h1>Here is your test page!</h1>
			<Link to="/">Back to Home Page</Link>
		</div>
	)
}


export default TestPage;