import React, { Component } from 'react';
import { connect } from 'react-redux';

class ListDetail extends Component {

	render() {
		if (!this.props.listItem) {
			return <div>Select a title to get started</div>
		}
		return (
			<div>
				<h3>List Item Detail</h3>	
				<div>Title: {this.props.listItem.title}</div>
				<div>Pages: {this.props.listItem.pages}</div>
			</div>
		)
	}
}


function mapStateToProps(state) {
	return {
		listItem: state.activeBook
	};
}

export default connect(mapStateToProps)(ListDetail);