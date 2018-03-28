import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class TestPage extends Component {
	constructor(props) {
		super(props);
	}

	renderList() {
		return this.props.list.map((item) => {
			return (
				<li key={item.title} >{item.title}</li>
			);
		});
	}
	
	render() {
		return (
			<div>
				<h1>Here is your test page!</h1>
				<Link to="/">Back to Home Page</Link>
				<h2>Here is a list of books</h2>
				<ul>
					{this.renderList()}
				</ul>
			</div>
		)
	}
}


function mapStateToProps(state) {
	return {
		list: state.list
	};
}

export default connect(mapStateToProps)(TestPage);



