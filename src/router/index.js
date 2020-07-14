import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import App from '../pages/App'

export default class RouteConfig extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={App} />
          <Route path="/home" exact component={App} />
        </Switch>
      </Router>
    )
  }
}
