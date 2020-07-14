import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import App from '../pages/App'
import Notfund from '@/pages/notfund'

export default class RouteConfig extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={App} />
          <Route path="/home" exact component={App} />
          <Route component={Notfund} />
        </Switch>
      </Router>
    )
  }
}
