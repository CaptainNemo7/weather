import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './HomePage'
export default class App extends Component {
  render() {
    return (
    	<div>
	    	<Switch>
	        <Route exact path="/" component={HomePage} />
	        
	        <Route path="" component={NotFoundPage} />
	      </Switch>
      </div>
    );
  }
}
