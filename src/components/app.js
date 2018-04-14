import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import WeatherHome from './WeatherHome';
import TestPage from './TestPage';
import NotFoundPage from './NotFoundPage';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={WeatherHome} />
          <Route path="/tests" component={TestPage} /> 
          <Route path="" component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}
