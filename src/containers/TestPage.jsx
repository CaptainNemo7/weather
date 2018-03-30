import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectExampleBook } from '../actions/index';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import ListDetail from './ListDetail';

class TestPage extends Component {
	constructor(props) {
		super(props);
	}

	renderList() {
		return this.props.list.map((item) => {
			return (
				<li 
					key={item.title} 
					onClick={() => this.props.selectExampleBook(item)}
					>{item.title}</li>
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
				<ListDetail />
			</div>
		)
	}
}


function mapStateToProps(state) {
	return {
		list: state.list
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ selectExampleBook: selectExampleBook}, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(TestPage);



