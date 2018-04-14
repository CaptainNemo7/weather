import React, { Component } from 'react';

class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
			term: ''
		}

		this.updateLocation = this.updateLocation.bind(this);
		this.submitLocation = this.submitLocation.bind(this);
	}

	updateLocation(event) {
		this.setState({
			term: event.target.value
		})
	}

	submitLocation(event) {
		event.preventDefault()
		// place parent function in here to grab search term
		this.props.searchGeolocation(this.state.term);
		this.setState({
			term: ''
		})
	}

	render() {
		return (
			<div>
				<form onSubmit={this.submitLocation}>
					<input
						placeholder='Enter a city'
						value={this.state.term}
						onChange={this.updateLocation}
					/>
					<input 
						type='submit'
						value='submit'
					/>
				</form>
			</div>
		)
	}
}

export default Search;