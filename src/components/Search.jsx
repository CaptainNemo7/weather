import React, { Component } from 'react';
import Container from '../styles/Container';
import Form from '../styles/Form';
import Button from '../styles/Button';
import Input from '../styles/Input';


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
			<Container>
				<Form onSubmit={this.submitLocation}>
					<Input
						placeholder='Enter a location'
						value={this.state.term}
						onChange={this.updateLocation}
					/>
					<Button 
						type='submit'
						value='submit'
					>Search</Button>

				</Form>
			</Container>
		)
	}
}

export default Search;